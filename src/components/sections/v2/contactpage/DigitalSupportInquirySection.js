"use client";

import Image from "next/image";
import Link from "next/link";
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

const ACCOUNT_TYPE_OPTIONS = [
  { value: "", label: "Please Select" },
  {
    value: "legal-entity",
    label: "Legal entity (including sole owner registered entities)",
  },
  { value: "individual", label: "Individual" },
];

function FieldLabel({ htmlFor, children, required, as = "label" }) {
  const Tag = as;

  return (
    <Tag
      {...(as === "label" ? { htmlFor } : {})}
      className="dss-inquiry-field__label"
    >
      <span>{children}</span>
      {required ? <span className="dss-inquiry-field__required">*</span> : null}
    </Tag>
  );
}

function SelectChevron() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className="dss-inquiry-select__chevron">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SubmitArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="dss-inquiry-submit__arrow"
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

function UnderlineField({
  id,
  label,
  hint,
  type = "text",
  name,
  required,
  autoComplete,
  value,
  onChange,
}) {
  return (
    <div className="dss-inquiry-field">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      {hint ? <p className="dss-inquiry-field__hint">{hint}</p> : null}
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

function UnderlineTextarea({ id, label, name, value, onChange, rows = 4 }) {
  return (
    <div className="dss-inquiry-field">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className="dss-inquiry-field__textarea"
      />
    </div>
  );
}

function SelectField({ id, label, hint, name, required, value, onChange, options }) {
  return (
    <div className="dss-inquiry-field dss-inquiry-field--select">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      {hint ? <p className="dss-inquiry-field__hint">{hint}</p> : null}
      <div className="dss-inquiry-select-wrap">
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`dss-inquiry-select ${!value ? "dss-inquiry-select--placeholder" : ""}`}
        >
          {options.map((option) => (
            <option key={option.value || "empty"} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <SelectChevron />
      </div>
    </div>
  );
}

export default function DigitalSupportInquirySection({
  topicLabel = "Digital Support Services",
  showServicesField = false,
}) {
  const formId = useId();
  const inquiryTitle = `Get in touch about ${topicLabel}`;
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telegram: "",
    location: "",
    services: [],
    accountType: "",
    additionalInfo: "",
    sidagoContact: "",
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
    if (showServicesField && !values.services.length) return;

    const subject = encodeURIComponent(
      `${topicLabel} inquiry — ${values.firstName} ${values.lastName}`,
    );
    const body = encodeURIComponent(
      [
        `Topic: ${topicLabel}`,
        `First name: ${values.firstName}`,
        `Last name: ${values.lastName}`,
        `Email: ${values.email}`,
        `Telegram: ${values.telegram || "—"}`,
        `Location: ${values.location || "—"}`,
        ...(showServicesField
          ? [`Services interested: ${values.services.join(", ") || "—"}`]
          : []),
        `Account type: ${
          ACCOUNT_TYPE_OPTIONS.find((option) => option.value === values.accountType)
            ?.label || "—"
        }`,
        `Additional info: ${values.additionalInfo || "—"}`,
        `Sidago contact: ${values.sidagoContact || "—"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="dss-inquiry bg-[#1C211E] text-gray-off-white"
      aria-labelledby={`${formId}-title`}
    >
      <div className="container dss-inquiry-container">
        <div className="dss-inquiry-layout">
          <aside className="dss-inquiry-aside" aria-hidden>
            <div className="dss-inquiry-aside__sticky">
              <div className="dss-inquiry-aside__graphic bevel">
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
          </aside>

          <div className="dss-inquiry-main">
            <p className="dss-inquiry-eyebrow">Contact us</p>
            <h2 id={`${formId}-title`} className="dss-inquiry-title">
              {inquiryTitle}
            </h2>

            <form onSubmit={handleSubmit} className="dss-inquiry-form">
              <div className="dss-inquiry-form__row">
                <UnderlineField
                  id={`${formId}-first-name`}
                  name="firstName"
                  label="First name"
                  required
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={update("firstName")}
                />
                <UnderlineField
                  id={`${formId}-last-name`}
                  name="lastName"
                  label="Last name"
                  required
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={update("lastName")}
                />
              </div>

              <UnderlineField
                id={`${formId}-email`}
                name="email"
                label="Email"
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

              <SelectField
                id={`${formId}-location`}
                name="location"
                label="Location"
                hint="Where are you based? (e.g. region, timezone)"
                required
                value={values.location}
                onChange={update("location")}
                options={LOCATION_OPTIONS}
              />

              {showServicesField ? (
                <fieldset className="dss-inquiry-checks">
                  <FieldLabel as="legend" required>
                    Services interested
                  </FieldLabel>
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
              ) : null}

              <SelectField
                id={`${formId}-account-type`}
                name="accountType"
                label="Account type"
                hint="Are you inquiring on behalf of a legal entity (including sole owner registered entities) or an individual?"
                required
                value={values.accountType}
                onChange={update("accountType")}
                options={ACCOUNT_TYPE_OPTIONS}
              />

              <UnderlineTextarea
                id={`${formId}-additional-info`}
                name="additionalInfo"
                label="Additional info"
                value={values.additionalInfo}
                onChange={update("additionalInfo")}
              />

              <UnderlineField
                id={`${formId}-sidago-contact`}
                name="sidagoContact"
                label="Sidago contact"
                hint="Do you have an established relationship with one of our BD members?"
                autoComplete="off"
                value={values.sidagoContact}
                onChange={update("sidagoContact")}
              />

              <div className="dss-inquiry-legal">
                <p>
                  Don&apos;t invest unless you&apos;re prepared to lose all the money you
                  invest. This is a high-risk investment and you are unlikely to be
                  protected if something goes wrong. Take 2 mins to learn more{" "}
                  <Link href="/legal">here</Link>.
                </p>
                <p>
                  Sidago and its affiliates need the contact information you provide to us
                  to contact you about our products and services. You may unsubscribe from
                  these communications at anytime. For information on how to unsubscribe,
                  as well as our privacy practices and commitment to protecting your
                  privacy, check out our{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </p>
              </div>

              <button type="submit" className="dss-inquiry-submit bevel bevel-[0.25rem]">
                <span className="sr-only">Submit inquiry</span>
                Submit
                <SubmitArrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
