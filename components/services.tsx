"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: "❤️",
    title: "Relationship Counselor in Dallas, Texas",
    description:
      "With 21 years of counseling experience and 25 years of inpatient clinical experience, he has the expertise and knowledge to help even in extreme and chronic cases...",
    link: "/relationship-counselor-dallas/",
  },
  {
    icon: "💬",
    title: "Counseling",
    description:
      "Be caring, curious, and compassionate. Dr. Wood practices these three steps just as he teaches them. He studied for 16 years in school and for a lifetime on his own to learn all he can about how to help someone achieve their best self and their best relationships...",
    link: "/counseling",
  },
  {
    icon: "🎯",
    title: "Specializing In",
    description:
      "Anxiety and Fear / Relationship Issues / Depression / Parenting Education / Child and Adolescent Issues / Domestic Abuse and Violence / Psychosis / Existential Worries and Angst / Dissociative Disorders / Personality Disorders / Life Coaching...",
    link: "/specializing-in/",
  },
  {
    icon: "👨‍⚕️",
    title: "About Our Doctor",
    description:
      'Born and raised in Weslaco, Texas, Cedric Wood PhD, LPC received his bachelor\'s degree in Filmmaking (RTF) from the University of Texas in Austin. He was the host of a weekly talk show, "Mental Health Week" in San Antonio, Texas from 1987 to 1990...',
    link: "/about-our-doctor/",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 150)
            })
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

  return (
    <section id="counseling" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Counseling Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional support tailored to your unique needs and circumstances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card opacity-0 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border-border bg-card group"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-card-foreground">
                  <a href={service.link} className="hover:text-primary transition-colors duration-200">
                    {service.title}
                  </a>
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
