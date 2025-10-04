import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Dr. Cedric S. Wood, Ph.D., LPC</p>
              <p>Relationship Counselor</p>
              <p>Dallas, Texas</p>
              <p className="mt-4 font-semibold">(214) 394-4040</p>
              <p>
                <a
                  href="mailto:cedwood@aol.com"
                  className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  cedwood@aol.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#counseling"
                  className="text-primary-foreground/80 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Counseling Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/emotional-intelligence-and-egopathy"
                  className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Emotional Intelligence and Egopathy (book)
                </Link>
              </li>
              <li>
                <Link
                  href="/mank-movie-review"
                  className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  "Mank" Movie Review
                </Link>
              </li>
              <li>
                <Link
                  href="/compliments"
                  className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Compliments from Clients and Patients
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Book Recommendations</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Film Reviews: Deconstructing Revolver (the Beatles Album)</li>
              <li>Parenting Classes</li>
              <li>Where the Wild Things Are</li>
              <li>Relationship is a Love Story</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              Copyright © 2025 · Dr. Cedric Wood · Powered by Creativity, Culture & Growth.
            </p>
            <div className="flex items-center gap-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-white transition-all duration-200 hover:scale-125 hover:-translate-y-1"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-white transition-all duration-200 hover:scale-125 hover:-translate-y-1"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-white transition-all duration-200 hover:scale-125 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
