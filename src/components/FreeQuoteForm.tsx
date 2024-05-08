import React from "react"

const inputs = [
  {
    label: "Name",
    type: "text",
    id: "name",
    placeholder: "Name",
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    placeholder: "Email",
  },
  {
    label: "Phone",
    type: "text",
    id: "phone",
    placeholder: "Phone",
  },
  {
    label: "Your Inquiry",
    type: "textarea",
    id: "message",
    placeholder: "Message",
  },
]

export default function FreeQuoteForm() {
  return (
    <>
      <section className="free-quote  bg-[#E1DCC6] border-[1px] border-[#C1B594] p-5">
        <h2 className="font-bold uppercase text-xl text-[#841618] mb-4">
          Get A Free Quote
        </h2>
        <p className="text-[14px] mb-4">
          Simply enter a few details below and we will get back to you within 24
          hours.
        </p>
        <form action="">
          {inputs.map((input, index) => (
            <label
              className="font-bold block mb-4 text-[#333]"
              htmlFor={input.id}
              key={index}
            >
              {input.label}:
              {input.type === "textarea" ? (
                <textarea
                  className="w-[100%] p-1 px-2 font-normal mt-2 rounded-md"
                  id={input.id}
                />
              ) : (
                <input
                  className="w-[100%] p-1 px-2 font-normal mt-2 rounded-md"
                  type={input.type}
                  id={input.id}
                ></input>
              )}
            </label>
          ))}
          <button
            type="submit"
            className="block w-full bg-[#841618] p-2 mb-2 font-bold text-white/90 hover:text-white rounded-md uppercase transition"
          >
            Get a Quote
          </button>
          <small className="text-xs">
            We respect your privacy.{" "}
            <a href="#" className="text-[#841618]">
              Privacy Policy
            </a>
          </small>
        </form>
      </section>
    </>
  )
}
