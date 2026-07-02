"use client";

import { useGlobal } from "@/src/hooks/useGlobal";
import {
  getFooterPolicyLinksClass,
  getFooterTextAlignClass,
  resolveFooter,
} from "@/src/lib/footer-config";

function YoutubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      className="w-lg"
    >
      <path
        fill="currentColor"
        d="M40.568 12s-.39-2.758-1.593-3.969c-1.524-1.593-3.227-1.601-4.008-1.695-5.594-.406-13.992-.406-13.992-.406h-.016s-8.399 0-13.992.406c-.782.094-2.485.102-4.008 1.695-1.203 1.211-1.586 3.97-1.586 3.97s-.406 3.241-.406 6.476v3.03c0 3.235.398 6.477.398 6.477s.39 2.758 1.586 3.97c1.523 1.593 3.524 1.538 4.414 1.71 3.203.305 13.602.399 13.602.399s8.406-.016 14-.414c.78-.094 2.484-.102 4.008-1.696 1.203-1.21 1.593-3.968 1.593-3.968s.399-3.235.399-6.477v-3.031c0-3.235-.399-6.477-.399-6.477M16.834 25.188V13.945l10.805 5.641z"
      ></path>
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      className="w-lg"
    >
      <path
        fill="currentColor"
        d="M31.51 3.173h5.623l-12.284 14.04L39.3 36.315H27.985L19.123 24.73 8.983 36.316H3.357L16.496 21.3 2.633 3.173h11.602l8.01 10.59zm-1.973 29.778h3.116l-20.11-26.59H9.198z"
      ></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      className="w-lg"
    >
      <path
        fill="currentColor"
        d="M35.133 3.333H6.8a2.5 2.5 0 0 0-2.5 2.5v28.334a2.5 2.5 0 0 0 2.5 2.5h28.333a2.5 2.5 0 0 0 2.5-2.5V5.833a2.5 2.5 0 0 0-2.5-2.5M14.3 31.667h-5v-15h5zM11.8 13.75a2.916 2.916 0 1 1 3-2.917 2.967 2.967 0 0 1-3 2.917m20.833 17.917h-5v-7.9c0-2.367-1-3.217-2.3-3.217a2.9 2.9 0 0 0-2.7 3.1 1 1 0 0 0 0 .233v7.784h-5v-15h4.834v2.166a5.18 5.18 0 0 1 4.5-2.333c2.583 0 5.6 1.433 5.6 6.1z"
      ></path>
    </svg>
  );
}

function FooterSocialIcon({ platform }) {
  if (platform === "youtube") {
    return <YoutubeIcon />;
  }

  if (platform === "x") {
    return <XIcon />;
  }

  if (platform === "linkedin") {
    return <LinkedinIcon />;
  }

  return null;
}

function FooterLegalLine({ text, className = "" }) {
  const emailMatch = text.match(/^Email:\s*(.+)$/i);

  if (emailMatch) {
    const email = emailMatch[1].trim();

    return (
      <p className={className}>
        Email:{" "}
        <a
          href={`mailto:${email}`}
          className="transition-colors hover:text-gray-tradfi-silver"
        >
          {email}
        </a>
      </p>
    );
  }

  return <p className={className}>{text}</p>;
}

function splitLegalBlocks(legalBlocks) {
  const contactLines = [];
  let copyrightLine = null;

  for (const block of legalBlocks) {
    const text = block?.text?.trim();

    if (!text) {
      continue;
    }

    if (text.startsWith("©") || /copyright/i.test(text)) {
      copyrightLine = block;
      continue;
    }

    contactLines.push(block);
  }

  return { contactLines, copyrightLine };
}

export default function Footer({ footer }) {
  const settings = useGlobal();
  const {
    navLinks,
    socialLinks,
    legalBlocks,
    policyLinks,
    contactAlign,
    copyrightAlign,
    policyLinksAlign,
  } = resolveFooter(footer || settings?.footer);
  const { contactLines, copyrightLine } = splitLegalBlocks(legalBlocks);
  const legalTextClass =
    "text-sm leading-relaxed text-gray-off-white lg:text-xs";
  const contactAlignClass = getFooterTextAlignClass(contactAlign);
  const copyrightAlignClass = getFooterTextAlignClass(copyrightAlign);
  const policyLinksAlignClass = getFooterPolicyLinksClass(policyLinksAlign);

  return (
    <footer className="flex flex-1 flex-col justify-end bg-gray-defi-shadow">
      <div className="container flex flex-col gap-2xl py-block lg:gap-[3rem]">
        <div className="flex justify-between text-gray-off-white">
          <div className="flex flex-wrap gap-x-[4.875rem] gap-y-[3rem] font-blender text-xl uppercase lg:gap-x-[6rem] lg:text-sm">
            {navLinks.map((link, index) => (
              <a
                key={`${link.label}-${index}`}
                className="relative transition-colors hover:text-gray-tradfi-silver"
                href={link.href}
              >
                <span className="sr-only">{link.srLabel}</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden gap-2xl lg:flex">
            {socialLinks.map((link, index) => (
              <a
                key={`${link.label}-${index}`}
                className="relative transition-colors hover:text-gray-tradfi-silver"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.label}</span>
                <FooterSocialIcon platform={link.platform} />
              </a>
            ))}
          </div>
        </div>

        <hr className="my-0 border-gray-defi-ash" />

        <div
          className={`flex w-full flex-col gap-2 ${contactAlignClass}`}
        >
          {contactLines.map((block, index) => (
            <FooterLegalLine
              key={`${block.sortOrder ?? index}-${block.text}`}
              text={block.text}
              className={legalTextClass}
            />
          ))}
        </div>

        {copyrightLine ? (
          <FooterLegalLine
            text={copyrightLine.text}
            className={`w-full text-xs text-gray-defi-ash lg:text-xs ${copyrightAlignClass}`}
          />
        ) : null}

        <div
          className={`flex flex-wrap gap-x-2xl gap-y-2 text-sm text-gray-off-white lg:text-xs ${policyLinksAlignClass}`}
        >
          {policyLinks.map((link, index) => (
            <a
              key={`${link.label}-${index}`}
              className="relative transition-colors hover:text-gray-tradfi-silver"
              href={link.href}
            >
              <span className="sr-only">{link.srLabel}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
