import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser',
  use: { baseURL:'http://127.0.0.1:8123', browserName:'chromium', ...(process.env.CHROME_PATH ? { launchOptions: { executablePath:process.env.CHROME_PATH } } : {}) },
  webServer: { command:'python3 -m http.server 8123 --bind 127.0.0.1', url:'http://127.0.0.1:8123', reuseExistingServer:false },
});
