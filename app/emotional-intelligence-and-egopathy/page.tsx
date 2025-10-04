import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function EmotionalIntelligencePost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
          <header className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Emotional Intelligence and Egopathy (book)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Muse</span>
              <span>•</span>
              <span>March 4, 2017</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-6">
              Read the Opening of Dr. Wood's book Emotional Intelligence and Egopathy: Understanding Why Good People
              Behave Badly.
            </p>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-4">
              Chapter 1: The Emotional Intelligence Movement
            </h2>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h3>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Emotional Intelligence has been a hot topic since the 1990's and shows no sign of cooling down in the new
              century. Finally, theorists and researchers have a common term that is accepted by many professionals as a
              way of describing the level of functioning of a human being. In the past there were a plethora of terms to
              describe the levels of maturity and interpersonal skills a person possessed: character, morality,
              resiliency, social skills, social intelligence, differentiation, level of functioning, and
              self-actualization. These were all used at one time or another to describe how managers wanted their
              employees to behave and how supervisors behaved themselves.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Although it was Peter Salovey and John Mayer who originally wrote the seminal article on emotional
              intelligence in 1990, it was Daniel Goleman who brought the concept to the people with his book, Emotional
              Intelligence. His treatment and explanation helped millions see more clearly how their emotions were
              important in managing their lives and their relationships. Within a short time emotional intelligence
              became a business buzz word for excellence.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Daniel Goleman gave us several examples of how emotional intelligence is displayed but more importantly
              his examples showed how it is not displayed. His examples showed how parents and supervisors who did not
              evince altruistic behavior and how this behavior invariably led to a poor outcome. His thesis presented
              the notion that if the individual had possessed emotional intelligence there would have been different
              behavior and, when faced with a crisis, a more benevolent mindset would have prevented the accident or
              moment of cruelty.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground my-8">
              But my impression is that most of the clients or customers in these groups are not sick in the ordinary
              psychiatric sense but are sick only in the normal, average sense, that is, they are ordinary, average
              citizens. Therefore what they need is not so much personal therapy … but rather personal development or
              psychogogy or self-actualization training or something of the sort. (p. 182)
              <footer className="mt-2 not-italic">— A. Maslow, Eupsychian Management</footer>
            </blockquote>

            <h3 className="font-serif text-2xl font-bold text-foreground mt-12 mb-4">Read More of Dr. Wood's Book</h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>Chapter 1: The Emotional Intelligence Movement</li>
              <li>Chapter 2: The Successes and Failures of the EQ Movement</li>
              <li>Chapter 3: Egopathy: what is it and how does it work?</li>
              <li>Chapter 4: Big Bad Bullies (BBBs) and PCDs (Power, Control, and Direction.)</li>
              <li>
                Chapter 5: Narcissistic Personality, Sadistic Personality Disorder, Psychopathy, Anti-Social Personality
                Disorder, Bipolar Disorder and their Relation to Egopathy
              </li>
              <li>Chapter 6: Egopathic Defenses/ Ego Expressiveness, Schemas and Hidden Agendas</li>
              <li>Chapter 7: The Roots of Disempathy and Cruelty: The Developmental Personology of Egopathy</li>
              <li>Chapter 8: Families Behaving Badly</li>
              <li>Chapter 9: Doctors and Professors Behaving Badly</li>
              <li>Chapter 10: Workplace Incivility, Egopathic Bosses, and Healthy Workplaces</li>
              <li>Chapter 11: Personality and EQ Assessment: Which one reveals Egopathy Best?</li>
              <li>Chapter 12: Egopathic Characters in books, on TV, and in the movies</li>
              <li>Chapter 13: Egopaths in Academic Literature, the Popular Press, and Other Media</li>
              <li>Chapter 14: Public and Private Figures Behaving Badly in the News</li>
              <li>Chapter 15: Happiness, Health, and Positive Psychology</li>
              <li>
                Chapter 16: So what can I do about it? Remonstrating and High Character Communication; Aclass in
                Parenting/Relationships in High School; a class in Developmental Personology in graduate schools
              </li>
              <li>Chapter 17: The Vocabulary of Egopathy and High Character Communication</li>
              <li>
                Chapter 18: The Structure of Emotional Intelligence and Egopathy: The Diagrams, Figures, and Lists
              </li>
            </ul>

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
