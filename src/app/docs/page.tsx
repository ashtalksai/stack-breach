import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight">
            Documentation
          </h1>
          <p className="mt-4 text-muted-foreground">
            Coming soon — documentation hub will be available here.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
