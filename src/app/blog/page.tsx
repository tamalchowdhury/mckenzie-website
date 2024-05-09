import Headline from "@/components/Headline"
import React from "react"

import { Metadata } from "next"
import siteInfo from "../meta"

export const metadata: Metadata = {
  title: `Blog - ${siteInfo.title}`,
}

export default async function BlogPage() {
  const response = await fetch("https://dummyjson.com/posts?limit=3")
  const data = await response.json()

  return (
    <div>
      <Headline>Blog</Headline>
      <div>
        {data.posts.map((post) => (
          <div key={post.id} className="mb-6">
            <h2 className="text-accent font-bold text-xl mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
