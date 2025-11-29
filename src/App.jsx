import { useConversation } from '@11labs/react';
import { motion } from 'framer-motion';
import { Mic, PhoneOff } from 'lucide-react';
import { useState } from 'react';

// --- Custom Orb Components ---

const OrbContainer = ({ children, isActive, color, glowColor }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Outer Glow */}
    <motion.div
      animate={{
        scale: isActive ? [1, 1.2, 1] : 1,
        opacity: isActive ? [0.5, 0.8, 0.5] : 0.3,
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute inset-0 rounded-full blur-xl ${glowColor}`}
    />
    {/* Main Orb */}
    <div className={`relative w-full h-full rounded-full overflow-hidden border-2 border-white/50 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] ${color}`}>
      {children}
    </div>
  </div>
);

const OrbWavy = ({ isActive }) => (
  <OrbContainer isActive={isActive} color="bg-gradient-to-br from-cyan-500 via-blue-600 to-pink-600" glowColor="bg-cyan-400">
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-60 mix-blend-overlay">
      <motion.path
        d="M0,50 Q25,30 50,50 T100,50"
        stroke="white" fill="none" strokeWidth="0.5"
        animate={{ d: ["M0,50 Q25,30 50,50 T100,50", "M0,50 Q25,70 50,50 T100,50", "M0,50 Q25,30 50,50 T100,50"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0,40 Q25,60 50,40 T100,40"
        stroke="cyan" fill="none" strokeWidth="0.5"
        animate={{ d: ["M0,40 Q25,60 50,40 T100,40", "M0,40 Q25,20 50,40 T100,40", "M0,40 Q25,60 50,40 T100,40"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0,60 Q25,40 50,60 T100,60"
        stroke="pink" fill="none" strokeWidth="0.5"
        animate={{ d: ["M0,60 Q25,40 50,60 T100,60", "M0,60 Q25,80 50,60 T100,60", "M0,60 Q25,40 50,60 T100,60"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </OrbContainer>
);

const OrbWaveform = ({ isActive }) => (
  <OrbContainer isActive={isActive} color="bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800" glowColor="bg-indigo-500">
    <div className="absolute inset-0 flex items-center justify-center opacity-80 mix-blend-overlay">
      <motion.div
        animate={{ scaleY: isActive ? [1, 1.5, 0.8, 1.2, 1] : 1 }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ clipPath: 'polygon(0 50%, 10% 40%, 20% 60%, 30% 45%, 40% 55%, 50% 30%, 60% 70%, 70% 40%, 80% 60%, 90% 50%, 100% 50%)' }}
      />
    </div>
  </OrbContainer>
);

const OrbGlow = ({ isActive }) => (
  <OrbContainer isActive={isActive} color="bg-gradient-to-br from-pink-600 via-red-600 to-orange-700" glowColor="bg-red-500">
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-50 mix-blend-screen"
    >
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-pink-400 rounded-full blur-md" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-orange-400 rounded-full blur-md" />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent opacity-30" />
  </OrbContainer>
);

const OrbRadial = ({ isActive }) => (
  <OrbContainer isActive={isActive} color="bg-gradient-to-br from-amber-700 via-orange-800 to-brown-900" glowColor="bg-orange-500">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-1/4 h-1/4 bg-black rounded-full z-10" />
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent"
          style={{ rotate: `${i * 15}deg` }}
          animate={{ opacity: isActive ? [0.4, 0.8, 0.4] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
        />
      ))}
    </div>
  </OrbContainer>
);

const AGENTS = {
  boss: {
    id: 'agent_6301kb7hbmmxe6z9njzb76g0n3yr',
    name: 'Mr. Scrooge',
    role: 'The Stingy Boss',
    component: OrbWavy
  },
  colleague: {
    id: 'agent_8101kb7kx0qxfkfvn516vbs1yhn4',
    name: 'Sam',
    role: 'The Lazy Bestie',
    component: OrbWaveform
  },
  receptionist: {
    id: 'agent_7601kb7m12nqesca63dpjyw1b5ap',
    name: 'Jessica',
    role: 'The Gatekeeper',
    component: OrbGlow
  }
};

// --- Main App Component ---

export default function App() {
  const [selectedChar, setSelectedChar] = useState('boss'); // Default to Boss
  const conversation = useConversation();
  const { status, isSpeaking } = conversation;

  const startCall = async () => {
    await conversation.startSession({
      agentId: AGENTS[selectedChar].id,
    });
  };

  const endCall = async () => {
    await conversation.endSession();
  };

  const currentAgent = AGENTS[selectedChar];
  const CurrentOrb = currentAgent.component;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-black text-white flex flex-col items-center justify-center font-sans p-4 overflow-hidden">

      {/* Subtle Stars Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`
            }}
          />
        ))}
      </div>

      <div className="text-center mb-10 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl">
          Office Simulator 3000
        </h1>
        <p className="text-slate-400 mt-4 text-xl font-light">Choose your conversation partner.</p>
      </div>

      {/* CHARACTER SELECTOR */}
      {status !== 'connected' && (
        <div className="flex gap-6 mb-12 flex-wrap justify-center z-10">
          {Object.entries(AGENTS).map(([key, agent]) => {
            const OrbComponent = agent.component;
            const isSelected = selectedChar === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedChar(key)}
                className={`relative w-24 h-24 rounded-full transition-all duration-300 group
                  ${isSelected ? 'scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'}`}
              >
                <OrbComponent isActive={isSelected} />
                <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold text-sm transition-colors
                  ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                  {agent.name}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* MAIN AVATAR CIRCLE */}
      <div className="relative mb-12 z-10">
        <motion.div
          animate={{ scale: isSpeaking ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`w-64 h-64 rounded-full transition-all duration-500
            ${status === 'connected' ? 'shadow-[0_0_50px_rgba(255,255,255,0.3)]' : ''}`}
        >
          <CurrentOrb isActive={isSpeaking && status === 'connected'} />
        </motion.div>
      </div>

      {/* CONTROLS */}
      <div className="flex gap-6 z-10">
        {status === 'connected' ? (
          <button
            onClick={endCall}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-300 to-pink-500 hover:from-pink-500 hover:to-pink-100 rounded-full text-xl font-bold shadow-lg shadow-red-900/30 transition-all hover:scale-105 active:scale-95"
          >
            <PhoneOff /> Hang Up
          </button>
        ) : (
          <button
            onClick={startCall}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 rounded-full text-xl font-bold shadow-lg shadow-green-900/30 transition-all hover:scale-105 active:scale-95"
          >
            <Mic /> Call {currentAgent.name}
          </button>
        )}
      </div>

      <p className="mt-8 text-slate-400 font-mono text-sm z-10">
        {status === 'connected' ? `Interacting with: ${currentAgent.role}` : "Ready to connect..."}
      </p>

    </div>
  );
}