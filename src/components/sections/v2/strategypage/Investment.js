const defaultServiceGroups = [
  {
    title: "Customer Support",
    description:
      "Call center, email handling, live chat, and customer experience management.",
    short: "Support",
  },
  {
    title: "Data & Analytics",
    description:
      "Data entry, data processing, reporting, and business insights.",
    short: "Data",
  },
  {
    title: "Finance & Accounting",
    description:
      "Bookkeeping, payroll support, invoicing, and financial reports.",
    short: "Finance",
  },
  {
    title: "E-commerce Operations",
    description:
      "Order management, product listing, inventory updates, and support.",
    short: "Commerce",
  },
  {
    title: "Back-Office Operations",
    description:
      "Administrative tasks, documentation, records, and workflow support.",
    short: "Back Office",
  },
  {
    title: "HR & Recruitment",
    description:
      "Talent sourcing, candidate coordination, onboarding, and HR admin.",
    short: "People",
  },
  {
    title: "IT & Technical Support",
    description:
      "System support, troubleshooting, ticket handling, and user assistance.",
    short: "Technical",
  },
  {
    title: "Sales & Lead Generation",
    description:
      "Outbound calling, lead qualification, CRM updates, and follow-ups.",
    short: "Growth",
  },
];

export default function Investment({
  title = "Business Processes We Support",
  subtitle = "Flexible teams for the operational work that keeps your business moving, from customer care to back-office execution.",
  items = defaultServiceGroups,
}) {
  return (
    <section className="bg-gray-defi-shadow">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex max-w-4xl flex-col gap-xs">
            <h2 className="font-blender text-xl uppercase text-green-dark">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-gray-off-white/70 lg:text-base">
              {subtitle}
            </p>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section className="relative text-gray-off-white">
          <div className="group/cards grid gap-md md:grid-cols-2 xl:grid-cols-4 xl:gap-xl">
            {items.map((service) => (
              <a
                key={service.title}
                style={{ position: "relative" }}
                className="group/interactive relative flex min-h-[17rem] flex-col justify-between overflow-hidden bg-gray-defi-graphite p-xl transition-all bevel hover:-translate-y-1 hover:bg-gray-defi-charcoal lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                href="#"
              >
                <span className="sr-only">{service.title}</span>
                <div className="pointer-events-none absolute inset-x-xl top-0 h-[0.18rem] bg-blue-mid/35 transition-colors group-hover/interactive:bg-green-dark" />
                <div className="font-blender text-lg uppercase leading-tight text-blue-mid">
                  {service.title}
                </div>

                <div className="flex flex-col gap-md">
                  <div className="w-max bevel border border-blue-mid/25 bg-gray-night-green/35 px-xs py-[0.35rem] font-blender text-sm uppercase text-green-dark">
                    {service.short}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-off-white/72 lg:text-base">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
