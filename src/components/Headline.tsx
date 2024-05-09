import React from "react"

type HeadlineProps = {
  children: React.ReactNode
}

export default function Headline({ children }: HeadlineProps) {
  return <h1 className="text-3xl mb-6 text-accent font-bold">{children}</h1>
}
