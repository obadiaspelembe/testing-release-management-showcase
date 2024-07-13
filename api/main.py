import random
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# List of inspirational phrases
phrases = [
    {"phrase": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
    {"phrase": "You are stronger than you think.", "author": "Unknown"},
    {"phrase": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt"},
    {"phrase": "Act as if what you do makes a difference. It does.", "author": "William James"},
    {"phrase": "Success is not how high you have climbed, but how you make a positive difference to the world.", "author": "Roy T. Bennett"},
    {"phrase": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis"},
    {"phrase": "Keep your face always toward the sunshine—and shadows will fall behind you.", "author": "Walt Whitman"},
    {"phrase": "What lies behind us and what lies before us are tiny matters compared to what lies within us.", "author": "Ralph Waldo Emerson"},
    {"phrase": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"phrase": "If you want to lift yourself up, lift up someone else.", "author": "Booker T. Washington"}
]

app = FastAPI()

origins = [ 
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/inspire")
def get_inspiration():
    return random.choice(phrases)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)