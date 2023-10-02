import ContactForm from "./ui/contact-form";

export default function Contact() {
  return (
    <section className="relative" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pb-20">
          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              {/* TODO put image here */}
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}