import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function MankReviewPost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">"Mank" Movie Review</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Muse</span>
              <span>•</span>
              <span>March 29, 2021</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <em>by Cedric Wood, March 28, 2021</em>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              "Mank" is a bloated but brilliant take on the story of how Herman Mankowitz lived his life during and
              before he was tapped to write a script, seemingly about whatever he felt like writing. It turned out to be
              about the mega wealthy newspaper magnate William Randolph Hearst. The movie that resulted was "Citizen
              Kane", considering to be the greatest film of all time, or at least it was in the latter half of the 20th
              century.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The film was riveting and yet disappointing. It was supposed to be about the back story that led up to the
              making of Citizen Kane. But far too little was about the film development and far too much about politics
              of California in the 1930's and the studio politics that were interwoven with them.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Mank was filmed in the style of the movies of the 1930's, imitating Citizen Kane at every turn. Touches
              like showing ceilings, something not done before Citizen Kane. Although that was a nice touch throughout,
              the modern mind longed to be out of the cage of black and white and clipped, staccato delivery of lines.
              These complaints will rob the film of large box office numbers but they will endear the film to all those
              who love and feel cozy in the nostalgia of the Golden Era of Hollywood.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The most exciting scenes for me were the ones that were clearly filmed in the actual monstrous, gilded
              dining halls of Hearst Castle. I know because I recognized them from my own walk through them when I was
              there in 2018. The garden, the pool, it was all right there.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Do I recommend the film? Yes, if you don't want to be left out of a great rendering of the glamour and
              style of Old Hollywood. But do I recommend it as a deeply felt movie going dream? No. It is too long and
              too bloated and loaded with inside information that is being dished out in snappy, cleverly worded,
              oblique lines.
            </p>

            <p className="text-xl font-bold text-foreground mt-6">3 stars</p>

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
