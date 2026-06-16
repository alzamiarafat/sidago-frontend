"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function ShareLinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      className="h-xl w-xl"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M35.133 3.333H6.8a2.5 2.5 0 0 0-2.5 2.5v28.334a2.5 2.5 0 0 0 2.5 2.5h28.333a2.5 2.5 0 0 0 2.5-2.5V5.833a2.5 2.5 0 0 0-2.5-2.5M14.3 31.667h-5v-15h5zM11.8 13.75a2.916 2.916 0 1 1 3-2.917 2.967 2.967 0 0 1-3 2.917m20.833 17.917h-5v-7.9c0-2.367-1-3.217-2.3-3.217a2.9 2.9 0 0 0-2.7 3.1 1 1 0 0 0 0 .233v7.784h-5v-15h4.834v2.166a5.18 5.18 0 0 1 4.5-2.333c2.583 0 5.6 1.433 5.6 6.1z"
      />
    </svg>
  );
}

function ShareXIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      className="h-xl w-xl"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M31.51 3.173h5.623l-12.284 14.04L39.3 36.315H27.985L19.123 24.73 8.983 36.316H3.357L16.496 21.3 2.633 3.173h11.602l8.01 10.59zm-1.973 29.778h3.116l-20.11-26.59H9.198z"
      />
    </svg>
  );
}

function ShareTelegramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="h-xl w-xl"
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20m-19.283-5.235q-2.918 1.214-11.664 5.024-1.42.565-1.488 1.105c-.076.609.686.848 1.724 1.175q.212.066.438.139c1.02.332 2.394.72 3.108.735q.972.02 2.17-.8 8.17-5.517 8.436-5.577c.124-.028.297-.063.414.04s.105.301.093.354c-.076.322-3.068 3.104-4.616 4.543-.483.449-.825.767-.895.84-.157.163-.317.317-.47.465-.95.914-1.66 1.6.039 2.72.817.538 1.47.983 2.122 1.427.712.485 1.422.969 2.341 1.571.234.154.458.313.676.468.828.591 1.573 1.122 2.493 1.037.534-.05 1.086-.552 1.366-2.05.663-3.542 1.965-11.217 2.266-14.38a3.5 3.5 0 0 0-.033-.787c-.027-.155-.082-.377-.285-.541-.24-.195-.61-.236-.775-.233-.752.013-1.906.415-7.46 2.725"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SidagoBrand({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-tradfi-steel bg-black p-px">
        <Image
          alt="Sidago"
          width={560}
          height={446}
          unoptimized
          className="h-full w-full object-contain [color:transparent]"
          src="/images/navbar-logo-icon.png"
        />
      </div>
      <p className="font-blender uppercase text-gray-off-white">Sidago</p>
    </div>
  );
}

function CtaArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] w-4 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{ "--arrow-offset": "0.4rem" }}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function renderInlinePart(part, index) {
  if (part.type === "strong") {
    return <strong key={index}>{part.value}</strong>;
  }
  if (part.type === "link") {
    const inner = part.strong ? <strong>{part.value}</strong> : part.value;
    return (
      <Link
        key={index}
        href={part.href}
        className="text-green-dark hover:opacity-80"
        target={part.external ? "_blank" : undefined}
        rel={part.external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </Link>
    );
  }
  return <span key={index}>{part.value}</span>;
}

function ArticleBlock({ block }) {
  switch (block.type) {
    case "heading": {
      const Tag = block.level === 4 ? "h4" : "h2";
      const sizeClass =
        block.level === 4
          ? "text-xl [&:not(:first-child)]:mt-4xl"
          : "text-2xl [&:not(:first-child)]:mt-4xl";
      return (
        <Tag
          id={block.id}
          className={`mb-xl font-normal text-gray-off-white ${sizeClass}`}
        >
          {block.text}
        </Tag>
      );
    }
    case "cta":
      return (
        <div className="flex">
          <Link
            href={block.href}
            target={block.external !== false ? "_blank" : undefined}
            rel={
              block.external !== false ? "noopener noreferrer nofollow" : undefined
            }
            referrerPolicy="no-referrer"
            className="group/interactive inline-flex items-center justify-between gap-md bg-green-dark px-sm py-xs font-medium text-gray-off-white bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100"
          >
            <span className="sr-only">{block.srText || block.label}</span>
            {block.label}
            <CtaArrow />
          </Link>
        </div>
      );
    case "disclaimer":
      return (
        <p className="my-xl text-sm text-gray-tradfi-steel [&_a]:text-green-dark">
          <em>{block.text}</em>
        </p>
      );
    case "paragraph":
    default:
      if (block.parts?.length) {
        return (
          <p className="my-xl text-gray-off-white [&_a]:text-green-dark">
            {block.parts.map(renderInlinePart)}
          </p>
        );
      }
      return (
        <p className="my-xl text-gray-off-white [&_a]:text-green-dark">
          {block.strong ? <strong>{block.strong}</strong> : null}
          {block.text}
        </p>
      );
  }
}

export default function ArticleShareSidebarSection({
  content,
  shareUrl: shareUrlProp,
  className = "bg-[#070B09] text-gray-off-white",
}) {
  const [shareUrl, setShareUrl] = useState(shareUrlProp || "");

  useEffect(() => {
    if (!shareUrlProp && typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, [shareUrlProp]);

  const encodedShareUrl = encodeURIComponent(shareUrl || "");
  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`,
      srText: "Share on LinkedIn",
      icon: ShareLinkedInIcon,
    },
    {
      label: "X",
      href: `https://x.com/intent/post?url=${encodedShareUrl}`,
      srText: "Share on X",
      icon: ShareXIcon,
    },
    {
      label: "Telegram",
      href: `https://telegram.me/share/url?url=${encodedShareUrl}`,
      srText: "Share on Telegram",
      icon: ShareTelegramIcon,
    },
  ];

  const { author, blocks = [] } = content;

  return (
    <section className={className}>
      <div className="container flex flex-col gap-x-container gap-y-4xl py-block lg:flex-row">
        <div
          className="core-column--stacked-on-mobile shrink-0"
          style={{ "--core-column-width": "33.33%" }}
        >
          <div className="sticky top-[calc(var(--header-height)+1.5rem)] flex flex-col gap-2xl lg:max-h-[calc(100svh-var(--header-height)-1.5rem-1.5rem)] lg:overflow-y-auto">
            {author?.useBrandLogo ? (
              <SidagoBrand />
            ) : (
              <div className="flex items-center gap-4">
                <div className="relative h-[2.625rem] w-[2.625rem] shrink-0 overflow-hidden rounded-full">
                  <Image
                    alt={author.name}
                    src={author.imageSrc}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="font-blender uppercase text-gray-off-white">
                  {author.name}
                </p>
              </div>
            )}

            <div className="mt-2xl flex gap-lg">
              {shareLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    referrerPolicy="no-referrer"
                    aria-label={link.label}
                    className="group/interactive inline-flex items-center justify-center bg-gray-defi-graphite p-[0.625rem] font-medium text-gray-off-white bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100"
                  >
                    <span className="sr-only">{link.srText}</span>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <article
          className="post-body-container core-column--stacked-on-mobile min-w-0 text-lg leading-[1.6] text-gray-off-white"
          style={{ "--core-column-width": "66.66%" }}
        >
          <div>
            {blocks.map((block, index) => (
              <ArticleBlock key={index} block={block} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
