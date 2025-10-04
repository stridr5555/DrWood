"use client"

import { useEffect, useRef } from "react"

export function ProfessionalInvolvement() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const professionals = [
    {
      image: "/images/dr-cedric-wood.png",
      title: "Dr. Cedric Wood",
      description: "Relationship Counselor • Family Therapy",
      link: "/about-our-doctor",
    },
    {
      image: "/images/happy-heart.jpg",
      title: "Mike & Marie",
      description: "Newly engaged after having overcome their conflict.",
      link: "/endorsements",
    },
    {
      image: "/images/elderly-couple.jpg",
      title: "Beverly & Jim",
      description: "As empty-nesters, these two mutually re-focused their lives.",
      link: "/endorsements",
    },
    {
      image: "/images/wedding.jpg",
      title: "Joyce & Mason",
      description: "Much older now, they still feel like newlyweds.",
      link: "/endorsements",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Dr. Wood's Professional Involvement
            </h2>
            <div className="max-w-3xl mx-auto space-y-2 text-muted-foreground leading-relaxed">
              <p>Past President and Current Senator for Dallas Metro Counseling Association</p>
              <p>Member of Dallas Psychological Association and American Psychological Association</p>
              <p>Also involved with Dallas Association of Marriage and Family Therapy</p>
              <p>Relationship Counselor • Family Counselor • Licensed Professional Counselor</p>
              <p>Agency Approved Supervisor • Certified Anger Management Specialist</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionals.map((professional, index) => (
              <a
                key={index}
                href={professional.link}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={professional.image || "/placeholder.svg"}
                  alt={professional.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2 text-balance">{professional.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed text-pretty">{professional.description}</p>
                  <div className="mt-4 flex items-center text-white text-sm font-medium">
                    <span>Learn More</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
