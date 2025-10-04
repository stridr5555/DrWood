import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Location</h1>

            <div className="space-y-6">
              <div className="space-y-4 text-lg">
                <div>
                  <p className="font-semibold text-foreground mb-2">Email:</p>
                  <a href="mailto:cedwood@aol.com" className="text-primary hover:underline text-xl">
                    cedwood@aol.com
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Phone:</p>
                  <a href="tel:2143944040" className="text-primary hover:underline text-xl">
                    (214) 394-4040
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-2">Address:</p>
                  <p className="text-foreground/80 text-xl">
                    7424 Greenville Avenue, Suite 104
                    <br />
                    Dallas, TX 75231-4507
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26805.078317169475!2d-96.7768476!3d32.881381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9ff1c8419b39%3A0x6c20c7c99683b72a!2s7424+Greenville+Ave+%23104%2C+Dallas%2C+TX+75231!5e0!3m2!1sen!2sus!4v1488680775507"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
