"use client";

import { Suspense, useId, useState } from "react";
import { useSearchParams } from "next/navigation";

const TOPIC_OPTIONS = [
  "Digital Support Services",
  "Global Workforce Solutions",
  "Scalable Operations",
  "Recruitment",
  "Events",
  "Media",
  "Legal and Compliance",
  "Other",
];

const CONTACT_EMAIL = "hello@sidago.com";

function FloatingField({
  id,
  label,
  type = "text",
  name,
  required,
  autoComplete,
  rows,
  value,
  onChange,
}) {
  const isTextarea = type === "textarea";
  const shared =
    "peer w-full rounded-lg border-0 bg-white/[0.06] px-4 pb-3 pt-6 text-gray-off-white placeholder-transparent outline-none ring-1 ring-white/10 transition hover:ring-white/15 focus:bg-white/[0.08] focus:ring-green-dark/50";

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3 z-[1] origin-left text-xs font-medium uppercase tracking-[0.14em] text-gray-off-white/55 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-gray-off-white/40 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-green-dark peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em]"
      >
        {label}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows ?? 5}
          placeholder=" "
          className={`${shared} min-h-[8rem] resize-y`}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder=" "
          className={`${shared} h-[3.25rem]`}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

function FloatingSelectField({ id, label, name, value, onChange, options }) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3 z-[1] origin-left text-xs font-medium uppercase tracking-[0.14em] text-gray-off-white/55"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="h-[3.25rem] w-full cursor-pointer rounded-lg border-0 bg-white/[0.06] px-4 pb-2 pt-6 text-gray-off-white outline-none ring-1 ring-white/10 transition hover:ring-white/15 focus:bg-white/[0.08] focus:ring-green-dark/50"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-gray-night-green text-gray-off-white"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactLeadFormFallback() {
  return (
    <section
      id="contact-form"
      className="min-h-[20rem] bg-transparent py-block"
      aria-busy="true"
      aria-label="Loading contact form"
    >
      <div className="container flex items-center justify-center py-16 text-sm text-gray-off-white/50">
        Loading...
      </div>
    </section>
  );
}

function ContactLeadFormFields({ initialTopic }) {
  const formId = useId();
  const [status, setStatus] = useState("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    topic: initialTopic,
    message: "",
  });

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Sidago contact: ${values.topic} — ${values.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "—"}\nTopic: ${values.topic}\n\nMessage:\n${values.message}`,
    );
    setStatus("sent");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact-form"
      className="relative bg-gray-defi-charcoal py-block"
      aria-labelledby={`${formId}-form-title`}
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start">
          <div className="max-w-[28rem]">
            <p className="text-sm uppercase tracking-[0.2em] text-green-dark">
              Message
            </p>
            <h2
              id={`${formId}-form-title`}
              className="mt-2 text-2xl uppercase tracking-wide text-gray-off-white sm:text-3xl"
            >
              Tell us what you need
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-off-white/75">
              Share a few details and we will route your message to the right
              team. You can also email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-green-dark underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <div className="mt-8 space-y-3 text-sm leading-7 text-gray-off-white/60">
              <p>Choose the closest topic so the enquiry reaches the right team faster.</p>
              <p>Add company context and timeline if the request is time-sensitive.</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white/[0.04] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.16)] ring-1 ring-white/[0.06] backdrop-blur-sm md:p-7">
            <form
              onSubmit={handleSubmit}
              className="grid gap-5 md:grid-cols-2 md:gap-6"
            >
              <FloatingField
                id={`${formId}-name`}
                name="name"
                label="Full name"
                required
                autoComplete="name"
                value={values.name}
                onChange={update("name")}
              />
              <FloatingField
                id={`${formId}-email`}
                name="email"
                type="email"
                label="Work email"
                required
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
              />
              <FloatingField
                id={`${formId}-company`}
                name="company"
                label="Company (optional)"
                autoComplete="organization"
                value={values.company}
                onChange={update("company")}
              />
              <FloatingSelectField
                id={`${formId}-topic`}
                name="topic"
                label="Topic"
                value={values.topic}
                onChange={update("topic")}
                options={TOPIC_OPTIONS}
              />
              <div className="md:col-span-2">
                <FloatingField
                  id={`${formId}-message`}
                  name="message"
                  type="textarea"
                  label="How can we help?"
                  required
                  value={values.message}
                  onChange={update("message")}
                />
              </div>

              <div className="flex flex-col gap-4 pt-1 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-sm leading-7 text-gray-off-white/55">
                  By submitting, you agree we may use your details to respond
                  to this inquiry.
                </p>
                <button
                  type="submit"
                  className="inline-flex min-h-[3.25rem] min-w-[8.5rem] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-green-dark px-10 text-sm uppercase tracking-[0.12em] text-gray-night-green transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b47] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-dark"
                >
                  Send
                </button>
              </div>

              {status === "sent" ? (
                <p
                  className="md:col-span-2 rounded-lg bg-white/[0.06] px-4 py-3 text-center text-sm text-gray-off-white/88 ring-1 ring-white/10"
                  role="status"
                >
                  If your mail client did not open, reach us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-green-dark underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLeadFormFromSearchParams() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("topic");
  const initialTopic =
    raw && TOPIC_OPTIONS.includes(raw) ? raw : TOPIC_OPTIONS[0];

  return (
    <ContactLeadFormFields key={initialTopic} initialTopic={initialTopic} />
  );
}

export default function ContactLeadForm() {
  return (
    <Suspense fallback={<ContactLeadFormFallback />}>
      <ContactLeadFormFromSearchParams />
    </Suspense>
  );
}
