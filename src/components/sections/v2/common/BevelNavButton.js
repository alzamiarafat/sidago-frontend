import BevelNavArrow from "@/src/components/sections/v2/common/BevelNavArrow";
import { BRAND_COLORS } from "@/src/data/brand-colors";

export const BEVEL_NAV_BUTTON_CLASS =
  "group/interactive inline-flex items-center justify-center font-medium bevel bevel-[0.25rem] p-[0.625rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 disabled:opacity-50 disabled:pointer-events-none";

/** Reusable beveled prev/next control for carousels. */
export default function BevelNavButton({
  direction = "right",
  ariaLabel,
  bgColor = BRAND_COLORS.orange,
  iconClassName = "text-gray-night-green",
  className = "",
  type = "button",
  style,
  ...props
}) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={`${BEVEL_NAV_BUTTON_CLASS} ${iconClassName} ${className}`.trim()}
      style={{ backgroundColor: bgColor, ...style }}
      {...props}
    >
      <BevelNavArrow direction={direction} />
    </button>
  );
}
