import Link from "next/link";

const ARROW_PATH =
  "M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z";

export default function WhoWeServeLinkPill({
  href,
  label,
  srText,
  visible = true,
  className = "",
}) {
  return (
    <Link
      href={href}
      style={{ position: "relative" }}
      className={`group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] px-sm py-xs text-base bg-gray-defi-charcoal text-green-dark transition-opacity delay-250 duration-700 ${visible ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {srText ? <span className="sr-only">{srText}</span> : null}
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
        style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
        aria-hidden
      >
        <path fill="currentColor" fillRule="evenodd" d={ARROW_PATH} clipRule="evenodd" />
      </svg>
    </Link>
  );
}
