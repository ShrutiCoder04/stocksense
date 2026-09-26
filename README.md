# StockSense

A stock market analysis and prediction platform with a FastAPI backend and lightweight frontend dashboard.

## Project structure

- `backend/` - FastAPI application
- `frontend/` - static frontend assets

## Quick start

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
```

### Frontend

Open `frontend/index.html` in a browser, or serve it with a local static server.

## Features

- Portfolio and watchlist tracking
- Technical and sentiment-based analysis
- Forecasting pipeline skeleton
- API-first architecture
