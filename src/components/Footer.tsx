import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="footer text-center p-4 text-lg lg:text-sm text-white/70">
        &copy;2024 <strong>McKenzie & Paz Builders</strong> - Developed By{" "}
        <Link
          href="https://www.linkedin.com/in/tamalchowdhury/"
          className="text-accent"
        >
          Tamal Chowdhury
        </Link>
      </footer>
    </>
  )
}
