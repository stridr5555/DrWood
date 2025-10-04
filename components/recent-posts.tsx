"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const posts = [
  {
    title: "Emotional Intelligence and Egopathy (book)",
    author: "Muse",
    date: "March 4, 2017",
    category: "Uncategorized",
    comments: "No Comments »",
    link: "/emotional-intelligence-and-egopathy/",
  },
  {
    title: '"Mank" Movie Review',
    author: "Muse",
    date: "March 29, 2021",
    category: "Uncategorized",
    excerpt:
      'by Cedric Wood March 28, 2021 "Mank" is a bloated but brilliant take on the story of how Herman Mankowitz lived his life during and before he was tapped to write a script, seemingly about whatever he felt like writing. It turned out to be about the mega wealthy newspaper',
    comments: "No Comments »",
    link: "/mank-movie-review/",
  },
  {
    title: "Compliments from Clients and Patients",
    author: "Muse",
    date: "January 26, 2019",
    category: "Uncategorized",
    comments: "No Comments »",
    link: "/compliments/",
  },
  {
    title: 'Understanding and Assessing "Multiplicity"',
    author: "Muse",
    date: "March 2, 2018",
    category: "Uncategorized",
    comments: "No Comments »",
    link: "/understanding-and-assessing-multiplicity/",
  },
  {
    title: "Egopathy: New definition",
    author: "Ced",
    date: "April 15, 2017",
    category: "Uncategorized",
    comments: "One Comment »",
    link: "/egopathy-new-definition/",
  },
  {
    title: '"Gifted" Movie Review',
    author: "Ced",
    date: "April 10, 2017",
    category: "Uncategorized",
    comments: "No Comments »",
    link: "/gifted-movie-review/",
  },
]

const recentPostsList = [
  { title: "Mank Movie Review", link: "/mank-movie-review/" },
  { title: "Compliments from Clients and Patients", link: "/compliments/" },
  { title: 'Understanding and Assessing "Multiplicity"', link: "/understanding-and-assessing-multiplicity/" },
  { title: "Egopathy: New definition", link: "/egopathy-new-definition/" },
  { title: '"Gifted" Movie Review', link: "/gifted-movie-review/" },
  {
    title: "Film Review: Deconstructing Revolver (The Beatles Album)",
    link: "/film-review-deconstructing-revolver/",
  },
  {
    title: "Tarik said it was 'bad communication' that ended their marriage. Don't let this happen to you!",
    link: "/tarik-bad-communication/",
  },
  {
    title:
      "3rd Annual Symposium on Understanding School Shooters and Other Violent Actors will take place on April 28th at 6:00pm",
    link: "/3rd-annual-symposium/",
  },
  {
    title: "Dr. Cedric Wood created a new model of understanding school shooters and other violent acts",
    link: "/new-model-school-shooters/",
  },
  { title: "Parenting Class Manifesto!", link: "/parenting-class-manifesto/" },
]

export function RecentPosts() {
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
    <section className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Recent Posts</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Posts Area */}
            <div className="lg:col-span-2 space-y-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 cursor-pointer">
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    {post.excerpt && <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <a
                        href={`/author/${post.author.toLowerCase()}`}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {post.author}
                      </a>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <a
                        href={`/category/${post.category.toLowerCase()}`}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {post.category}
                      </a>
                      <span>•</span>
                      <a href={`${post.link}#respond`} className="hover:text-primary transition-colors duration-200">
                        {post.comments}
                      </a>
                    </div>
                    {post.excerpt && (
                      <Button
                        variant="link"
                        className="p-0 h-auto text-primary hover:text-primary/80 hover:translate-x-1 transition-all duration-200"
                      >
                        <a href={post.link}>Read More →</a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Search</h3>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
                  <Input
                    type="search"
                    placeholder="Search posts..."
                    className="pl-10 bg-background border-border focus:scale-[1.02] transition-transform duration-200"
                  />
                </div>
              </Card>

              {/* Recent Posts List */}
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Recent Posts</h3>
                <ul className="space-y-3">
                  {recentPostsList.map((post, index) => (
                    <li key={index}>
                      <a
                        href={post.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 leading-relaxed block hover:translate-x-1"
                      >
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
