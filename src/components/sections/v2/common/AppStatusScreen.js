import Image from "next/image";
import Link from "next/link";

const PRIMARY_BUTTON_CLASS =
  "group/interactive inline-flex items-center justify-center gap-md bevel bevel-[0.25rem] bg-[#958dec] px-md py-sm text-sm font-medium !text-black transition-opacity hover:!text-black hover:opacity-90";

const SECONDARY_BUTTON_CLASS =
  "group/interactive inline-flex items-center justify-center gap-md bevel bevel-[0.25rem] border border-gray-defi-ash bg-transparent px-md py-sm text-sm font-medium text-gray-off-white transition-opacity hover:opacity-80";

export default function AppStatusScreen({
  code = "404",
  eyebrow = "Page not found",
  title = "This page doesn't exist",
  description = "The page you're looking for may have moved, or the link might be out of date.",
  primaryHref = "/",
  primaryLabel = "Back to home",
  secondaryAction = null,
  showLogo = false,
  className = "",
}) {
  return (
    <section
      className={`relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-gray-night-green px-6 py-16 text-gray-off-white ${className}`.trim()}
      style={{ colorScheme: "dark" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(149,141,236,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(171,41,14,0.08),transparent_35%)]"
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        {showLogo ? (
          <Link href="/" className="mb-10 inline-flex" aria-label="Sidago home">
            <Image
              src="/images/navbar-logo-icon.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
          </Link>
        ) : null}

        <p className="font-blender text-xs uppercase tracking-[0.22em] text-green-dark">
          {eyebrow}
        </p>

        <h1
          aria-hidden
          className="mt-4 font-blender text-[clamp(4.5rem,18vw,10rem)] leading-none tracking-tight text-[#958dec]"
        >
          {code}
        </h1>

        <h2 className="mt-6 text-2xl leading-tight lg:text-4xl">{title}</h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-gray-tradfi-silver lg:text-lg">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-md">
          <Link href={primaryHref} className={PRIMARY_BUTTON_CLASS}>
            {primaryLabel}
          </Link>
          {secondaryAction}
        </div>
      </div>
    </section>
  );
}

export { PRIMARY_BUTTON_CLASS, SECONDARY_BUTTON_CLASS };
