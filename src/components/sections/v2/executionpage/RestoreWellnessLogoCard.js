const SVG_PREFIX = "rw-exec";

function RestoreWellnessLogoMark() {
  return (
    <svg
      viewBox="0 0 280 110"
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      height="95"
      className="mx-auto block max-w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${SVG_PREFIX}-leaf1`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2e8b30" />
          <stop offset="100%" stopColor="#6abf4b" />
        </linearGradient>
        <linearGradient id={`${SVG_PREFIX}-leaf2`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a6e20" />
          <stop offset="100%" stopColor="#4da035" />
        </linearGradient>
        <linearGradient id={`${SVG_PREFIX}-leaf3`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3aaa45" />
          <stop offset="100%" stopColor="#7acc55" />
        </linearGradient>
        <filter id={`${SVG_PREFIX}-leafshadow`}>
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="1.5"
            floodColor="#1a6e20"
            floodOpacity="0.2"
          />
        </filter>
      </defs>

      <path
        d="M170 88 Q152 52 162 28 Q174 14 184 24 Q196 38 192 62 Q188 80 170 88Z"
        fill={`url(#${SVG_PREFIX}-leaf1)`}
        opacity="0.75"
        filter={`url(#${SVG_PREFIX}-leafshadow)`}
      />
      <path
        d="M182 92 Q168 50 176 22 Q184 6 196 14 Q210 26 206 56 Q202 78 182 92Z"
        fill={`url(#${SVG_PREFIX}-leaf2)`}
        filter={`url(#${SVG_PREFIX}-leafshadow)`}
      />
      <path
        d="M196 82 Q192 52 202 30 Q210 16 222 26 Q232 38 226 62 Q220 78 196 82Z"
        fill={`url(#${SVG_PREFIX}-leaf3)`}
        opacity="0.85"
        filter={`url(#${SVG_PREFIX}-leafshadow)`}
      />
      <path
        d="M182 92 Q184 60 190 36"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M182 80 Q178 68 174 58"
        fill="none"
        stroke="#fff"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M188 74 Q192 64 196 56"
        fill="none"
        stroke="#fff"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.2"
      />

      <text
        x="14"
        y="58"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="32"
        fontWeight="400"
        fill="#2e7d32"
        letterSpacing="-0.5"
      >
        restore
      </text>
      <text
        x="14"
        y="88"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="32"
        fontWeight="700"
        fill="#1b5e20"
        letterSpacing="-0.5"
      >
        wellness
      </text>

      <line x1="14" y1="95" x2="160" y2="95" stroke="#c8e6c9" strokeWidth="0.8" />
      <text
        x="14"
        y="104"
        fontFamily="saans, Inter, sans-serif"
        fontSize="10"
        fontWeight="600"
        fill="#5aaa60"
        letterSpacing="5"
      >
        HEALTH
      </text>
    </svg>
  );
}

export default function RestoreWellnessLogoCard({
  label = "Active delivery view",
}) {
  return (
    <div className="execution-logo-card flex min-h-[16rem] flex-col overflow-hidden rounded-md bg-white shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
      <div className="execution-logo-card__inner flex flex-1 items-center justify-center px-6 py-8">
        <RestoreWellnessLogoMark />
      </div>
      <div className="execution-logo-card__footer border-t border-[#e8ebe8] px-5 py-3.5">
        <span className="font-blender text-[0.625rem] font-bold uppercase tracking-[0.16em] text-[#3c85dd]">
          {label}
        </span>
      </div>
    </div>
  );
}
