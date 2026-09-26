const statusText = document.getElementById('statusText');
const refreshBtn = document.getElementById('refreshBtn');

async function fetchHealth() {
  try {
    const response = await fetch('http://localhost:8000/api/health');
    const data = await response.json();
    statusText.textContent = `API status: ${data.status} | Service: ${data.service}`;
  } catch (error) {
    statusText.textContent = 'API unavailable. Start the backend server with uvicorn main:app --reload.';
  }
}

refreshBtn.addEventListener('click', fetchHealth);
fetchHealth();
