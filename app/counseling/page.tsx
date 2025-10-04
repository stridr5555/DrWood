import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CounselingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Counseling</h1>

            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="text-2xl font-semibold text-primary mb-6">Be caring, curious, and compassionate.</p>

              <p>
                Dr. Wood practices these three steps just as he teaches them. He studied for 16 years in graduate school
                and for a lifetime on his own reading to learn all he can about how to help someone achieve their best
                self and their best relationships.
              </p>

              <p>
                Your thoughts, your feelings, your needs; these things are the focus of Dr. Wood's treatment style. He
                uses the best techniques from the masters of family therapy and counseling in his therapy creating his
                own interpersonal style.
              </p>

              <p>
                He can meet any day, after work, or on the weekend. Feel free to email Dr. Wood any questions you might
                have about counseling, therapy, or mental health.
              </p>

              <p className="font-semibold">Be sure to read his book for free (for now.)</p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <a
                href="mailto:cedwood@aol.com"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Dr. Wood
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
