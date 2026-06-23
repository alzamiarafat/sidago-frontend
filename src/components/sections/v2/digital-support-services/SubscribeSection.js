"use client";

import Link from "next/link";
import { useState } from "react";

function SubmitArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="h-4 w-4 shrink-0"
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
  content,
  onSubmit,
  className = "",
}) {
  if (!content?.heading || !content?.newsletterOptions?.length) {
    return null;
  }

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
    <section className={`v2-subscribe ${className}`.trim()}>
      <div className="container v2-subscribe__inner">
        <h2 className="v2-subscribe__title" id={content.headingId}>
          {content.heading}
        </h2>

        <form className="v2-subscribe__form" onSubmit={handleSubmit} noValidate>
          <div className="v2-subscribe__field">
            <label htmlFor="subscribe-email" className="v2-subscribe__email-label">
              {content.emailLabel}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="subscribe-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="v2-subscribe__input"
            />
          </div>

          <fieldset className="v2-subscribe__fieldset">
            <legend className="v2-subscribe__legend">
              {content.newslettersLabel}
              <span aria-hidden="true">*</span>
            </legend>
            <div className="v2-subscribe__options">
              {content.newsletterOptions.map((option) => (
                <label
                  key={option.id}
                  htmlFor={`subscribe-${option.id}`}
                  className="v2-subscribe__option"
                >
                  <input
                    id={`subscribe-${option.id}`}
                    name="newsletters"
                    type="checkbox"
                    value={option.id}
                    checked={Boolean(newsletters[option.id])}
                    onChange={() => toggleNewsletter(option.id)}
                    className="v2-subscribe__checkbox"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <p className="v2-subscribe__disclaimer">
            {content.disclaimer}
            <Link href={content.privacyPolicyHref}>
              {content.privacyPolicyLabel}
            </Link>
            {content.disclaimerSuffix ?? "."}
          </p>

          <div>
            <button type="submit" className="v2-subscribe__submit bevel bevel-[0.25rem]">
              <span className="sr-only">{content.submitSrText}</span>
              {content.submitLabel}
              <SubmitArrow />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
