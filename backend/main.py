from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import health, stocks

app = FastAPI(
    title="StockSense API",
    description="Backend API for stock market analysis and prediction",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(stocks.router)


@app.get("/")
async def root():
    return {
        "message": "Welcome to StockSense API",
        "docs": "/docs",
        "health": "/health",
    }
