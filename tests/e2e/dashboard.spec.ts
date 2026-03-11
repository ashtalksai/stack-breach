import { test, expect } from "@playwright/test"

test.describe("Dashboard", () => {
  test("main dashboard renders with risk score", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("Organization Risk Score")).toBeVisible()
    await expect(page.getByText("67")).toBeVisible()
    await expect(page.getByText("Medium Risk")).toBeVisible()
  })

  test("dashboard shows compliance frameworks", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("GDPR")).toBeVisible()
    await expect(page.getByText("HIPAA")).toBeVisible()
    await expect(page.getByText("SOX")).toBeVisible()
  })

  test("dashboard shows detected tools table", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("Detected AI Tools")).toBeVisible()
    await expect(page.getByText("ChatGPT")).toBeVisible()
    await expect(page.getByText("GitHub Copilot")).toBeVisible()
  })

  test("dashboard shows integrations panel", async ({ page }) => {
    await page.goto("/dashboard")
    await expect(page.getByText("Integrations")).toBeVisible()
    await expect(page.getByText("Google Workspace")).toBeVisible()
  })

  test("sidebar navigation works", async ({ page }) => {
    await page.goto("/dashboard")
    await page.getByRole("link", { name: /Run Scan/i }).click()
    await expect(page).toHaveURL(/dashboard\/scan/)
  })

  test("scan page triggers scan animation", async ({ page }) => {
    await page.goto("/dashboard/scan")
    await expect(page.getByRole("heading", { name: /Run Scan/i })).toBeVisible()
    await page.getByRole("button", { name: /Start Scan/i }).click()
    await expect(page.getByText(/Scanning Your Stack/i)).toBeVisible()
  })

  test("tools page shows all detected tools", async ({ page }) => {
    await page.goto("/dashboard/tools")
    await expect(page.getByRole("heading", { name: /Detected AI Tools/i })).toBeVisible()
    await expect(page.getByText("ChatGPT")).toBeVisible()
    await expect(page.getByText("Midjourney")).toBeVisible()
    await expect(page.getByText("Notion AI")).toBeVisible()
  })

  test("tools page has search input", async ({ page }) => {
    await page.goto("/dashboard/tools")
    await expect(page.getByPlaceholder(/Search tools/i)).toBeVisible()
  })

  test("reports page shows report cards", async ({ page }) => {
    await page.goto("/dashboard/reports")
    await expect(page.getByRole("heading", { name: /Reports/i })).toBeVisible()
    await expect(page.getByText(/Q4 2024 AI Compliance Report/i)).toBeVisible()
    await expect(page.getByRole("button", { name: /Generate Report/i })).toBeVisible()
  })

  test("settings page has all sections", async ({ page }) => {
    await page.goto("/dashboard/settings")
    await expect(page.getByText("Profile")).toBeVisible()
    await expect(page.getByText("Notifications")).toBeVisible()
    await expect(page.getByText("Compliance Frameworks")).toBeVisible()
    await expect(page.getByText("Danger Zone")).toBeVisible()
  })
})
