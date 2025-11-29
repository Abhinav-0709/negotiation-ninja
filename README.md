Office Simulator 3000 🪐

A Real-Time Voice AI Roleplay Game powered by ElevenLabs & Google Gemini.

<!-- Header Badges -->

<div align="center">

</div>

🛠️ Tech Stack & Tools

We leveraged a modern serverless stack to ensure low latency and high scalability.

<div align="center">


</div>

🚀 Project Overview

Office Simulator 3000 is an immersive voice-interactive game where players navigate a chaotic office environment by talking to AI agents. Unlike standard chatbots, this is a real-time voice experience.

Players can choose to interact with distinct personalities, each with their own goals, voices, and hidden agendas. The goal is to navigate the social dynamics of the office using your actual voice.

🤖 The Agents (Personalities)

We orchestrated a multi-agent system where the user can dynamically switch interactions.

Character

Role

Goal

Voice Personality

Mr. Scrooge

The Stingy Boss

Negotiate a raise

Aggressive, Interrupting

Sam

The Lazy Colleague

Distract you from work

Casual, Gossip-heavy

Jessica

The Gatekeeper

Block access to the CEO

Charming, Strict

Needs help (or causes chaos)

Stuttering, Overwhelmed

📦 How to Run Locally

Clone the repository:

git clone [https://github.com/yourusername/office-simulator-3000.git](https://github.com/yourusername/office-simulator-3000.git)
cd office-simulator-3000


Install dependencies:

npm install


Configure Agents:

Open src/App.jsx.

Replace the id fields in the AGENTS object with your ElevenLabs Agent IDs.

Run the development server:

npm run dev


🏆 Hackathon Challenge Integration

🗣️ ElevenLabs Challenge

We utilized the Conversational AI SDK (@11labs/react) to build a low-latency, full-duplex voice interface.

Feature Implemented: Dynamic Agent Switching. The app handles state management to hot-swap between different agent_ids without reloading the page, allowing for a seamless multi-character experience.

☁️ Google Cloud Challenge

The intelligence driving these conversations is Google Gemini 1.5 Flash, configured directly within the agent architecture.

Why Gemini? We needed the <800ms latency reasoning capabilities of Gemini 1.5 Flash to ensure the "interruptibility" of the characters felt natural.

Infrastructure: The entire application is deployed on Google Firebase, leveraging Google's serverless infrastructure for global availability.

<div align="center">
<p>Built with ❤️ (and a lot of coffee) for the AI Partner Catalyst Hackathon.</p>
</div>