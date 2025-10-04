import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">About Our Doctor</h1>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/3">
                <Image
                  src="/images/dr-cedric-wood.png"
                  alt="Dr. Cedric Wood"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md w-full"
                />
              </div>

              <div className="md:w-2/3 space-y-4 text-foreground/80 leading-relaxed">
                <p className="text-lg font-semibold text-primary">President of Dallas Metro Counseling Association</p>

                <p>
                  Born and raised in Weslaco, Texas, Cedric Wood PhD, LPC received his bachelor's degree in Filmmaking
                  (RTF) from the University of Texas in Austin. He was the host of a weekly talk show, "Mental Health
                  Week" in San Antonio, Texas from 1987 to 1990. He wrote, produced, and directed "The Spy Who Spoke
                  Spanish," an instructional video on speaking Spanish.
                </p>

                <p>
                  Having completed his master's degree in Clinical Psychology from St. Mary's University and a Ph.D. in
                  Family Therapy from Texas Woman's University, he has been in private practice since 1994.
                </p>

                <p>
                  He has led seminars dealing with emotional intelligence, conflict resolution, sadistic personality
                  disorder, workplace incivility, and egopathy. He is available to speak to your organization at any
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
