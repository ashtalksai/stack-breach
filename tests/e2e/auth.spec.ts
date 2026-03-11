import { test, expect } from "@playwright/test"

test.describe("Auth Pages", () => {
  test("signup page renders with all required fields", async ({ page }) => {
    await page.goto("/signup")
    await expect(page.getByRole("heading", { name: /Start your free trial/i })).toBeVisible()
    await expect(page.getByPlaceholder("Jane Smith")).toBeVisible()
    await expect(page.getByPlaceholder("jane@company.com")).toBeVisible()
    await expect(page.getByPlaceholder("Acme Corp")).toBeVisible()
    await expect(page.getByPlaceholder("••••••••")).toBeVisible()
    await expect(page.getByRole("button", { name: /Create Account/i })).toBeVisible()
  })

  test("signup page has benefits sidebar", async ({ page }) => {
    await page.goto("/signup")
    await expect(page.getByText(/Shadow AI compliance/i)).toBeVisible()
  })

  test("login page renders with email and password", async ({ page }) => {
    await page.goto("/login")
    await expect(page.getByRole("heading", { name: /Welcome back/i })).toBeVisible()
    await expect(page.getByLabel("Email")).toBeVisible()
    await expect(page.getByLabel("Password")).toBeVisible()
    await expect(page.getByRole("button", { name: /Log in/i })).toBeVisible()
  })

  test("login page has Google OAuth button", async ({ page }) => {
    await page.goto("/login")
    await expect(page.getByRole("button", { name: /Google/i })).toBeVisible()
  })

  test("signup page has link to login", async ({ page }) => {
    await page.goto("/signup")
    await expect(page.getByRole("link", { name: /Log in/i })).toBeVisible()
  })

  test("login page has link to signup", async ({ page }) => {
    await page.goto("/login")
    await expect(page.getByRole("link", { name: /Start free trial/i })).toBeVisible()
  })
})
