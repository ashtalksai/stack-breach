import { test, expect } from "@playwright/test"

test.describe("Health & Infrastructure", () => {
  test("health endpoint returns ok", async ({ request }) => {
    const response = await request.get("/api/health")
    expect(response.status()).toBe(200)
    const body = await response.json()
    expect(body.status).toBe("ok")
    expect(body.service).toBe("stack-breach")
  })

  test("all main pages return 200", async ({ request }) => {
    const pages = ["/", "/about", "/pricing", "/contact", "/signup", "/login", "/privacy", "/terms"]
    for (const path of pages) {
      const response = await request.get(path)
      expect(response.status(), `${path} should return 200`).toBe(200)
    }
  })

  test("onboarding page returns 200", async ({ request }) => {
    const response = await request.get("/onboarding")
    expect(response.status()).toBe(200)
  })

  test("dashboard pages return 200", async ({ request }) => {
    const pages = ["/dashboard", "/dashboard/scan", "/dashboard/tools", "/dashboard/reports", "/dashboard/settings"]
    for (const path of pages) {
      const response = await request.get(path)
      expect(response.status(), `${path} should return 200`).toBe(200)
    }
  })
})
