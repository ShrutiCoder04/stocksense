const statusText = document.getElementById('statusText');
const marketGrid = document.getElementById('marketGrid');
const refreshBtn = document.getElementById('refreshBtn');
const watchlistTableBody = document.getElementById('watchlistTableBody');

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function renderStocks(stocks) {
  marketGrid.innerHTML = '';
  watchlistTableBody.innerHTML = '';

  stocks.forEach((stock) => {
    const tile = document.createElement('article');
    tile.className = 'stock-tile';

    const priceClass = stock.percent_change >= 0 ? 'positive' : 'negative';
    tile.innerHTML = `
      <h3>${stock.symbol}</h3>
      <div class="price ${priceClass}">${formatCurrency(stock.price)}</div>
      <div class="${priceClass}">${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.percent_change.toFixed(2)}%)</div>
    `;
    marketGrid.appendChild(tile);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${stock.symbol}</td>
      <td>${formatCurrency(stock.price)}</td>
      <td class="${priceClass}">${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}</td>
      <td class="${priceClass}">${stock.percent_change.toFixed(2)}%</td>
    `;
    watchlistTableBody.appendChild(row);
  });
}

async function fetchMarketSnapshot() {
  try {
    const response = await fetch('http://localhost:8000/api/stocks/market-snapshot');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const stocks = data.stocks || [];

    if (stocks.length > 0) {
      statusText.textContent = `Showing ${stocks.length} tracked symbols.`;
      renderStocks(stocks);
      return;
    }

    statusText.textContent = 'No market data available.';
  } catch (error) {
    statusText.textContent = 'API unavailable. Start the backend server with uvicorn main:app --reload.';
    marketGrid.innerHTML = '';
    watchlistTableBody.innerHTML = '';
  }
}

refreshBtn.addEventListener('click', fetchMarketSnapshot);
fetchMarketSnapshot();
