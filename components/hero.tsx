"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/happy-family-outdoors-professional-counseling.jpg"
          alt="Family counseling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={heroRef}>
        <div className="max-w-4xl mx-auto text-center opacity-0" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Building Stronger Relationships Through Professional Counseling
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
            With 21 years of counseling experience, Dr. Cedric Wood helps individuals and families navigate life's
            challenges with expertise and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 group">
              Schedule a Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 bg-transparent"
            >
              Learn More About Services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
        <div className="w-3 h-3 rounded-full bg-white/50"></div>
      </div>
    </section>
  )
}
