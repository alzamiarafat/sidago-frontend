const INTRO =
  "Founded in 2017, Sidago has grown into a diversified powerhouse in the digital asset space, with a global presence across its London, New York and Singapore offices, as well as various remote locations.";

export default function ContactPremiumHero() {
  return (
    <section
      className="relative overflow-hidden bg-gray-night-green pt-[calc(var(--header-height,4.5rem)+1.5rem)] pb-14 md:pb-20 lg:pb-24"
      aria-labelledby="contact-hero-heading"
    >
      <div className="container">
        <div className="max-w-[56rem]">
          <p className="text-sm uppercase tracking-[0.2em] text-green-dark">
            Contact
          </p>
          <h1
            id="contact-hero-heading"
            className="mt-3 text-3xl uppercase leading-tight tracking-wide text-gray-off-white sm:text-4xl md:text-[2.8rem]"
          >
            Get in touch with <span className="text-green-dark">Sidago</span>
          </h1>
          <p className="mt-5 max-w-[48rem] text-base leading-8 text-gray-off-white/82 md:text-lg">
            {INTRO}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-full bg-green-dark px-6 py-3 text-sm uppercase tracking-wide text-gray-night-green transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b47] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-dark"
            >
              Send a message
            </a>
            <a
              href="#contact-topics"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-6 py-3 text-sm uppercase tracking-wide text-gray-off-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
            >
              Choose a topic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
