import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ComplimentsPost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Compliments from Clients and Patients
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Muse</span>
              <span>•</span>
              <span>January 26, 2019</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none space-y-6">
            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "I loved this topic. This is really interesting! I don't see why people wouldn't want to listen to this.
              (It's important) Thank you, it is important." 8/5/20 Pt "S"
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "You've given me a lot to think about." Pt "E"
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "The other groups really didn't mean much to me. I really liked this group." 8/2/20 Pt: "J"
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "You have great insight. You really helped me see it in a new way. In a way I had not thought of." 7/8/20
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "There's supposed to be a program here. You're the only on who really brought helpful information to us.
              You're a bright spot in our day." Pt "J"
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "You've really made an impact." Pt #2
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "I interviewed four different therapist and chose Dr. Wood based on this extensive expertise and
              knowledge. I am glad I did because Dr. Wood is a seasoned therapist that has helped me improving my
              communication skills and avoiding disaster in dealing with kids, friends, and coworker. Maybe this is not
              for everyone, but before my appointments, I often listen to communication skills audiobooks (during my
              commute), then discuss what I have learned with Dr. Wood and act out specific examples. If you are open
              minded to try this as well, I suggest asking Dr. Wood for book recommendations. I found that this is the
              best way to transform passive knowledge into active communication skills. When I do not have enough time
              to prepare in this way, we discuss past events or possible future or reoccurring events. I found no matter
              how the time is spent, my meetings with Dr. Wood are worth every minute and penny." – Thomas – Jan 27,
              2020
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              Group member after hearing my "Basic Ego Needs" model explained. "I really like this. You really broke it
              down for us." – April 8, 2020
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "Yours are the best groups here in the hospital, hands down. You treat us like adults and not like 4 year
              olds like some of the other therapists do." – Aug. 25, 2019
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "When you went over that trauncil (my list of things that children must be protected from: trauma,
              rejection, abuse, unhealthy communication, neglect, chaos, indulgence, loss) on the board that really
              touched me and opened my mind. I was like, 'Did it happen to me? before I was 18 months when my father got
              me away from my crazy mother. Thank you for that." – March 31, 2019
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "That group was really very helpful, thank you." – March 31, 2019
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "I have a stack of handouts here from my time here and this is the first one that I am taking notes on.
              Can ya'll let him finish speaking?" – March 31, 2019
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "You have a lot of wisdom. I feel like you're talking to me. You're saving my marriage. You know just what
              to say. I'm starting to feel joy!" – patient of mine, her words. 4/9/17 – March 31, 2019
            </blockquote>

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
