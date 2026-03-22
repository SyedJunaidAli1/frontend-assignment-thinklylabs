# 🛡️ Skyrim Chatbot – Whiterun Guard

An immersive, character-driven chatbot built with Next.js that lets users interact with a Whiterun Guard from the world of Skyrim.

Instead of a generic AI assistant, this project focuses on creating a **themed conversational experience** where the bot stays in character and responds with personality.

---

## 🚀 Live Demo
👉 https://frontend-assignment-thinklylabs.vercel.app

---

## 📌 Why I Built This

For this assignment, I wanted to move beyond a standard chatbot and build something that feels like a **real product**.

I chose a **Skyrim Whiterun Guard** because:
- It allows for strong personality and tone
- Makes the experience fun and immersive
- Demonstrates how prompt engineering can shape AI behavior

---

## ✨ Features

- 🧠 **Character-based AI** (Whiterun Guard persona)
- 💬 **Context-aware conversation** (remembers chat history)
- ⚡ **Fast responses using Groq API**
- 🎨 **Themed UI** inspired by Skyrim
- ⏳ **Loading states** (“Guard is thinking...”)
- 🧾 **Empty state with suggested prompts**
- 📱 **Responsive design**

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **shadcn/ui**
- **Groq API (LLaMA 3)**
- **Tailwind CSS**

---

## 🧠 How It Works

Instead of training a model, I used **prompt engineering** to control the chatbot’s behavior.

A system prompt ensures that the AI:
- Stays in character as a Whiterun Guard
- Uses a medieval tone
- References Skyrim lore (dragons, cities, etc.)
- Keeps responses concise and immersive

---

## 📂 Project Structure
```
app/page.tsx

api/chat/route.ts

components/
ChatContainer.tsx
ChatMessage.tsx
ChatInput.tsx
EmptyState.tsx
LoadingMessage.tsx
```

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/SyedJunaidAli1/frontend-assignment-thinklylabs
cd frontend-assignment-thinklylabs
```
2. Install dependencies
```
bun install
```
3. Add environment variables

Create a .env.local file:
```
GROQ_API_KEY=your_api_key_here
```
4. Run the development server
```
bun run dev
```

## 🎯 Key Focus Areas
Frontend experience over backend complexity
Clean UI and smooth interaction
Making the chatbot feel purpose-built
Using AI as a tool, not the product itself
🎥 Loom Walkthrough

🙌 Acknowledgements
Inspired by The Elder Scrolls V: Skyrim
Powered by Groq and LLaMA 3