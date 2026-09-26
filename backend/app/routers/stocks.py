from __future__ import annotations

from typing import List, Optional

from fastapi import APIRouter, Query

from app.services.market_service import DEFAULT_TICKERS, get_market_snapshot, get_stock_quote

router = APIRouter(prefix="/api/stocks", tags=["stocks"])


@router.get("/market-snapshot")
async def market_snapshot(
    tickers: str = Query(default=",".join(DEFAULT_TICKERS), description="Comma-separated ticker symbols")
):
    symbols = [symbol.strip().upper() for symbol in tickers.split(",") if symbol.strip()]
    if not symbols:
        symbols = DEFAULT_TICKERS

    stocks = await get_market_snapshot(symbols)
    return {"stocks": stocks, "count": len(stocks)}


@router.get("/{symbol}")
async def stock_detail(symbol: str):
    quote = await get_stock_quote(symbol.upper())
    return quote
