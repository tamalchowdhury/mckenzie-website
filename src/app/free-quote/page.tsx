import Headline from "@/components/Headline"
import React from "react"

import { Metadata } from "next"
import siteInfo from "../meta"

export const metadata: Metadata = {
  title: `Free Quote - ${siteInfo.title}`,
}

export default function FreeQuotePage() {
  return (
    <div>
      <Headline>Free Quote</Headline>
      <p className="mb-4">
        For a personalized free quote tailored to your specific renovation
        needs, please fill out the form to the right.
      </p>
      <p className="mb-4">
        Provide us with a brief description of your project, your contact
        details, and any specific requests or preferences you have. This will
        help us understand the scope and requirements of your renovation,
        enabling us to give you the most accurate estimate.
      </p>
      <p>
        Our team at McKenzie and Pez Builders is eager to collaborate with you
        to transform your space. Don't hesitate to reach out with your details
        today, and let's start the journey to your dream home!
      </p>
    </div>
  )
}
