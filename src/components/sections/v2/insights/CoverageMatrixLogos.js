export const coverageMatrixArt = [
  {
    logoBoxClass:
      "bg-[radial-gradient(ellipse_at_50%_60%,#2a2218_0%,#111008_100%)]",
    Logo: MuscleUpLogo,
  },
  {
    logoBoxClass: "bg-[linear-gradient(135deg,#0a3530_0%,#062820_100%)]",
    Logo: HatchbuckLogo,
  },
  {
    logoBoxClass: "bg-[linear-gradient(160deg,#f0eeeb_0%,#e4e0da_100%)]",
    Logo: AccessPointLogo,
  },
  {
    logoBoxClass: "bg-[linear-gradient(135deg,#fff_0%,#f5f3f0_100%)]",
    Logo: SearchMarketersLogo,
  },
  {
    logoBoxClass: "bg-[linear-gradient(150deg,#f0faf4_0%,#e0f2e8_100%)]",
    Logo: RestoreWellnessLogo,
  },
  {
    logoBoxClass: "bg-[linear-gradient(135deg,#060e1f_0%,#0a1830_100%)]",
    Logo: ZzwGlobalLogo,
  },
];

function MuscleUpLogo() {
  return (
    <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" width="180" height="162" aria-hidden>
      <defs>
        <linearGradient id="cm1chrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0e8d0" />
          <stop offset="25%" stopColor="#a07830" />
          <stop offset="50%" stopColor="#e8c860" />
          <stop offset="75%" stopColor="#6a4810" />
          <stop offset="100%" stopColor="#d4a840" />
        </linearGradient>
        <linearGradient id="cm1chromeB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2010" />
          <stop offset="50%" stopColor="#1a1208" />
          <stop offset="100%" stopColor="#2e2415" />
        </linearGradient>
        <linearGradient id="cm1globe" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#405080" />
          <stop offset="100%" stopColor="#202840" />
        </linearGradient>
        <filter id="cm1glow">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="cm1shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.6" />
        </filter>
      </defs>
      <ellipse cx="100" cy="172" rx="50" ry="6" fill="#000" opacity="0.4" />
      <polygon
        points="100,4 170,43 170,122 100,161 30,122 30,43"
        fill="url(#cm1chromeB)"
        stroke="url(#cm1chrome)"
        strokeWidth="2.5"
        filter="url(#cm1shadow)"
      />
      <polygon points="100,4 170,43 100,43" fill="rgba(255,220,120,0.08)" />
      <polygon points="30,122 170,122 100,161" fill="rgba(0,0,0,0.25)" />
      <polygon
        points="100,16 158,50 158,115 100,149 42,115 42,50"
        fill="none"
        stroke="url(#cm1chrome)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <circle cx="100" cy="82" r="34" fill="url(#cm1globe)" opacity="0.9" />
      <circle cx="100" cy="82" r="34" fill="none" stroke="#c8a840" strokeWidth="1.2" opacity="0.8" />
      <ellipse cx="100" cy="82" rx="15" ry="34" fill="none" stroke="#c8a840" strokeWidth="0.9" opacity="0.6" />
      <ellipse cx="100" cy="82" rx="28" ry="10" fill="none" stroke="#c8a840" strokeWidth="0.9" opacity="0.5" />
      <line x1="66" y1="82" x2="134" y2="82" stroke="#c8a840" strokeWidth="0.9" opacity="0.5" />
      <line x1="70" y1="66" x2="130" y2="66" stroke="#c8a840" strokeWidth="0.7" opacity="0.4" />
      <line x1="70" y1="98" x2="130" y2="98" stroke="#c8a840" strokeWidth="0.7" opacity="0.4" />
      <ellipse cx="88" cy="66" rx="10" ry="6" fill="#fff" opacity="0.06" />
      <circle cx="76" cy="52" r="1.5" fill="#ffe090" filter="url(#cm1glow)" />
      <circle cx="128" cy="48" r="1" fill="#ffe090" />
      <circle cx="148" cy="72" r="1.5" fill="#ffe090" filter="url(#cm1glow)" />
      <text
        x="100"
        y="140"
        fontFamily="Impact,sans-serif"
        fontSize="11"
        fontWeight="900"
        fill="url(#cm1chrome)"
        textAnchor="middle"
        letterSpacing="2.5"
      >
        MUSCLE UP
      </text>
      <text
        x="100"
        y="152"
        fontFamily="Impact,sans-serif"
        fontSize="8"
        fill="#a07830"
        textAnchor="middle"
        letterSpacing="2"
      >
        MARKETING
      </text>
    </svg>
  );
}

function HatchbuckLogo() {
  return (
    <svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg" width="230" height="88" aria-hidden>
      <defs>
        <linearGradient id="cm2a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4de8b0" />
          <stop offset="100%" stopColor="#20b080" />
        </linearGradient>
        <filter id="cm2glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="12" y="12" width="13" height="72" rx="3" fill="url(#cm2a)" />
      <rect x="12" y="46" width="34" height="13" rx="3" fill="url(#cm2a)" />
      <rect x="33" y="32" width="13" height="52" rx="3" fill="url(#cm2a)" />
      <circle cx="18" cy="18" r="5" fill="#80ffcc" opacity="0.3" filter="url(#cm2glow)" />
      <text x="60" y="68" fontFamily="saans,sans-serif" fontSize="40" fontWeight="200" fill="#ffffff" letterSpacing="-1">atchbuck</text>
      <text x="60" y="84" fontFamily="saans,sans-serif" fontSize="9" fontWeight="500" fill="#40c9a2" letterSpacing="2" opacity="0.7">SALES &amp; MARKETING</text>
    </svg>
  );
}

function AccessPointLogo() {
  return (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" width="248" height="88" aria-hidden>
      <defs>
        <linearGradient id="cm3a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a3a8a" />
          <stop offset="100%" stopColor="#0d2060" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="46" r="24" fill="url(#cm3a)" />
      <polygon points="30,24 42,64 18,64" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <line x1="22" y1="54" x2="38" y2="54" stroke="#fff" strokeWidth="2" />
      <text x="64" y="42" fontFamily="Georgia,Times New Roman,serif" fontSize="30" fontWeight="700" fill="#1a1a1a" letterSpacing="-0.5">access</text>
      <line x1="64" y1="50" x2="270" y2="50" stroke="#1a3a8a" strokeWidth="0.8" opacity="0.3" />
      <text x="64" y="68" fontFamily="Georgia,serif" fontSize="18" fontWeight="400" fill="#1a3a8a" letterSpacing="4">POINT</text>
      <text x="138" y="68" fontFamily="Georgia,serif" fontSize="11" fontWeight="300" fill="#666" letterSpacing="0.5">financial inc.</text>
      <circle cx="259" cy="34" r="5" fill="#1a3a8a" />
      <circle cx="259" cy="34" r="9" fill="none" stroke="#1a3a8a" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function SearchMarketersLogo() {
  return (
    <svg viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg" width="265" height="80" aria-hidden>
      <defs>
        <linearGradient id="cm4a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff5520" />
          <stop offset="100%" stopColor="#cc2200" />
        </linearGradient>
        <linearGradient id="cm4b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff7744" />
          <stop offset="100%" stopColor="#cc2200" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="34" r="20" fill="none" stroke="url(#cm4a)" strokeWidth="5" />
      <circle cx="32" cy="34" r="12" fill="none" stroke="url(#cm4b)" strokeWidth="1.5" opacity="0.3" />
      <line x1="22" y1="30" x2="42" y2="30" stroke="url(#cm4a)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="37" x2="40" y2="37" stroke="url(#cm4a)" strokeWidth="2" strokeLinecap="round" />
      <line x1="46" y1="48" x2="60" y2="63" stroke="url(#cm4a)" strokeWidth="5.5" strokeLinecap="round" />
      <text x="74" y="38" fontFamily="saans,sans-serif" fontSize="24" fontWeight="900" fill="url(#cm4a)">search</text>
      <text x="74" y="63" fontFamily="saans,sans-serif" fontSize="24" fontWeight="300" fill="#222">marketers</text>
      <text x="74" y="78" fontFamily="saans,sans-serif" fontSize="10" fontWeight="600" fill="#ff4411" letterSpacing="1">.com</text>
    </svg>
  );
}

function RestoreWellnessLogo() {
  return (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" width="248" height="88" aria-hidden>
      <defs>
        <linearGradient id="cm5a" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1b8a40" />
          <stop offset="100%" stopColor="#5cc870" />
        </linearGradient>
        <linearGradient id="cm5b" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d6030" />
          <stop offset="100%" stopColor="#3aaa50" />
        </linearGradient>
        <filter id="cm5shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1b8a40" floodOpacity="0.2" />
        </filter>
      </defs>
      <path d="M44 82 Q24 48 40 22 Q62 8 68 36 Q72 58 44 82Z" fill="url(#cm5a)" filter="url(#cm5shadow)" />
      <path d="M68 36 Q88 10 100 30 Q104 52 68 36Z" fill="url(#cm5b)" opacity="0.9" />
      <path d="M44 82 Q58 52 68 36" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M52 72 Q60 56 68 36" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <text x="114" y="44" fontFamily="saans,sans-serif" fontSize="24" fontWeight="200" fill="#1b6b38" letterSpacing="-0.5">restore</text>
      <text x="114" y="68" fontFamily="saans,sans-serif" fontSize="24" fontWeight="800" fill="#0d5028" letterSpacing="-1">wellness</text>
      <text x="114" y="83" fontFamily="saans,sans-serif" fontSize="8" fontWeight="600" fill="#5aaa60" letterSpacing="4">H E A L T H</text>
    </svg>
  );
}

function ZzwGlobalLogo() {
  return (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" width="248" height="88" aria-hidden>
      <defs>
        <linearGradient id="cm6a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c8d8f0" />
        </linearGradient>
        <linearGradient id="cm6b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60aaff" />
          <stop offset="50%" stopColor="#1a6acc" />
          <stop offset="100%" stopColor="#0d3a80" />
        </linearGradient>
        <linearGradient id="cm6c" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a0ccff" />
          <stop offset="100%" stopColor="#4488dd" />
        </linearGradient>
        <filter id="cm6glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text x="14" y="74" fontFamily="Impact,Arial Black,sans-serif" fontSize="64" fontWeight="900" fill="url(#cm6a)" letterSpacing="-2">ZZW</text>
      <path d="M226 84 Q214 64 220 42 Q230 20 240 16 Q252 24 258 42 Q264 62 250 76 Q242 88 226 84Z" fill="url(#cm6b)" filter="url(#cm6glow)" />
      <path d="M233 78 Q224 62 228 46 Q235 30 240 26 Q248 34 252 46 Q256 62 246 72 Q240 80 233 78Z" fill="url(#cm6c)" opacity="0.7" />
      <path d="M237 72 Q232 60 235 48 Q239 38 242 36 Q247 42 249 52 Q251 64 244 70 Q240 74 237 72Z" fill="#e8f4ff" opacity="0.5" />
      <ellipse cx="242" cy="52" rx="6" ry="10" fill="#fff" opacity="0.15" filter="url(#cm6glow)" />
      <text x="14" y="90" fontFamily="saans,sans-serif" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.25)" letterSpacing="5">GLOBAL</text>
    </svg>
  );
}
