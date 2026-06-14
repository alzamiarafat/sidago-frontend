/** Illustration thumbs for Performance Views carousel (dark-section variant). */

export function CapacityThumb() {
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="320" height="180" fill="#1f2621" />
      <line x1="0" y1="45" x2="320" y2="45" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="90" x2="320" y2="90" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="135" x2="320" y2="135" stroke="#323935" strokeWidth="1" />
      <line x1="80" y1="0" x2="80" y2="155" stroke="#2a302c" strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="155" stroke="#2a302c" strokeWidth="1" />
      <line x1="240" y1="0" x2="240" y2="155" stroke="#2a302c" strokeWidth="1" />
      <text x="18" y="26" fontFamily="saans,sans-serif" fontSize="8" fill="#7a807c" letterSpacing="1.5" fontWeight="600">CAPACITY</text>
      <text x="18" y="52" fontFamily="saans,sans-serif" fontSize="9" fill="#9aa09c">Sprints</text>
      <rect x="76" y="42" width="210" height="11" fill="#323935" />
      <rect x="76" y="42" width="183" height="11" fill="#E7512F" opacity="0.85" />
      <text x="295" y="52" fontFamily="saans,sans-serif" fontSize="9" fontWeight="700" fill="#E7512F">87%</text>
      <text x="18" y="80" fontFamily="saans,sans-serif" fontSize="9" fill="#9aa09c">Tickets</text>
      <rect x="76" y="70" width="210" height="11" fill="#323935" />
      <rect x="76" y="70" width="155" height="11" fill="#f4f6f5" opacity="0.7" />
      <text x="295" y="80" fontFamily="saans,sans-serif" fontSize="9" fontWeight="700" fill="#f4f6f5">74%</text>
      <text x="18" y="108" fontFamily="saans,sans-serif" fontSize="9" fill="#9aa09c">Reviews</text>
      <rect x="76" y="98" width="210" height="11" fill="#323935" />
      <rect x="76" y="98" width="124" height="11" fill="#E7512F" opacity="0.45" />
      <text x="295" y="108" fontFamily="saans,sans-serif" fontSize="9" fontWeight="700" fill="#9aa09c">59%</text>
      <text x="18" y="136" fontFamily="saans,sans-serif" fontSize="9" fill="#9aa09c">Deploys</text>
      <rect x="76" y="126" width="210" height="11" fill="#323935" />
      <rect x="76" y="126" width="206" height="11" fill="#f4f6f5" opacity="0.85" />
      <text x="295" y="136" fontFamily="saans,sans-serif" fontSize="9" fontWeight="700" fill="#f4f6f5">98%</text>
    </svg>
  );
}

export function VisibilityThumb() {
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="pv-vis-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E7512F" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E7512F" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="#1f2621" />
      <line x1="0" y1="45" x2="320" y2="45" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="90" x2="320" y2="90" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="135" x2="320" y2="135" stroke="#323935" strokeWidth="1" />
      <line x1="64" y1="0" x2="64" y2="155" stroke="#2a302c" strokeWidth="1" />
      <line x1="128" y1="0" x2="128" y2="155" stroke="#2a302c" strokeWidth="1" />
      <line x1="192" y1="0" x2="192" y2="155" stroke="#2a302c" strokeWidth="1" />
      <line x1="256" y1="0" x2="256" y2="155" stroke="#2a302c" strokeWidth="1" />
      <text x="18" y="26" fontFamily="saans,sans-serif" fontSize="8" fill="#7a807c" letterSpacing="1.5" fontWeight="600">VISIBILITY</text>
      <polygon points="18,148 64,118 110,130 156,88 202,98 248,62 294,70 294,155 18,155" fill="url(#pv-vis-a)" />
      <polyline points="18,148 64,118 110,130 156,88 202,98 248,62 294,70" fill="none" stroke="#E7512F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="248" cy="62" r="4" fill="#E7512F" />
      <rect x="222" y="38" width="56" height="20" rx="2" fill="#171d18" stroke="#323935" strokeWidth="1" />
      <text x="250" y="52" fontFamily="saans,sans-serif" fontSize="12" fontWeight="900" fill="#E7512F" textAnchor="middle">64%</text>
    </svg>
  );
}

export function QualityThumb() {
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="320" height="180" fill="#1f2621" />
      <line x1="0" y1="45" x2="320" y2="45" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="90" x2="320" y2="90" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="135" x2="320" y2="135" stroke="#323935" strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="180" stroke="#2a302c" strokeWidth="1" />
      <text x="18" y="26" fontFamily="saans,sans-serif" fontSize="8" fill="#7a807c" letterSpacing="1.5" fontWeight="600">QUALITY</text>
      <circle cx="95" cy="98" r="52" fill="none" stroke="#323935" strokeWidth="14" />
      <circle cx="95" cy="98" r="52" fill="none" stroke="#f4f6f5" strokeWidth="14" strokeDasharray="299 27" strokeDashoffset="130" />
      <circle cx="95" cy="98" r="52" fill="none" stroke="#E7512F" strokeWidth="14" strokeDasharray="27 299" strokeDashoffset="-169" />
      <text x="95" y="92" fontFamily="saans,sans-serif" fontSize="26" fontWeight="900" fill="#f4f6f5" textAnchor="middle">92%</text>
      <text x="95" y="108" fontFamily="saans,sans-serif" fontSize="8" fill="#9aa09c" textAnchor="middle" letterSpacing="1">quality</text>
      <rect x="183" y="46" width="12" height="12" rx="2" fill="#f4f6f5" />
      <polyline points="185,52 188,55 193,48" fill="none" stroke="#171d18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="56" fontFamily="saans,sans-serif" fontSize="10" fill="#f4f6f5" fontWeight="500">Standards met</text>
      <rect x="183" y="68" width="12" height="12" rx="2" fill="#f4f6f5" />
      <polyline points="185,74 188,77 193,70" fill="none" stroke="#171d18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="78" fontFamily="saans,sans-serif" fontSize="10" fill="#f4f6f5" fontWeight="500">Rework reduced</text>
      <rect x="183" y="90" width="12" height="12" rx="2" fill="#f4f6f5" />
      <polyline points="185,96 188,99 193,92" fill="none" stroke="#171d18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="100" fontFamily="saans,sans-serif" fontSize="10" fill="#f4f6f5" fontWeight="500">Ops measurable</text>
    </svg>
  );
}

export function RhythmThumb() {
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="320" height="180" fill="#1f2621" />
      <line x1="0" y1="45" x2="320" y2="45" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="90" x2="320" y2="90" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="135" x2="320" y2="135" stroke="#323935" strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="180" stroke="#2a302c" strokeWidth="1" />
      <text x="18" y="26" fontFamily="saans,sans-serif" fontSize="8" fill="#7a807c" letterSpacing="1.5" fontWeight="600">RHYTHM</text>
      <circle cx="120" cy="95" r="60" fill="none" stroke="#323935" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="120" cy="95" r="42" fill="none" stroke="#323935" strokeWidth="1" strokeDasharray="3 5" />
      <circle cx="120" cy="95" r="22" fill="none" stroke="#3d4541" strokeWidth="1" />
      <circle cx="120" cy="95" r="14" fill="#f4f6f5" />
      <text x="120" y="100" fontFamily="saans,sans-serif" fontSize="10" fontWeight="900" fill="#171d18" textAnchor="middle">S</text>
      <circle cx="120" cy="35" r="9" fill="#171d18" stroke="#323935" strokeWidth="1.5" />
      <text x="120" y="39" fontFamily="saans,sans-serif" fontSize="7" fontWeight="700" fill="#E7512F" textAnchor="middle">R</text>
      <circle cx="180" cy="95" r="9" fill="#171d18" stroke="#323935" strokeWidth="1.5" />
      <text x="180" y="99" fontFamily="saans,sans-serif" fontSize="7" fontWeight="700" fill="#E7512F" textAnchor="middle">A</text>
      <circle cx="60" cy="95" r="9" fill="#171d18" stroke="#323935" strokeWidth="1.5" />
      <text x="60" y="99" fontFamily="saans,sans-serif" fontSize="7" fontWeight="700" fill="#f4f6f5" textAnchor="middle">T</text>
      <circle cx="120" cy="155" r="9" fill="#171d18" stroke="#323935" strokeWidth="1.5" />
      <text x="120" y="159" fontFamily="saans,sans-serif" fontSize="7" fontWeight="700" fill="#f4f6f5" textAnchor="middle">M</text>
      <rect x="210" y="54" width="6" height="6" rx="1" fill="#E7512F" />
      <text x="222" y="61" fontFamily="saans,sans-serif" fontSize="10" fill="#9aa09c">Reviews</text>
      <rect x="210" y="72" width="6" height="6" rx="1" fill="#E7512F" />
      <text x="222" y="79" fontFamily="saans,sans-serif" fontSize="10" fill="#9aa09c">Actions</text>
      <rect x="210" y="90" width="6" height="6" rx="1" fill="#f4f6f5" />
      <text x="222" y="97" fontFamily="saans,sans-serif" fontSize="10" fill="#9aa09c">Teams</text>
      <rect x="210" y="108" width="6" height="6" rx="1" fill="#f4f6f5" />
      <text x="222" y="115" fontFamily="saans,sans-serif" fontSize="10" fill="#9aa09c">Metrics</text>
    </svg>
  );
}

export function InsightThumb() {
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="320" height="180" fill="#1f2621" />
      <line x1="0" y1="45" x2="320" y2="45" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="90" x2="320" y2="90" stroke="#323935" strokeWidth="1" />
      <line x1="0" y1="135" x2="320" y2="135" stroke="#323935" strokeWidth="1" />
      <line x1="64" y1="0" x2="64" y2="155" stroke="#2a302c" strokeWidth="1" />
      <line x1="128" y1="0" x2="128" y2="155" stroke="#2a302c" strokeWidth="1" />
      <line x1="192" y1="0" x2="192" y2="155" stroke="#2a302c" strokeWidth="1" />
      <line x1="256" y1="0" x2="256" y2="155" stroke="#2a302c" strokeWidth="1" />
      <text x="18" y="26" fontFamily="saans,sans-serif" fontSize="8" fill="#7a807c" letterSpacing="1.5" fontWeight="600">INSIGHT</text>
      <rect x="28" y="110" width="22" height="40" fill="#323935" />
      <rect x="28" y="80" width="22" height="40" fill="#E7512F" opacity="0.7" />
      <rect x="60" y="90" width="22" height="60" fill="#323935" />
      <rect x="60" y="60" width="22" height="60" fill="#f4f6f5" opacity="0.6" />
      <rect x="92" y="100" width="22" height="50" fill="#323935" />
      <rect x="92" y="55" width="22" height="50" fill="#E7512F" opacity="0.5" />
      <rect x="124" y="95" width="22" height="55" fill="#323935" />
      <rect x="124" y="45" width="22" height="55" fill="#f4f6f5" opacity="0.75" />
      <rect x="156" y="105" width="22" height="45" fill="#323935" />
      <rect x="156" y="70" width="22" height="45" fill="#E7512F" opacity="0.85" />
      <line x1="18" y1="150" x2="300" y2="150" stroke="#3d4541" strokeWidth="1" />
      <rect x="200" y="44" width="88" height="56" rx="2" fill="#171d18" stroke="#323935" strokeWidth="1" />
      <text x="244" y="68" fontFamily="saans,sans-serif" fontSize="22" fontWeight="900" fill="#f4f6f5" textAnchor="middle">+41%</text>
      <text x="244" y="84" fontFamily="saans,sans-serif" fontSize="8" fill="#9aa09c" textAnchor="middle">insight gain</text>
    </svg>
  );
}

const THUMBS = {
  capacity: CapacityThumb,
  visibility: VisibilityThumb,
  quality: QualityThumb,
  rhythm: RhythmThumb,
  insight: InsightThumb,
};

export function PerformanceViewThumb({ visual = "capacity" }) {
  const Thumb = THUMBS[visual] ?? CapacityThumb;
  return <Thumb />;
}
