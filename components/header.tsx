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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-original.png"
              alt="Cedric S. Wood PhD, LPC - Relationship Counselor"
              className="h-16 w-auto transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-all duration-200 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-primary/20 hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#youtube"
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-primary/20 hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CedTalks Podcast
              </Link>
              <Link
                href="#counseling"
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-primary/20 hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Counseling
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary/10 hover:backdrop-blur-md hover:shadow-lg hover:border hover:border-primary/20 hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <span className="text-sm font-semibold text-primary py-2">(214) 394-4040</span>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 hover:scale-105 transition-all duration-200"
              >
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
