"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { reportContentsContent } from "@/src/components/sections/v2/digital-support-services/data";

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

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
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

function ArticleParagraph({ paragraph }) {
  if (paragraph.variant === "quote") {
    return (
      <p className="my-xl text-center text-black [&_a]:text-green-tradfi">
        <em>
          <strong>&ldquo;{paragraph.text}&rdquo;</strong>
        </em>
      </p>
    );
  }

  if (paragraph.parts?.length) {
    return (
      <p className="my-xl text-black [&_a]:text-green-tradfi">
        {paragraph.parts.map((part, index) =>
          part.type === "strong" ? (
            <strong key={index}>{part.value}</strong>
          ) : (
            <span key={index}>{part.value}</span>
          ),
        )}
      </p>
    );
  }

  return (
    <p className="my-xl text-black [&_a]:text-green-tradfi">
      {paragraph.strong ? <strong>{paragraph.strong}</strong> : null}
      {paragraph.text}
    </p>
  );
}

function ArticleImage({ image }) {
  const dialogRef = useRef(null);

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  if (!image?.src) {
    return null;
  }

  return (
    <div className="my-4xl flex flex-col gap-md">
      <button type="button" onClick={openDialog} className="text-left">
        <Image
          alt={image.alt || ""}
          src={image.src}
          width={1152}
          height={1152}
          className="bevel w-full"
        />
      </button>
      <dialog
        ref={dialogRef}
        className="container fixed flex flex-col gap-xl bg-transparent opacity-0 transition-all backdrop:bg-gray-night-green backdrop:opacity-50 open:opacity-100"
        onCancel={closeDialog}
      >
        <Image
          alt={image.alt || ""}
          src={image.src}
          width={1152}
          height={1152}
          className="bevel w-full"
        />
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Close image"
            onClick={closeDialog}
            className="group/interactive inline-flex items-center justify-between gap-md bg-green-dark p-[0.625rem] font-medium text-gray-night-green bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
              className="h-lg w-lg"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="m10.667 30.513-1.18-1.18L18.82 20l-9.333-9.333 1.18-1.18L20 18.82l9.333-9.333 1.18 1.18L21.18 20l9.333 9.333-1.18 1.18L20 21.18z"
              />
            </svg>
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default function ReportContentsSection({
  content = reportContentsContent,
  shareUrl: shareUrlProp,
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

  const { tableOfContents, mainSection, ctaSection, disclaimers } = content;
  const blocks = mainSection.blocks;

  return (
    <section className="bg-[#FAFAFA] text-black">
      <div className="container flex flex-col gap-x-container gap-y-4xl py-block lg:flex-row">
        <div
          className="core-column--stacked-on-mobile"
          style={{ "--core-column-width": "33.33%" }}
        >
          <div className="sticky top-[calc(var(--header-height)+1.5rem)] lg:max-h-[calc(100svh-var(--header-height)-1.5rem-1.5rem)]">
            <div className="mb-3xl flex flex-col gap-xl">
              <div className="flex flex-col gap-xs">
                <h2
                  id="contents"
                  className="font-blender text-xl uppercase text-black"
                >
                  Contents
                </h2>
              </div>
              <hr className="border-gray-tradfi-steel" />
            </div>

            <nav className="flex flex-col gap-xs" aria-label="Article contents">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{ position: "relative" }}
                  className="block text-black hover:opacity-80"
                >
                  <span className="sr-only">{item.srText || item.label}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-2xl flex gap-lg">
              {shareLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    referrerPolicy="no-referrer"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    aria-label={link.label}
                    href={link.href}
                    className="group/interactive inline-flex items-center justify-between gap-md bg-gray-tradfi-silver p-[0.625rem] font-medium text-black bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 disabled:opacity-50"
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
          className="post-body-container core-column--stacked-on-mobile text-lg leading-[1.6] text-black"
          style={{ "--core-column-width": "66.66%" }}
        >
          <div>
            <h2
              id={mainSection.id}
              className="mb-xl text-3xl text-black [&:not(:first-child)]:mt-4xl"
            >
              {mainSection.title}
            </h2>

            {blocks?.length
              ? blocks.map((block, index) => {
                  if (block.type === "image") {
                    return <ArticleImage key={index} image={block} />;
                  }
                  if (block.type === "paragraph") {
                    return (
                      <ArticleParagraph key={index} paragraph={block} />
                    );
                  }
                  return null;
                })
              : null}

            {!blocks?.length &&
              mainSection.paragraphs?.map((paragraph, index) => (
                <ArticleParagraph key={index} paragraph={paragraph} />
              ))}

            {!blocks?.length ? <ArticleImage image={mainSection.image} /> : null}

            {ctaSection ? (
              <>
                <h2
                  id={ctaSection.id}
                  className="mb-xl text-3xl text-black [&:not(:first-child)]:mt-4xl"
                >
                  {ctaSection.title}
                </h2>

                <div className="flex">
                  <Link
                    href={ctaSection.href}
                    className="group/interactive inline-flex items-center justify-between gap-md bg-green-tradfi px-sm py-xs font-medium text-gray-night-green bevel bevel-[0.25rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 disabled:opacity-50"
                  >
                    <span className="sr-only">{ctaSection.srText}</span>
                    {ctaSection.label}
                    <ArrowIcon />
                  </Link>
                </div>
              </>
            ) : null}

            <div className="pt-block">
              {disclaimers?.map((item, index) => (
                <p
                  key={index}
                  className="my-xl text-sm text-gray-tradfi-steel [&_a]:text-green-tradfi"
                >
                  {item.strong ? <strong>{item.strong}</strong> : null}
                  {item.text}
                  {item.href ? (
                    <Link href={item.href} className="text-green-tradfi">
                      {item.linkLabel}
                    </Link>
                  ) : null}
                  {item.textAfter}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
