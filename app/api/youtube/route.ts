export async function GET() {
  try {
    const channelHandle = "@dr.cedricwood3117"
    const apiKey = process.env.YOUTUBE_API_KEY

    if (apiKey) {
      console.log("[v0] Using YouTube Data API")

      // First, get the channel ID from the handle
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails,snippet&forHandle=${channelHandle.replace("@", "")}&key=${apiKey}`,
      )

      if (channelResponse.ok) {
        const channelData = await channelResponse.json()

        if (channelData.items && channelData.items.length > 0) {
          const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

          // Get videos from uploads playlist
          const videosResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=6&key=${apiKey}`,
          )

          if (videosResponse.ok) {
            const videosData = await videosResponse.json()

            const videos = videosData.items.map((item: any) => ({
              id: item.snippet.resourceId.videoId,
              title: item.snippet.title,
              publishedAt: item.snippet.publishedAt,
              thumbnail: item.snippet.thumbnails.high.url,
              description: item.snippet.description,
            }))

            console.log("[v0] Successfully fetched", videos.length, "videos")
            return Response.json({ videos, channelUrl: `https://www.youtube.com/${channelHandle}` })
          }
        }
      }
    }

    console.log("[v0] Using fallback embed mode")
    return Response.json({
      videos: [],
      channelUrl: `https://www.youtube.com/${channelHandle}`,
      useEmbed: true,
    })
  } catch (error) {
    console.error("[v0] Error fetching YouTube videos:", error)
    return Response.json(
      {
        videos: [],
        channelUrl: "https://www.youtube.com/@dr.cedricwood3117",
        useEmbed: true,
      },
      { status: 200 },
    )
  }
}
