import Image from "next/image";
import logo from "@/img/logo.jpg"
import Link from "next/link";

const routes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Renovations",
    path: "/renovations"
  },
  {
    name: "New Homes",
    path: "/new-homes"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Contact",
    path: "/contact"
  },
  {
    name: "Free Quote",
    path: "/free-quote"
  }
]

const inputs = [
  {
    label: "Name",
    type: "text",
    id: "name",
    placeholder: "Name"
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "Email"
  },
  {
    label: "Phone",
    type: "text",
    id: "phone",
    placeholder: "Phone"
  },
  {
    label: "Your Inquiry",
    type: "textarea",
    id: "message",
    placeholder: "Message"
  }
]

export default function Home() {
  return (
    <>
    <main className="wrapper bg-white lg:w-[1024px] mx-auto p-7 mt-4">
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
                <Link href={route.path} className="hover:text-[#841618] transition">{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="content grid grid-cols-[1fr_300px] mt-6 gap-6">

      <section className="hero border-[1px] ">
        section hero image 
        <div className="address">95 Garden Place COSTERFIELD VIC 3523</div>
      </section>
      <section className="free-quote  bg-[#E1DCC6] border-[1px] border-[#C1B594] p-5">
        <h2 className="font-bold uppercase text-xl text-[#841618] mb-4">Get A Free Quote</h2>
        <p className="text-[14px] mb-4">Simply enter a few details below and we will get back to you within 24 hours.</p>
        <form action="">
          {inputs.map((input, index) => (
            <label className="font-bold block mb-4 text-[#333]" htmlFor={input.id} key={index}>{input.label}:
              {input.type === "textarea" ? (
                <textarea className="w-[100%] p-1 px-2 font-normal mt-2 rounded-md" id={input.id} />
              ) : (
                <input className="w-[100%] p-1 px-2 font-normal mt-2 rounded-md" type={input.type} id={input.id} ></input>
              )}
            </label>
          ))}       
          <button type="submit" className="block w-full bg-[#841618] p-2 mb-2 font-bold text-white/90 hover:text-white rounded-md uppercase transition">Get a Quote</button>
          <small className="text-xs">We respect your privacy. <a href="#" className="text-[#841618]">Privacy Policy</a></small>
        </form>
      </section>
      </div>
    </main>
    <footer className="footer text-center mt-4 text-sm text-white/70">&copy; 2024 <strong>McKenzie & Paz Builders</strong> - Developed By <Link href="https://tamalchowdhury.com" className="text-[#841618]">Tamal Chowdhury</Link></footer>
    </>
  );
}
