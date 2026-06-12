const ARROW_PATH =
  "M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z";

export default function LinkTitleWithArrow({
  title,
  textClassName = "text-xl font-medium leading-snug lg:text-lg",
  textWrapperClassName = "",
  arrowClassName = "text-green-dark",
  gapClassName = "gap-3 lg:gap-4",
  alignClassName = "",
  mobileArrowWidth = "2.5rem",
  desktopArrowWidth = "1.5rem",
}) {
  const lines = title.split("\n").filter(Boolean);

  return (
    <div
      className={`flex items-center ${gapClassName} ${alignClassName}`.trim()}
    >
      <p
        className={`min-w-0 flex-1 text-left leading-snug ${textWrapperClassName}`}
      >
        {lines.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`}>
            {lineIndex > 0 ? <br /> : null}
            <span className={textClassName}>{line}</span>
          </span>
        ))}
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={`shrink-0 self-center transition-transform duration-300 group-hover/interactive:translate-x-1 group-active/interactive:translate-x-1 lg:hidden ${arrowClassName}`}
        style={{ width: mobileArrowWidth }}
        aria-hidden
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d={ARROW_PATH}
          clipRule="evenodd"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        className={`hidden shrink-0 self-center transition-transform duration-300 group-hover/interactive:translate-x-1 group-active/interactive:translate-x-1 lg:inline-block ${arrowClassName}`}
        style={{ width: desktopArrowWidth }}
        aria-hidden
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d={ARROW_PATH}
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
