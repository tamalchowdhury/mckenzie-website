import Headline from "@/components/Headline"
import React from "react"
import Image from "next/image"

import homeDiy from "@/img/home-diy.jpg"
import homePaint from "@/img/home-paint.jpg"
import homeKitchen from "@/img/home-kitchen.jpg"

export default function RenovationsPage() {
  return (
    <div>
      <Headline>Renovations</Headline>
      <p>
        Whether you're looking to refresh a single room or undertake a
        full-scale renovation, we bring the same level of dedication and
        craftsmanship to each project.
      </p>
      <section className="flex gap-4 my-8">
        <div className="w-full md:w-1/3">
          <Image src={homeDiy} alt="Home DIY" />
        </div>
        <div className="w-full md:w-1/3">
          <Image src={homePaint} alt="Home Paint" />
        </div>
        <div className="w-full md:w-1/3">
          <Image src={homeKitchen} alt="House Kitchen" />
        </div>
      </section>
      <p>
        Ready to turn your home into the haven you’ve always dreamed of? Contact
        us today to schedule a consultation. Let us show you how McKenzie and
        Pez Builders can bring your dream home to life
      </p>
    </div>
  )
}
