"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function CallToAction() {
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

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Needing help with your Grown Child?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed text-pretty">
            Call me because I believe family comes first.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 hover:scale-110 hover:shadow-2xl text-lg px-8 group transition-all duration-300"
            asChild
          >
            <a href="mailto:cedwood@aol.com">
              Contact Me
              <span className="ml-2 group-hover:translate-x-2 transition-transform inline-block duration-300">→</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
