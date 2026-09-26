# Contributing to StockSense

Thank you for your interest in contributing to StockSense! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/stocksense.git
   cd stocksense
   ```
3. **Create a virtual environment**:
   ```bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate  # Windows: .venv\Scripts\activate
   ```
4. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   pip install pytest black flake8 isort
   ```

## Development Workflow

### Creating a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Running Tests
```bash
pytest backend/tests/ -v
```

### Code Quality
Before committing, ensure code quality:
```bash
# Format code
black backend/app

# Sort imports
isort backend/app

# Check for issues
flake8 backend/app
```

## Commit Guidelines

- Use clear, descriptive commit messages
- Reference issues using `#issue-number` when applicable
- Format: `<type>(<scope>): <subject>`
  - Types: feat, fix, docs, style, refactor, test, chore
  - Example: `feat(stocks): add technical indicators endpoint`

## Pull Request Process

1. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Open a Pull Request** on GitHub with:
   - Clear title and description
   - Link to related issues
   - Summary of changes
3. **Address review comments** and update your PR
4. **Ensure CI/CD passes** (tests, linting, builds)

## Testing Requirements

- All new features must include tests
- Maintain or improve code coverage
- Tests should be in `backend/tests/`
- Follow naming convention: `test_<feature>.py`

## Code Style

- Follow PEP 8 standards
- Use type hints where applicable
- Add docstrings to functions and classes
- Maximum line length: 88 characters (Black default)

## Reporting Issues

- Use GitHub Issues for bug reports and feature requests
- Provide clear descriptions and reproduction steps
- Include relevant environment information

## Questions?

Feel free to open an issue or discussion for questions about contributing.

Thank you for contributing to StockSense! 🚀
