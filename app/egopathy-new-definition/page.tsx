import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function EgopathyDefinitionPost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Egopathy: New definition</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Ced</span>
              <span>•</span>
              <span>April 15, 2017</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-muted/50 p-8 rounded-lg mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Egopathy (n.)</h2>
              <p className="text-muted-foreground leading-relaxed">
                A personality syndrome in which a person moves aggressively against another seeking power, control, and
                domination. He does so without empathy for the other's feelings or needs and without remorse, i.e. the
                ability to say "I'm sorry."
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
