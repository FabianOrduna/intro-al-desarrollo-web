from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utilsdb import connect_db, disconnect_db, fetch, execute
from datetime import datetime, date

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    await connect_db()

@app.on_event("shutdown")
async def shutdown_event():
    await disconnect_db()

@app.get("/personas")
async def get_users():
    rows = await fetch("SELECT id, nombre, apellido_paterno, apellido_materno, fecha_nacimiento FROM persona")
    return {"users": [dict(row) for row in rows]}

@app.post("/persona")
async def create_persona(
    nombre: str,
    apellido_paterno: str,
    apellido_materno: str | None = None,
    fecha_nacimiento: str = "1980-01-01"  # YYYY-MM-DD format
):
    
    # Convert string to datetime.date
    fecha_nacimiento_date: date = datetime.strptime(fecha_nacimiento, "%Y-%m-%d").date()

    # Insert into persona table
    result = await execute(
        """
        INSERT INTO persona (nombre, apellido_paterno, apellido_materno, fecha_nacimiento)
        VALUES ($1, $2, $3, $4)
        """,
        nombre,
        apellido_paterno,
        apellido_materno,
        fecha_nacimiento_date
    )
    return {"status": "success", "detail": result}

@app.delete("/persona")
async def create_persona(
    id: int
):
    
    # Delete from persona table
    result = await execute(
        """
        DELETE FROM persona WHERE persona.id = ($1)
        """,
        id
    )
    return {"status": "success", "detail": result}