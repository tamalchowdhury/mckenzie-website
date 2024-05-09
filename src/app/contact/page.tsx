import Headline from "@/components/Headline"
import React from "react"

import { Metadata } from "next"
import siteInfo from "../meta"

export const metadata: Metadata = {
  title: `Contact - ${siteInfo.title}`,
}

export default function ContactPage() {
  return (
    <div>
      <Headline>Contact</Headline>
      <p>
        Ready to turn your home into the haven you’ve always dreamed of? Contact
        us today to schedule a consultation. Let us show you how McKenzie and
        Pez Builders can bring your dream home to life with precision, passion,
        and professionalism.
      </p>
      <div className="my-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.1688585258607!2d172.71378217696898!3d-43.28978536638501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d31979e30dab0e9%3A0xf6fb8965c5f8205b!2sMcKenzie%20Builders!5e0!3m2!1sen!2ssg!4v1715239297114!5m2!1sen!2ssg"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p>Waikuku Beach 7402, New Zealand</p>
      <p>+6433100608</p>

      <div>
        <h2></h2>
      </div>
    </div>
  )
}
