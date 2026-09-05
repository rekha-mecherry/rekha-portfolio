# Rekha Mecherry - Professional Portfolio & Multi-Agent AI System

A modern full-stack portfolio showcasing 20+ years of expertise in Cloud Architecture (Azure/GCP), Platform Engineering, Enterprise Integration, and Conversational AI.

## Features

- **Interactive Portfolio (Angular 21 + Tailwind CSS)**: Hero section, career timeline, key projects, technical skill matrix, and architecture showcase.
- **Multi-Agent AI Assistant (FastAPI + Google Gemini)**: Embedded intelligent chat widget powered by a multi-agent routing system
## Project Structure

```
rekha-porfolio/
├── backend/            # FastAPI Python backend with Gemini multi-agent system
│   ├── agents/         # Agent definitions and query router
│   ├── data/           # Structured profile data (JSON)
│   ├── main.py         # FastAPI application entrypoint
│   └── requirements.txt
├── frontend/           # Angular frontend application
│   ├── src/            # Angular components, services, and styles
│   └── package.json
└── README.md
```

## Getting Started

### 1. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

# Create .env with your Gemini API Key
cp .env.example .env

# Run FastAPI server
uvicorn main:app --reload --port 8000
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run start
```

Visit `http://localhost:4200` to view the application.
