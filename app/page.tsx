import Header from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ProfessionalInvolvement } from "@/components/professional-involvement"
import { CallToAction } from "@/components/call-to-action"
import { RecentPosts } from "@/components/recent-posts"
import { YouTubeVideos } from "@/components/youtube-videos"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <ProfessionalInvolvement />
      <CallToAction />
      <RecentPosts />
      <YouTubeVideos />
      <Footer />
    </main>
  )
}
