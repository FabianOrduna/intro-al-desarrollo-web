import os
import asyncpg
from dotenv import load_dotenv

# Load environment variables from .env (optional in dev)
load_dotenv()

DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")

# Global pool reference
pool: asyncpg.Pool = None

async def connect_db():
    """
    Initialize a connection pool to PostgreSQL.
    Call this once at app startup.
    """
    global pool
    if pool is None:
        pool = await asyncpg.create_pool(
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME,
            host=DB_HOST,
            port=DB_PORT,
            min_size=1,   # minimum connections
            max_size=10   # maximum connections
        )
    return pool

async def disconnect_db():
    """
    Close the connection pool.
    Call this once at app shutdown.
    """
    global pool
    if pool:
        await pool.close()
        pool = None

async def fetch(query: str, *args):
    """
    Run a SELECT query and return results.
    """
    async with pool.acquire() as conn:
        return await conn.fetch(query, *args)

async def execute(query: str, *args):
    """
    Run INSERT/UPDATE/DELETE queries.
    """
    async with pool.acquire() as conn:
        return await conn.execute(query, *args)
