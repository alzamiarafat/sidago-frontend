"use client";

import Link from "next/link";
import { useId, useState } from "react";

function BrandLogo() {
  return (
    <svg
      width="33"
      height="24"
      viewBox="0 0 33 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="login-card__logo"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3407 0.243096L24.3598 0L32.3324 15.7598L32.0844 16.4886L16.3988 24L15.9336 24L0.247958 16.4891L0 15.7602L7.97258 0.000480536L8.99165 0.243577V14.718L15.7886 8.03381L16.5438 8.0338L23.3407 14.7175V0.243096ZM24.0981 16.5409L18.8908 21.6124L29.4807 16.5412L24.0981 16.5409ZM30.9758 15.4643L24.4178 15.4639V2.50063L30.9758 15.4643ZM16.7047 22.2381L23.1093 16.0005L16.7047 9.70262V22.2381ZM15.6277 9.70267V22.2381L9.22308 16.001L15.6277 9.70267ZM7.91459 15.4644L1.35652 15.4648L7.91459 2.50111V15.4644ZM2.85182 16.5417L13.4414 21.6125L8.23424 16.5414L2.85182 16.5417Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
            <BrandLogo />
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
