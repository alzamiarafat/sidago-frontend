import ArmitageArrowIcon from "./ArmitageArrowIcon";
import { ARMITAGE_BEVEL, ARMITAGE_BRAND } from "./brand";

const BEVEL_BY_SIZE = {
  sm: ARMITAGE_BEVEL.sm,
  md: ARMITAGE_BEVEL.md,
  lg: ARMITAGE_BEVEL.lg,
};

const VARIANT_STYLES = {
  orange: {
    backgroundColor: ARMITAGE_BRAND.orange,
    color: ARMITAGE_BRAND.onOrange,
  },
  green: {
    backgroundColor: ARMITAGE_BRAND.green,
    color: ARMITAGE_BRAND.onGreen,
  },
};

/**
 * Primary Armitage CTA — beveled corners, optional arrow.
 * `variant="orange"` (navbar) | `variant="green"` (vault deposit).
 */
export default function ArmitageButton({
  href,
  children,
  size = "md",
  variant = "orange",
  showArrow = true,
  className = "",
  fullWidth = false,
  external = false,
  onClick,
  type = "button",
  ...rest
}) {
  const classes = [
    "armitage-button",
    `armitage-button--${size}`,
    `armitage-button--${variant}`,
    fullWidth ? "armitage-button--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    clipPath: BEVEL_BY_SIZE[size] ?? ARMITAGE_BEVEL.sm,
    ...VARIANT_STYLES[variant],
  };

  const content = (
    <>
      <span className="armitage-button__label">{children}</span>
      {showArrow ? (
        <span className="armitage-button__icon" aria-hidden="true">
          <ArmitageArrowIcon size={14} />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} style={style} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
