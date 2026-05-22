"use client";

import Link from "next/link";
import { useState } from "react";
import { subscribeContent } from "@/src/components/sections/v2/digital-support-services/data";

function SubmitArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SubscribeSection({
  content = subscribeContent,
  onSubmit,
}) {
  const [email, setEmail] = useState("");
  const [newsletters, setNewsletters] = useState(() =>
    Object.fromEntries(
      content.newsletterOptions.map((option) => [option.id, false]),
    ),
  );

  const toggleNewsletter = (id) => {
    setNewsletters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasNewsletter = Object.values(newsletters).some(Boolean);
    if (!hasNewsletter) {
      return;
    }
    onSubmit?.({ email, newsletters });
  };

  return (
    <section className="bg-gray-tradfi-horizon text-gray-night-green">
      <div className="container py-block">
        <div className="pb-container">
          <div className="relative">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2
                className="z-10 inline-block max-w-[60%] text-2xl font-normal text-gray-night-green lg:text-3xl"
                id={content.headingId}
              >
                {content.heading}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-gray-tradfi-horizon text-gray-night-green">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4xl"
            noValidate
          >
            <div className="flex flex-col gap-sm">
              <label
                htmlFor="subscribe-email"
                className="font-blender text-sm uppercase text-green-tradfi"
              >
                {content.emailLabel} <span aria-hidden="true">*</span>
              </label>
              <input
                id="subscribe-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full max-w-full border-0 border-b border-gray-night-green bg-transparent py-2 text-base font-normal text-gray-night-green outline-none ring-0 placeholder:text-gray-tradfi-steel focus:border-gray-night-green focus:outline-none focus:ring-0"
              />
            </div>

            <fieldset className="m-0 flex flex-col gap-md border-0 p-0">
              <legend className="mb-0 w-full font-blender text-sm uppercase text-green-tradfi">
                {content.newslettersLabel}{" "}
                <span aria-hidden="true">*</span>
              </legend>
              <div className="flex flex-col gap-md">
                {content.newsletterOptions.map((option) => (
                  <label
                    key={option.id}
                    htmlFor={`subscribe-${option.id}`}
                    className="flex cursor-pointer items-start gap-sm text-base font-normal text-gray-night-green"
                  >
                    <input
                      id={`subscribe-${option.id}`}
                      name="newsletters"
                      type="checkbox"
                      value={option.id}
                      checked={Boolean(newsletters[option.id])}
                      onChange={() => toggleNewsletter(option.id)}
                      className="mt-0.5 h-[0.875rem] w-[0.875rem] shrink-0 appearance-none rounded-none border border-gray-night-green bg-transparent checked:bg-gray-night-green"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <p className="max-w-3xl text-sm font-normal leading-relaxed text-gray-tradfi-steel">
              {content.disclaimer}
              <Link
                href={content.privacyPolicyHref}
                className="text-gray-tradfi-steel underline underline-offset-2 hover:opacity-80"
              >
                {content.privacyPolicyLabel}
              </Link>
              .
            </p>

            <div>
              <button
                type="submit"
                className="group/interactive inline-flex items-center justify-between gap-md bg-green-tradfi px-sm py-xs font-medium text-gray-night-green bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 disabled:opacity-50"
              >
                <span className="sr-only">{content.submitSrText}</span>
                {content.submitLabel}
                <SubmitArrow />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
