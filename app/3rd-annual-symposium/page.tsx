import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function SymposiumPost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              3rd Annual Symposium on Understanding School Shooters and Other Violent Actors
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Muse</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/10 p-8 rounded-lg mb-8">
              <p className="text-lg text-foreground font-semibold mb-4">April 28th at 6:00pm</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This event is free and open to the public. It is meant to be attended by counselors, psychologists,
                marriage and family therapists, and psychiatrists.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is a 2 hour event and will take place at 7424 Greenville Ave. #104.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild variant="outline">
                <a href="/">← Back to Home</a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
