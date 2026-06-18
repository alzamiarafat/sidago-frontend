import { ARMITAGE_BEVEL } from "./brand";

const BADGE_TONES = {
  "green-light": "armitage-badge--green-light",
  neuromancer: "armitage-badge--neuromancer",
};

export default function ArmitageBadge({ children, tone = "green-light" }) {
  return (
    <span
      className={`armitage-badge ${BADGE_TONES[tone] ?? BADGE_TONES["green-light"]}`}
      style={{ clipPath: ARMITAGE_BEVEL.badge }}
    >
      {children}
    </span>
  );
}
