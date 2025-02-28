from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

# Adicionando o middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens; para produção, use seu domínio específico
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Banco de dados fake (simulação)
database = []

class Participant(BaseModel):
    firstName: str
    lastName: str
    participation: int

@app.get("/data", response_model=List[Participant])
def get_data():
    return database

@app.post("/data")
def add_data(participant: Participant):
    if participant.participation <= 0:
        raise HTTPException(status_code=400, detail="A participação deve ser maior que zero")
    
    database.append(participant)
    return database
