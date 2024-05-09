import Image from "next/image"
import Link from "next/link"
import React from "react"
import logo from "@/img/logo.jpg"

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "New Homes",
    path: "/new-homes",
  },
  {
    name: "Renovations",
    path: "/renovations",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Free Quote",
    path: "/free-quote",
  },
]

export default function Header() {
  return (
    <>
      <header className="header flex">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="Mckenzie and Paz Builders logo"></Image>
          </Link>
        </div>
        <nav className="nav border-b-8 border-[#841618] w-[100%] flex items-center uppercase font-[300]">
          <ul className="flex justify-between ml-6 w-[100%]">
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.path}
                  className="hover:text-[#841618] transition"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
