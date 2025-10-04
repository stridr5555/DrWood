"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false)
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-screen-2xl">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            <Link href="/" className="flex items-center gap-2 group z-50 flex-shrink overflow-hidden">
              <img
                src="/images/logo-original.png"
                alt="Cedric S. Wood PhD, LPC - Relationship Counselor"
                className="h-12 sm:h-14 md:h-16 w-auto max-w-[180px] sm:max-w-[240px] md:max-w-[280px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-primary/20"
              >
                Home
              </Link>
              <Link
                href="#youtube"
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-primary/20"
              >
                CedTalks Podcast
              </Link>
              <Link
                href="#counseling"
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-primary/20"
              >
                Counseling
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-primary/20"
              >
                About
              </Link>
              <span className="text-sm font-semibold text-primary">(214) 394-4040</span>
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                <Link href="#contact">Contact</Link>
              </Button>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-all duration-200 z-50 relative flex-shrink-0 touch-manipulation w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex flex-col gap-1 w-6 h-6 justify-center items-center">
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-background shadow-2xl z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-base font-medium text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#youtube"
              className="text-base font-medium text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CedTalks Podcast
            </Link>
            <Link
              href="#counseling"
              className="text-base font-medium text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Counseling
            </Link>
            <Link
              href="#about"
              className="text-base font-medium text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>

            <div className="border-t border-border my-4" />

            <div className="text-base font-semibold text-primary py-3 px-4">(214) 394-4040</div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 w-full">
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
