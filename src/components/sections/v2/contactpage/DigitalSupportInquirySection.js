"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { coreServices } from "@/src/components/sections/v2/digital-support-services/data";
import "./digital-support-inquiry.css";

const CONTACT_EMAIL = "hello@sidago.com";

const LOCATION_OPTIONS = [
  { value: "", label: "Please Select" },
  { value: "americas", label: "Americas (EST / PST)" },
  { value: "europe", label: "Europe & UK" },
  { value: "mea", label: "Middle East & Africa" },
  { value: "apac", label: "Asia Pacific" },
  { value: "other", label: "Other" },
];

function UnderlineField({
  id,
  label,
  type = "text",
  name,
  required,
  autoComplete,
  value,
  onChange,
}) {
  return (
    <div className="dss-inquiry-field">
      <label htmlFor={id} className="dss-inquiry-field__label">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        className="dss-inquiry-field__input"
      />
    </div>
  );
}

export default function DigitalSupportInquirySection() {
  const formId = useId();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telegram: "",
    location: "",
    services: [],
  });

  const update = (key) => (event) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
  };

  const toggleService = (title) => {
    setValues((current) => ({
      ...current,
      services: current.services.includes(title)
        ? current.services.filter((item) => item !== title)
        : [...current.services, title],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.services.length) return;
    const subject = encodeURIComponent(
      `Digital Support inquiry — ${values.firstName} ${values.lastName}`,
    );
    const body = encodeURIComponent(
      [
        `First name: ${values.firstName}`,
        `Last name: ${values.lastName}`,
        `Email: ${values.email}`,
        `Telegram: ${values.telegram || "—"}`,
        `Location: ${values.location || "—"}`,
        `Services interested: ${values.services.join(", ") || "—"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="digital-support-inquiry"
      className="dss-inquiry bg-gray-night-green py-block text-gray-off-white"
      aria-labelledby={`${formId}-title`}
    >
      <div className="container">
        <div className="flex items-stretch gap-4 sm:gap-6 lg:gap-8">
          <div
            className="core-column--stacked-on-mobile relative w-11 shrink-0 self-stretch sm:w-12 lg:w-[9.5rem] lg:max-w-[min(100%,16rem)]"
            style={{ "--core-column-width": "9.5rem" }}
            aria-hidden
          >
            <div className="bevel absolute inset-0 overflow-hidden bg-[#454A47]">
              <Image
                alt=""
                loading="lazy"
                fill
                unoptimized
                sizes="(max-width: 1024px) 3rem, 9.5rem"
                className="h-full w-full object-cover object-center"
                src="https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/26202946/Contact-graphic.svg"
              />
            </div>
          </div>

          <div
            className="core-column--stacked-on-mobile min-w-0 flex-1"
            style={{ "--core-column-width": "85%" }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-green-dark">
              Contact us
            </p>
            <h2
              id={`${formId}-title`}
              className="mt-2 max-w-[36rem] text-3xl text-gray-off-white sm:text-4xl"
            >
              Get in touch about Digital Support Services
            </h2>

            <form
              onSubmit={handleSubmit}
              className="dss-inquiry-form mt-10 max-w-[40rem]"
            >
              <div className="dss-inquiry-form__grid">
                <UnderlineField
                  id={`${formId}-first-name`}
                  name="firstName"
                  label="First name*"
                  required
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={update("firstName")}
                />
                <UnderlineField
                  id={`${formId}-last-name`}
                  name="lastName"
                  label="Last name*"
                  required
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={update("lastName")}
                />
                <UnderlineField
                  id={`${formId}-email`}
                  name="email"
                  label="Email*"
                  type="email"
                  required
                  autoComplete="email"
                  value={values.email}
                  onChange={update("email")}
                />
                <UnderlineField
                  id={`${formId}-telegram`}
                  name="telegram"
                  label="Telegram handle"
                  autoComplete="off"
                  value={values.telegram}
                  onChange={update("telegram")}
                />
              </div>

              <div className="dss-inquiry-field dss-inquiry-field--select">
                <label htmlFor={`${formId}-location`} className="dss-inquiry-field__label">
                  Location*
                </label>
                <p className="dss-inquiry-field__hint">
                  Where are you based? (e.g. region, timezone)
                </p>
                <div className="dss-inquiry-select-wrap">
                  <select
                    id={`${formId}-location`}
                    name="location"
                    required
                    value={values.location}
                    onChange={update("location")}
                    className="dss-inquiry-select"
                  >
                    {LOCATION_OPTIONS.map((option) => (
                      <option key={option.value || "empty"} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    className="dss-inquiry-select__chevron"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <fieldset className="dss-inquiry-checks">
                <legend className="dss-inquiry-field__label">
                  Services interested*
                </legend>
                <ul className="dss-inquiry-checks__list">
                  {coreServices.map((service) => {
                    const checked = values.services.includes(service.title);
                    const optionId = `${formId}-${service.title.replace(/\W+/g, "-").toLowerCase()}`;

                    return (
                      <li key={service.title}>
                        <label htmlFor={optionId} className="dss-inquiry-checks__item">
                          <input
                            id={optionId}
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleService(service.title)}
                            className="dss-inquiry-checks__box"
                          />
                          <span>{service.title}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </fieldset>

              <button type="submit" className="dss-inquiry-submit">
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
