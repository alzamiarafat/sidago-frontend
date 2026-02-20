import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-block font-bold uppercase transition-all duration-300 text-center";

  const variants = {
    primary:
      "bg-[#e7512f] text-white hover:bg-[#da4422] shadow-[0_5px_0_#d23c1a]",
    rounded: "bg-[#e7512f] text-white hover:bg-[#da4422] rounded-full",
    outline:
      "border border-[#e5e5e5] bg-white text-[#999] hover:border-[#bbb] hover:text-[#e7512f] hover:shadow-md rounded-[5px]",
    main: "bg-[#e7512f] text-white hover:bg-[#da4422]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3 text-sm",
    xl: "px-10 py-4 text-base",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {icon && <i className={`fa ${icon} mr-2`}></i>}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {icon && <i className={`fa ${icon} mr-2`}></i>}
      {children}
    </button>
  );
}
