// Minimal JS: Copy API endpoint to clipboard

document.addEventListener('DOMContentLoaded', function() {
  const endpoint = document.querySelector('.endpoint');
  if (endpoint) {
    endpoint.style.cursor = 'pointer';
    endpoint.title = 'Click to copy';
    endpoint.addEventListener('click', function() {
      navigator.clipboard.writeText(endpoint.textContent.trim());
      endpoint.textContent = '/api/proxy ✔';
      setTimeout(() => endpoint.textContent = '/api/proxy', 1200);
    });
  }
});