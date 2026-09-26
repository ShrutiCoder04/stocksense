from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["health"])


@router.get("/health")
async def health_check():
    return {
        "status": "ok",
        "service": "stocksense-backend",
        "version": "0.1.0",
    }
