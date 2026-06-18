import Image from "next/image";

export default function ArmitageLogo({ className = "" }) {
  return (
    <Image
      src="/images/armitage-logo.svg"
      alt="Armitage by Sidago"
      width={170}
      height={33}
      priority
      className={`h-[33px] w-auto ${className}`.trim()}
    />
  );
}
