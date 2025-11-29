🪐 Office Simulator 3000
A Real-Time Voice AI Roleplay Game powered by ElevenLabs & Google Gemini
<p align="center"> <img src="https://img.shields.io/badge/Voice%20AI-ElevenLabs-orange?style=for-the-badge" /> <img src="https://img.shields.io/badge/AI%20Model-Gemini%201.5%20Flash-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/Frontend-React-%2361DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Hosting-Firebase-yellow?style=for-the-badge&logo=firebase&logoColor=white" /> </p>
🎮 What is Office Simulator 3000?

Office Simulator 3000 is an immersive real-time voice roleplay game where you talk to AI-powered office characters who respond instantly with human-like voices.

No text input.
No delays.
Just you, your microphone, and a chaotic corporate universe.

🛠️ Tech Stack
<p align="center"> <img src="https://skillicons.dev/icons?i=react,firebase,nodejs,vite" /> <img src="https://skillicons.dev/icons?i=googlecloud" /> </p>
Layer	Tech
Voice Engine	ElevenLabs Conversational AI SDK (@11labs/react)
Reasoning Engine	Google Gemini 1.5 Flash
Deployment	Firebase Hosting + Cloud Functions
Frontend	React + Vite
State/Agents	Custom Multi-Agent Orchestrator
🚀 Project Overview

Office Simulator 3000 allows players to speak directly with multiple AI characters, each with:
✔ unique personalities
✔ their own goals
✔ interruptible, low-latency voice
✔ dynamic persona switching
✔ hidden agendas 👀

This isn't a chatbot.
It's a full-duplex, real-time audio game.

🤖 Meet the Agents

We designed a multi-agent ecosystem so players can switch personalities mid-conversation without reloading.

Character	Role	Goal	Voice Personality
Mr. Scrooge	The Stingy Boss	Prevent your raise	Aggressive, interrupts constantly
Sam	Lazy Colleague	Distract you from real work	Casual, gossip-heavy
Jessica	HR Gatekeeper	Block access to the CEO	Strict but charming
Intern (You choose name)	Overwhelmed assistant	Needs help (or causes chaos)	Stutters, panics, chaotic energy

Each agent is backed by its own ElevenLabs Voice + Gemini reasoning profile.

🧩 How It Works Under the Hood
<details> <summary><strong>Click to expand</strong></summary>
⚡ Real-time Voice Flow

User speaks into the microphone

ElevenLabs WebSocket stream → transcribes + generates voice response

Gemini 1.5 Flash provides ultra-low-latency reasoning (<800ms)

Hot-swappable agent state allows switching characters instantly

Playback continues with natural interruptions & emotional tone

🏗 Architecture
React UI
   │
   ├─ @11labs/react (full-duplex voice)
   │
   ├─ Agent Orchestrator (state machine)
   │
   └─ Gemini Engine (character behavior + personality scripts)

</details>
🧑‍💻 Run Locally
1️⃣ Clone the repo
git clone (https://github.com/Abhinav-0709/negotiation-ninja)
cd office-simulator-3000

2️⃣ Install dependencies
npm install

3️⃣ Configure Agent IDs

Open:

/src/App.jsx


Replace:

id: "<YOUR_ELEVENLABS_AGENT_ID>"

4️⃣ Start the dev server
npm run dev

🏆 Hackathon Context
🗣️ ElevenLabs Challenge

We implemented:

✔ Dynamic Agent Switching

Hot-swap between characters without refreshing, maintaining audio context.

✔ Full-Duplex Voice

Using @11labs/react to enable natural interruptions & overlap speech.

☁️ Google Cloud + Gemini Challenge
Why Gemini 1.5 Flash?

Because we needed:

⚡ Under 800ms reasoning

🎭 Strong personality conditioning

🔄 Smooth conversational flow

Infra

Firebase Hosting

Firebase Functions for agent logic

Google Cloud for Gemini runtime

<div align="center"> <h3>Built with ❤️, ☕, and a bit of corporate chaos for the AI Partner Catalyst Hackathon.</h3> </div>
