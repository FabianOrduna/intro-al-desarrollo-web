from fastapi import FastAPI
from pydantic import BaseModel

class DataItem(BaseModel):
    clave: str
    nombre: str

app = FastAPI()

DBMemory = [{"clave":"123", "nombre":"Colmillo"}]

# ------------------------------------ GET ------------------------------------ 
@app.get("/")
def read_root():
    return DBMemory

@app.get("/items/{item_id}")
def read_item(item_id):
    """
    Lógica de negocio
    """
    return {"item_id": item_id}

@app.get("/items-param")
def read_item_param(skip:int=10):
    """
    Lógica de negocio
    """
    return {"skip": skip}

@app.get("/items-with-param/{item_id}")
def read_item_with_param(item_id, skip:int=10):
    """
    Lógica de negocio
    """
    return {"item_id":item_id, "skip": skip}

@app.get("/items/{item_id}/photo")
def read_item_photo(item_id):
    """
    Lógica de negocio
    """
    return {"item_id": item_id, "photo": "This is a photo"}


@app.get("/items")
def get_item():
    """
    Lógica de negocio
    """
    return {"message": "Get for items"}

# ------------------------------------ POST ------------------------------------ 

@app.post("/items")
def post_item():
    """
    Lógica de negocio
    """
    return {"message": "Item created successfully"}

@app.post("/data/{clave}/{nombre}")
def new_data(clave, nombre):
    elemento = {"clave":clave, "nombre":{nombre}}
    DBMemory.append(elemento)
    return {"message": "Data added successfully", "data": elemento}

# ------------------------------------ POST con Body ------------------------------------
# FORMA REQUERIDA
@app.post("/data")
def new_data(item: DataItem):
    elemento = {"clave": item.clave, "nombre": item.nombre}
    DBMemory.append(elemento)
    return {"message": "Data added successfully", "data": elemento}

""" Llamada desde Javascript
fetch("http://127.0.0.1:8000/data", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({clave:"567",nombre:"Farah"})
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
"""