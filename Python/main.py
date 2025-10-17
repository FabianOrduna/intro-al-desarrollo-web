from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def hola_root():
    return {"Hello_key": "World_value"}

@app.get("/usuario")
def usuario():
    return {"nombre": "Colmillo"}