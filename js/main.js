import { initApp } from './app.js';

initApp().catch((error) => {
  console.error('Failed to initialize app:', error);
});
