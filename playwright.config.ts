import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  baseURL: "https://stackbreach.ashketing.com",
  use: {
    headless: true,
    screenshot: "only-on-failure",
  },
  timeout: 30000,
})
