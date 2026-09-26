from __future__ import annotations

from pydantic import BaseModel, Field


class StockQuote(BaseModel):
    symbol: str
    name: str
    price: float = Field(..., ge=0)
    change: float
    percent_change: float
    market_state: str


class MarketSnapshotResponse(BaseModel):
    stocks: list[StockQuote]
    count: int
