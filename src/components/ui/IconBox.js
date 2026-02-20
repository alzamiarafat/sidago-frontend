import Link from "next/link";

export default function IconBox({
  icon,
  title,
  description,
  link,
  linkText = "Read More",
  animation,
  animationDelay = 2000,
}) {
  return (
    <div
      className="icon-box icon-box-6 fx"
      data-animate={animation}
      data-animation-delay={animationDelay}
    >
      <div className="box-top">
        <i className={`fa ${icon} selectedI`}></i>
        <p className="h3">{title}</p>
        <p></p>
        <p style={{ textAlign: "center" }}>{description}</p>
        <Link className="more-btn" href={link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}
