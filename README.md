# StockSense

A stock market analysis and prediction platform with a FastAPI backend and lightweight frontend dashboard.

## Technology Stack

### Backend
- **Python 3.10+**
- **FastAPI** - Modern, fast web framework for building APIs
- **Uvicorn** - ASGI server for running FastAPI
- **yfinance** - Fetches real-time and historical stock market data from Yahoo Finance
- **Pydantic** - Data validation and settings management

### Frontend
- **HTML5** - Markup structure
- **CSS3** - Styling and responsive design
- **JavaScript (ES6)** - Client-side interactivity and API calls
- **Vanilla JS** - No framework dependencies for lightweight deployment

### DevOps & Deployment
- **Docker** - Containerization for consistent environments
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and static file serving
- **GitHub Actions** - CI/CD for automated testing and deployment

### Testing & Code Quality
- **pytest** - Unit and integration testing framework
- **pytest-cov** - Code coverage reporting
- **black** - Code formatter
- **flake8** - Linting
- **isort** - Import sorting

## Project Structure

```
stocksense/
├── backend/                          # FastAPI application
│   ├── app/
│   │   ├── routers/                  # API endpoint routes
│   │   │   ├── health.py            # Health check endpoint
│   │   │   └── stocks.py            # Stock data endpoints
│   │   ├── services/                # Business logic layer
│   │   │   └── market_service.py    # Stock market data fetching
│   │   ├── schemas/                 # Request/response data models
│   │   │   └── stock.py             # Stock data schema
│   │   └── models/                  # Database models (future)
│   ├── tests/                        # Unit and integration tests
│   ├── main.py                       # FastAPI application entry point
│   ├── requirements.txt              # Production dependencies
│   ├── requirements-dev.txt          # Development dependencies
│   └── .env.example                  # Environment variables template
├── frontend/                         # Static frontend assets
│   ├── index.html                    # Main HTML page
│   ├── app.js                        # Frontend application logic
│   ├── styles.css                    # Styling
│   └── package.json                  # Frontend metadata
├── Dockerfile                        # Backend containerization
├── docker-compose.yml                # Multi-container setup
├── nginx.conf                        # Nginx configuration
├── .github/workflows/                # CI/CD workflows
│   ├── tests.yml                     # Automated testing pipeline
│   └── deploy.yml                    # Deployment pipeline
├── .gitignore                        # Git ignore rules
├── .editorconfig                     # Editor configuration
├── LICENSE                           # MIT License
├── README.md                         # Project documentation
└── CONTRIBUTING.md                   # Contribution guidelines

```

## Features

- **Real-time Stock Data** - Fetches live stock prices and market data via yfinance
- **Market Snapshot** - View multiple stock quotes simultaneously
- **API-First Architecture** - RESTful API with full documentation at `/docs`
- **Fallback Data** - Graceful degradation with cached fallback data when API is unavailable
- **Responsive Frontend** - Works on desktop and mobile devices
- **Health Monitoring** - Built-in health check endpoints for monitoring
- **Container Ready** - Docker and Docker Compose support for easy deployment
- **CI/CD Pipeline** - Automated testing and deployment via GitHub Actions

## Quick Start

### Prerequisites
- Python 3.10 or higher
- Node.js 14+ (optional, for frontend development)
- Docker & Docker Compose (optional, for containerized setup)

### Backend Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
```

Backend will be available at: **http://localhost:8000**
API documentation: **http://localhost:8000/docs**

### Frontend Setup

```bash
cd frontend
python -m http.server 5500
# or
npm install && npm run dev
```

Frontend will be available at: **http://localhost:5500**

### Using Docker Compose (Recommended)

```bash
docker-compose up --build
```

- Backend: http://localhost:8000
- Frontend: http://localhost:3000

## API Endpoints

### Health Check
```
GET /health
```
Returns the health status of the API.

### Market Snapshot
```
GET /api/stocks/market-snapshot?tickers=AAPL,MSFT,GOOGL
```
Returns current stock data for specified tickers.

### Stock Detail
```
GET /api/stocks/{symbol}
```
Returns detailed quote for a specific stock symbol.

## Testing

### Run All Tests
```bash
cd backend
pip install -r requirements-dev.txt
pytest
```

### Run Tests with Coverage
```bash
pytest --cov=app --cov-report=html
```

### Run Specific Test
```bash
pytest backend/tests/test_health.py -v
```

## Code Quality

### Format Code
```bash
black backend/app
```

### Check Linting
```bash
flake8 backend/app
```

### Sort Imports
```bash
isort backend/app
```

## Environment Variables

Create a `.env` file in the `backend/` directory:

```env
APP_NAME=stocksense
APP_ENV=development
DEBUG=true
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:5500
API_PREFIX=/api
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Setting up your development environment
- Creating feature branches
- Writing and running tests
- Submitting pull requests
- Code style standards

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Shruti Coder** - [GitHub Profile](https://github.com/ShrutiCoder04)

## Support

- 📖 Check the [README](README.md) and [documentation](CONTRIBUTING.md)
- 🐛 Report issues via GitHub Issues
- 💡 Suggest features via GitHub Discussions
- 🤝 Contribute via Pull Requests

---

**StockSense** - Making stock market analysis accessible to everyone 📈
