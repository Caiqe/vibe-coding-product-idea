import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL: "http://localhost:5174",
    locale: "pt-BR",
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],

  // Sobe a aplicação (API + Vite) antes dos testes, se ela ainda não estiver rodando.
  webServer: {
    command: "npm run dev -- --port 5174",
    url: "http://localhost:5174",
    reuseExistingServer: true,
  },
});
