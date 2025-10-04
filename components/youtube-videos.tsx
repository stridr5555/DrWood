"use client"

import { useEffect, useState } from "react"

interface Video {
  id: string
  title: string
  publishedAt: string
  thumbnail?: string
}

interface YouTubeData {
  videos: Video[]
  channelUrl: string
  useEmbed?: boolean
}

export function YouTubeVideos() {
  const [data, setData] = useState<YouTubeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchVideos() {
      try {
        console.log("[v0] Fetching YouTube videos...")
        const response = await fetch("/api/youtube")
        const result = await response.json()
        console.log("[v0] YouTube API response:", result)
        setData(result)
      } catch (err) {
        console.error("[v0] Error fetching videos:", err)
        setData({
          videos: [],
          channelUrl: "https://www.youtube.com/@dr.cedricwood3117",
          useEmbed: true,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return (
      <section id="youtube" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Loading videos...</p>
          </div>
        </div>
      </section>
    )
  }

  if (!data || data.useEmbed || data.videos.length === 0) {
    return (
      <section id="youtube" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Latest Videos from Dr. Cedric Wood</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Watch insights on relationships, counseling, and personal growth.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-muted mb-6">
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=dr.cedricwood3117"
                title="Dr. Cedric Wood YouTube Channel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="text-center">
              <a
                href={data?.channelUrl || "https://www.youtube.com/@dr.cedricwood3117"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Visit Full YouTube Channel
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="youtube" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Latest Videos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch Dr. Cedric Wood's latest talks and insights on relationships, counseling, and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {data.videos.map((video) => (
            <div key={video.id} className="group">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-muted mb-3">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={data.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View Full Channel
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
