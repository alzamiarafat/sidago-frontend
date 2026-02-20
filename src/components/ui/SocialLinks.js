import { socialLinks as defaultLinks } from "../../data/socialLinks";

export default function SocialLinks({ links = defaultLinks, className = "" }) {
  return (
    <ul className={`social-list hover_links_effect ${className}`}>
      {links.map((link) => (
        <li key={link.title}>
          <a
            href={link.href}
            data-title={link.title}
            data-tooltip="true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={`fa ${link.icon}`}></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
