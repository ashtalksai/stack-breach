import { test, expect } from "@playwright/test"

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
]

const routes = [
  { path: "/", name: "landing" },
  { path: "/about", name: "about" },
  { path: "/pricing", name: "pricing" },
  { path: "/contact", name: "contact" },
  { path: "/signup", name: "signup" },
  { path: "/login", name: "login" },
]

for (const vp of viewports) {
  test.describe(`${vp.name} (${vp.width}px)`, () => {
    for (const route of routes) {
      test(`${route.name} page renders`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height })
        await page.goto(route.path)
        await expect(page.locator("body")).toBeVisible()
        // No horizontal scroll (allow 1px tolerance)
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
        expect(bodyWidth).toBeLessThanOrEqual(vp.width + 2)
      })
    }
  })
}
