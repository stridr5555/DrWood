import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function EndorsementsPage() {
  const testimonials = [
    {
      names: "Mike & Marie",
      description: "Newly engaged after having overcome their conflict.",
      image: "/images/happy-heart.jpg",
    },
    {
      names: "Beverly & Jim",
      description: "As empty-nesters, these two mutually re-focused their lives.",
      image: "/images/elderly-couple.jpg",
    },
    {
      names: "Joyce & Mason",
      description: "Much older now, they still feel like newlyweds.",
      image: "/images/wedding.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Endorsements</h1>
            <p className="text-xl text-foreground/70">Success stories from couples who have worked with Dr. Wood</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.names}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">{testimonial.names}</h3>
                  <p className="text-foreground/80 leading-relaxed">{testimonial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
