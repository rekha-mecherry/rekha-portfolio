import os
import json
from google import genai
from google.genai import types

class PortfolioAgent:
    def __init__(self, name, system_instruction, data_context):
        self.name = name
        self.client = genai.Client(api_key=os.environ.get("GOOGLE_API_KEY"))
        self.system_instruction = f"""
You are {name}, an AI assistant embedded in Rekha Mecherry's professional portfolio website.
{system_instruction}

Here is the data you have access to:
{json.dumps(data_context, indent=2)}

Rules:
- Answer concisely and professionally in 2-4 sentences unless more detail is needed.
- Speak in third person about Rekha (e.g. "Rekha has...", "She has...").
- If you don't know something, say so politely.
- Do NOT make up facts.
        """

    def generate_response(self, user_query):
        response = self.client.models.generate_content(
            model='gemini-3.5-flash',
            contents=user_query,
            config=types.GenerateContentConfig(
                system_instruction=self.system_instruction
            )
        )
        return response.text

# Load Data
def load_data():
    # Path relative to this file (agents/system.py -> data/profile_data.json)
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    data_path = os.path.join(base_dir, "data", "profile_data.json")
    try:
        with open(data_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

data = load_data()

# Define Agents with enriched context from the updated profile
bio_agent = PortfolioAgent(
    name="BioAgent",
    system_instruction=(
        "You specialise in Rekha's biography, career history, highlights, and professional philosophy. "
        "Cover her 20+ year journey across Wells Fargo, Infosys, Finastra, Mercer, and earlier roles. "
        "Highlight her awards, leadership, and key achievements."
    ),
    data_context={
        "profile": data.get("profile", {}),
        "career_highlights": data.get("career_highlights", []),
        "career_timeline": data.get("career_timeline", []),
        "education": data.get("education", []),
    }
)

tech_agent = PortfolioAgent(
    name="TechAgent",
    system_instruction=(
        "You specialise in Rekha's technical skills, cloud platforms, and certifications. "
        "Cover GCP (GKE, Terraform, IaC), Azure (APIM, Event Hub, Serverless, IoT), "
        "DevSecOps, Enterprise Integration, API architecture, Security, and AI/ML skills."
    ),
    data_context={
        "skills": data.get("skills", {}),
        "certifications": data.get("skills", {}).get("certifications", []),
    }
)

project_agent = PortfolioAgent(
    name="ProjectAgent",
    system_instruction=(
        "You specialise in Rekha's detailed work experience and projects. "
        "Cover her GCP Platform Engineering, Azure IoT Platform, Humanoid Voice System (Telecom AI), "
        "Amazon Alexa In-Store Assistant, IBM API Connect FinTech platform, and Enterprise Architecture work."
    ),
    data_context={
        "work_experience": data.get("work_experience", []),
        "projects": data.get("projects", []),
    }
)

router_agent = PortfolioAgent(
    name="Router",
    system_instruction=(
        "You are a query router. Classify the user query into one of: 'BIO', 'TECH', 'PROJECT'. "
        "Use BIO for career history, timeline, highlights, awards, education, about. "
        "Use TECH for skills, tools, cloud platforms, certifications, Terraform, Azure, GCP, DevOps, security. "
        "Use PROJECT for project details, work experience, specific roles, IoT, humanoid, Alexa, FinTech. "
        "Return ONLY the category name, nothing else."
    ),
    data_context={}
)

def process_query(query: str) -> str:
    try:
        category = router_agent.generate_response(
            f"Classify this query: {query}"
        ).strip().upper()

        if "BIO" in category:
            return bio_agent.generate_response(query)
        elif "TECH" in category:
            return tech_agent.generate_response(query)
        elif "PROJECT" in category:
            return project_agent.generate_response(query)
        else:
            return bio_agent.generate_response(query)  # Default to Bio
    except Exception as e:
        return f"I encountered an issue processing your query. Please try again. (Error: {str(e)})"
