/* eslint-disable @next/next/no-img-element */

const LOGO_SRC = "/images/navbar-logo-icon.png";

function SidagoLogoMark({ className = "" }) {
  return (
    <img
      alt=""
      src={LOGO_SRC}
      width={560}
      height={446}
      decoding="async"
      className={`brand-logo-carousel__mark ${className}`}
    />
  );
}

function SidagoWordmark({ size = "md", tone = "dark" }) {
  const sizes = {
    sm: "brand-logo-carousel__wordmark--sm",
    md: "brand-logo-carousel__wordmark--md",
    lg: "brand-logo-carousel__wordmark--lg",
  };

  const tones = {
    dark: "",
    light: "brand-logo-carousel__wordmark--light",
    brand: "brand-logo-carousel__wordmark--brand",
    muted: "brand-logo-carousel__wordmark--muted",
  };

  return (
    <div
      className={`brand-logo-carousel__wordmark ${sizes[size] ?? sizes.md} ${
        tones[tone] ?? tones.dark
      }`}
    >
      <span>SIDAGO</span>
    </div>
  );
}

function AccentPattern() {
  const squares = [
    [148, 8, 1],
    [176, 8, 0.88],
    [204, 8, 0.72],
    [232, 8, 0.52],
    [120, 36, 0.82],
    [148, 36, 1],
    [176, 36, 0.94],
    [204, 36, 0.78],
    [232, 36, 0.58],
    [92, 64, 0.62],
    [120, 64, 0.88],
    [148, 64, 1],
    [176, 64, 0.9],
    [204, 64, 0.72],
    [232, 64, 0.48],
    [64, 92, 0.42],
    [92, 92, 0.68],
    [120, 92, 0.9],
    [148, 92, 0.96],
    [176, 92, 0.8],
    [204, 92, 0.55],
    [36, 120, 0.24],
    [64, 120, 0.48],
    [92, 120, 0.66],
    [120, 120, 0.82],
    [148, 120, 0.74],
    [176, 120, 0.46],
    [8, 148, 0.12],
    [36, 148, 0.3],
    [64, 148, 0.44],
    [92, 148, 0.56],
    [120, 148, 0.62],
  ];

  return (
    <svg
      className="brand-logo-carousel__accent"
      viewBox="0 0 260 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="accent-fade" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E7512F" stopOpacity="0.08" />
          <stop offset="45%" stopColor="#E7512F" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E7512F" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g fill="url(#accent-fade)">
        {squares.map(([x, y, opacity]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="20"
            height="20"
            rx="3.5"
            opacity={opacity}
          />
        ))}
      </g>
    </svg>
  );
}

function ClearSpaceGuides() {
  return (
    <div className="brand-logo-carousel__guides" aria-hidden>
      <span className="brand-logo-carousel__guide brand-logo-carousel__guide--tl" />
      <span className="brand-logo-carousel__guide brand-logo-carousel__guide--tr" />
      <span className="brand-logo-carousel__guide brand-logo-carousel__guide--bl" />
      <span className="brand-logo-carousel__guide brand-logo-carousel__guide--br" />
    </div>
  );
}

function HorizontalLockup() {
  return (
    <div className="brand-logo-carousel__lockup brand-logo-carousel__lockup--horizontal">
      <SidagoLogoMark />
      <SidagoWordmark size="lg" />
    </div>
  );
}

function VerticalLockup() {
  return (
    <div className="brand-logo-carousel__lockup brand-logo-carousel__lockup--vertical">
      <SidagoLogoMark className="brand-logo-carousel__mark--vertical" />
      <SidagoWordmark size="md" />
    </div>
  );
}

function SymbolLockup() {
  return (
    <div className="brand-logo-carousel__lockup brand-logo-carousel__lockup--symbol">
      <ClearSpaceGuides />
      <div className="brand-logo-carousel__symbol-core">
        <SidagoLogoMark className="brand-logo-carousel__mark--symbol" />
      </div>
    </div>
  );
}

function ColorWordmark({ tone = "brand" }) {
  return (
    <div className={`brand-logo-carousel__color-wordmark brand-logo-carousel__color-wordmark--${tone}`}>
      <span>SIDAGO</span>
    </div>
  );
}

function ColorCell({ label, tone, wordmarkTone = "brand", markClassName = "" }) {
  return (
    <div className={`brand-logo-carousel__color-tile brand-logo-carousel__color-tile--${tone}`}>
      <span className="brand-logo-carousel__color-tag">{label}</span>
      <div className="brand-logo-carousel__color-lockup">
        <SidagoLogoMark
          className={`brand-logo-carousel__mark--color-cell ${markClassName}`.trim()}
        />
        <ColorWordmark tone={wordmarkTone} />
      </div>
    </div>
  );
}

function ColorLockup() {
  return (
    <div className="brand-logo-carousel__color-board">
      <ColorCell label="A" tone="night" wordmarkTone="on-night" />
      <ColorCell label="B" tone="light" wordmarkTone="on-light" />
      <ColorCell label="C" tone="black" wordmarkTone="light" markClassName="brand-logo-carousel__mark--mono" />
      <ColorCell label="D" tone="gray" wordmarkTone="dark" markClassName="brand-logo-carousel__mark--dark" />
    </div>
  );
}

const PREVIEWS = {
  horizontal: HorizontalLockup,
  vertical: VerticalLockup,
  symbol: SymbolLockup,
  color: ColorLockup,
};

export default function BrandLogoPreview({ variant }) {
  const Preview = PREVIEWS[variant] ?? HorizontalLockup;

  if (variant === "color") {
    return (
      <div className="brand-logo-carousel__card-visual brand-logo-carousel__card-visual--color bevel">
        <Preview />
      </div>
    );
  }

  return (
    <div
      className={`brand-logo-carousel__card-visual bevel brand-logo-carousel__card-visual--${variant}`}
    >
      <div className="brand-logo-carousel__card-surface" />
      <div className="brand-logo-carousel__card-glow" aria-hidden />
      <AccentPattern />
      <div className="brand-logo-carousel__card-stage">
        <Preview />
      </div>
    </div>
  );
}
