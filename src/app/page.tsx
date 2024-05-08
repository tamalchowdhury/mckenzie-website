import Image from "next/image"
import logo from "@/img/logo.jpg"
import Link from "next/link"
import FreeQuoteForm from "@/components/FreeQuoteForm"

export default function Home() {
  return (
    <>
      <section className="hero border-[1px]">
        <div className="address bg-[#841618]/50 text-white p-2 text-center text-2xl ">
          95 Garden Place COSTERFIELD VIC 3523
        </div>
      </section>
    </>
  )
}
