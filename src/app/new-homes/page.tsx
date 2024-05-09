import Headline from "@/components/Headline"
import React from "react"
import Image from "next/image"

import heroHome from "@/img/hero-home.jpg"
import home2 from "@/img/home-2.jpg"
import home3 from "@/img/home-3.jpg"

const items = [
  {
    title: "35 Watson Street",
    description:
      "A newly built and fully furnished duplex home offers modern living with all the conveniences ready for immediate occupancy. This duplex features two levels of living space, elegantly designed to blend comfort with style.",
    image: heroHome,
  },
  {
    title: "17 Marx Hill Road",
    description:
      "Introducing a stunning, newly constructed duplex home, thoughtfully designed with sophisticated modern amenities and elegant furnishings. This inviting residence boasts a seamless blend of luxury and practicality",
    image: home2,
  },
  {
    title: "95 Garden Place",
    description:
      "Step into contemporary elegance with this brand-new, fully furnished duplex home, where design and comfort converge. The lower level presents an open and airy living space highlighted by high ceilings and large, sunlit windows",
    image: home3,
  },
]

export default function NewHomesPage() {
  return (
    <div>
      <Headline>New Homes</Headline>
      <p>
        For those seeking a comprehensive change, we offer full home
        renovations. From the initial design to the final touches, our team
        manages every aspect, ensuring a cohesive and stunning transformation.
      </p>

      <section className="flex flex-wrap flex-column gap-4 my-8">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 mb-4">
            <div className="w-1/2">
              <Image src={item.image} alt={item.title} />
            </div>
            <div className="w-1/2">
              <h2 className="text-[#841618] font-bold text-xl">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>
      <p>
        Love to own one of these new homes? Contact us today to schedule a
        consultation. Let us show you how McKenzie and Pez Builders can bring
        your dream home to life
      </p>
    </div>
  )
}
