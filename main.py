# Ponto inicial do sistema

from fastapi import FastAPI

# Cria a "instância" FastAPI
app = FastAPI()

x = 5

# cria um path e define um método 
@app.get("/")
async def root():
    return {"number": x}