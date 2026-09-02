
import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="Rekha Mecherry Portfolio API")

# CORS setup
origins = [
    "http://localhost:4200",
    "http://127.0.0.1:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from agents.system import process_query

# Request model
class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        user_message = request.message
        response_text = process_query(user_message)
        return {"response": response_text}
    except Exception as e:
        return {"response": f"I encountered an error processing your query: {str(e)}"}

# --- Static Frontend Serving ---
STATIC_DIR = Path(__file__).parent / "static"

if STATIC_DIR.exists():
    # Mount all static assets (JS, CSS, images, etc.)
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

    # SPA catch-all route to serve Angular's index.html
    @app.get("/{full_path:path}")
    async def serve_angular_app(full_path: str):
        file_path = STATIC_DIR / full_path
        if file_path.is_file():
            return FileResponse(file_path)
        return FileResponse(STATIC_DIR / "index.html")
else:
    @app.get("/")
    async def root():
        return {"message": "Welcome to Portfolio Backend (Frontend static build not linked yet)"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)












# import os
# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from dotenv import load_dotenv

# # Load environment variables
# load_dotenv()

# app = FastAPI(title="Rekha Mecherry Portfolio API")

# # CORS setup to allow Angular frontend
# origins = [
#     "http://localhost:4200",
#     "http://127.0.0.1:4200",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# from agents.system import process_query

# # Request model
# class ChatRequest(BaseModel):
#     message: str

# @app.get("/")
# async def root():
#     return {"message": "Welcome to Rekha Mecherry's Portfolio Backend"}

# @app.post("/api/chat")
# async def chat_endpoint(request: ChatRequest):
#     try:
#         user_message = request.message
#         response_text = process_query(user_message)
#         return {"response": response_text}
#     except Exception as e:
#         return {"response": f"I encountered an error processing your query: {str(e)}"}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)
