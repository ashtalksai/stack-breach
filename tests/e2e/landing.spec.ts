import { test, expect } from "@playwright/test"

test.describe("Landing Page", () => {
  test("loads successfully with correct title", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Stack Breach/)
    await expect(page.locator("h1")).toBeVisible()
  })

  test("has navbar with logo and nav links", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("navigation")).toBeVisible()
    await expect(page.getByRole("link", { name: /Stack Breach/ }).first()).toBeVisible()
    await expect(page.getByRole("link", { name: "About" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Pricing" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible()
  })

  test("hero section has headline, subline, and CTAs", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("h1")).toContainText(/Find Every AI Tool/)
    await expect(page.getByRole("link", { name: /Start Free/i }).first()).toBeVisible()
  })

  test("has 10 sections — hero, problem, solution, features, how-it-works, social proof, pricing, FAQ, CTA, footer", async ({ page }) => {
    await page.goto("/")
    // Problem section
    await expect(page.getByText(/The Problem Nobody Built For/i)).toBeVisible()
    // Solution section
    await expect(page.getByText(/Compliance in 5 Minutes/i)).toBeVisible()
    // Features section
    await expect(page.getByText(/Everything You Need/i)).toBeVisible()
    // How it works
    await expect(page.getByText(/How It Works/i)).toBeVisible()
    // Social proof
    await expect(page.getByText(/Trusted by IT Teams/i)).toBeVisible()
    // Pricing
    await expect(page.getByText(/Simple, Transparent Pricing/i)).toBeVisible()
    // FAQ
    await expect(page.getByText(/Frequently Asked Questions/i)).toBeVisible()
    // Final CTA
    await expect(page.getByText(/The Auditor Is Going to Ask/i)).toBeVisible()
    // Footer
    await expect(page.locator("footer")).toBeVisible()
  })

  test("pricing section has 3 tiers with correct prices", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText("$199")).toBeVisible()
    await expect(page.getByText("$349")).toBeVisible()
    await expect(page.getByText("$499")).toBeVisible()
  })

  test("FAQ accordion has 7 questions", async ({ page }) => {
    await page.goto("/")
    const faqButtons = page.getByRole("button").filter({ hasText: /data|different|frameworks|expertise|handle|trial|MSPs/i })
    await expect(faqButtons).toHaveCount(7)
  })

  test("footer has privacy and terms links", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("link", { name: "Privacy Policy" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Terms of Service" })).toBeVisible()
  })

  test("CTA button navigates to signup", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: /Start Free Trial/ }).first().click()
    await expect(page).toHaveURL(/signup/)
  })

  test("is responsive at 375px mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    await expect(page.locator("h1")).toBeVisible()
    // No horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(bodyWidth).toBeLessThanOrEqual(376)
  })
})
