import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="footer text-center mt-4 text-sm text-white/70">
        &copy;2024 <strong>McKenzie & Paz Builders</strong> - Developed By{" "}
        <Link href="https://tamalchowdhury.com" className="text-[#841618]">
          Tamal Chowdhury
        </Link>
      </footer>
    </>
  )
}