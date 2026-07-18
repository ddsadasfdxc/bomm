export async function loadContent() {
  const response = await fetch('/data/content.json');
  if (!response.ok) {
    throw new Error(`Failed to load content: ${response.status}`);
  }
  return response.json();
}
