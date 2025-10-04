import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function GiftedReviewPost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">"Gifted" Movie Review</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Ced</span>
              <span>•</span>
              <span>April 10, 2017</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <em>April 3, 2017</em>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              If "Gifted" had been made in 1935 it would have starred Shirley Temple. A 6 year old girl (a precocious
              McKenna Grace) is more than gifted, she is a math prodigy, and her grandmother (Lindsay Duncan) wants to
              raise her to be as accomplished in mathematics as her mother. The only problem is that she also raised her
              daughter, the child's mother, in the same way and she committed suicide as a young woman.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              "Gifted' recognizes that it is of utmost important for a child to be given the freedom to be a child, no
              matter how gifted she is. The child's uncle (Chris Evans [Captain America]) understood this parenting
              requirement and whisked the child away for her own good. The grandmother finds them and the battle for her
              custody begins.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              "Gifted" is warm, sincere and satisfying. The only flaw is the artifice of the uncle living in
              near-poverty and working as a marine boat repairman . He is far to sophisticated and intelligent to be
              portrayed as blue-collar (he once had a teaching position in philosophy at Boston University).
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Nonetheless, I must recommend "Gifted" for its touching moments and its willingness to tackle the
              important theme of unmet childhood needs. It receives this year's "Parenting Excellence" award for
              exposing the deleterious effects of enmeshed and vicarious parenting.
            </p>

            <p className="text-xl font-bold text-foreground mt-6">3.5 Stars</p>

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
