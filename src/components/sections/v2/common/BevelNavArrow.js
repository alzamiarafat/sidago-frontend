const ARROW_PATH =
  "M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z";

/** Beveled carousel arrow — left is mirrored in SVG space (not CSS rotate). */
export default function BevelNavArrow({
  direction = "right",
  className = "",
}) {
  const isLeft = direction === "left";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={`h-lg w-lg shrink-0 ${className}`.trim()}
      aria-hidden
    >
      {isLeft ? (
        <g transform="translate(40 0) scale(-1 1)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d={ARROW_PATH}
            clipRule="evenodd"
          />
        </g>
      ) : (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d={ARROW_PATH}
          clipRule="evenodd"
        />
      )}
    </svg>
  );
}
