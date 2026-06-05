"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

function EyeIcon({ open }) {
  if (open) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 3l18 18M10.58 10.58A3 3 0 0 0 12 15a3 3 0 0 0 2.42-4.42M9.88 5.09A10.94 10.94 0 0 1 12 5c6.5 0 10 7 10 7a18.24 18.24 0 0 1-4.12 5.12M6.12 6.12A18.24 18.24 0 0 0 2 12s3.5 7 10 7a10.94 10.94 0 0 0 2.12-.21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  autoComplete,
  trailing,
}) {
  return (
    <div className="login-field">
      <label htmlFor={id} className="login-field__label">
        {label}
      </label>
      <div className="login-field__control">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="login-field__input"
        />
        {trailing ? (
          <div className="login-field__trailing">{trailing}</div>
        ) : null}
      </div>
    </div>
  );
}

export default function LoginView({
  productName = "Node",
  registerHref = "/contact",
}) {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="login-page__shell">
        <section className="login-card" aria-labelledby="login-heading">
          <div className="login-card__brand">
            <div className="login-card__logo-wrap">
              <Image
                src="/images/navbar-logo-icon.png"
                alt=""
                width={560}
                height={446}
                unoptimized
                className="login-card__logo object-contain"
                aria-hidden
              />
            </div>
            <span className="login-card__brand-name">Sidago</span>
          </div>

          <h1 id="login-heading" className="login-card__title">
            Log in to {productName}
          </h1>
          <p className="login-card__subtitle">
            Please check you are visiting the correct URL.
          </p>

          <form className="login-card__form" onSubmit={handleSubmit} noValidate>
            <FloatingField
              id={emailId}
              label="Email address*"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />

            <FloatingField
              id={passwordId}
              label="Password*"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              trailing={
                <button
                  type="button"
                  className="login-field__toggle"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <EyeIcon open={showPassword} />
                </button>
              }
            />

            <Link href="/contact" className="login-forgot">
              Forgot password?
            </Link>

            <button type="submit" className="login-submit">
              Login
            </button>
          </form>
        </section>

        <section className="login-info" aria-labelledby="login-info-heading">
          <h2 id="login-info-heading" className="login-info__title">
            Not sure if you have an account?
          </h2>
          <p className="login-info__text">
            If you are onboarding or an existing counterparty to Sidago, please
            check if you have received an email from us with information about
            how to access the platform.
          </p>
          <p className="login-info__text">
            If you haven&apos;t received anything, please click the button
            below.
          </p>
          <Link href={registerHref} className="login-submit login-submit--info">
            Register interest
          </Link>
        </section>
      </div>
    </div>
  );
}
