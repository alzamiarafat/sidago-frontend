"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import BevelNavButton, {
  BEVEL_NAV_BUTTON_CLASS,
} from "@/src/components/sections/v2/common/BevelNavButton";

const ARROW_PATH =
  "M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z";

const DIALOG_NAV_CLASS = `${BEVEL_NAV_BUTTON_CLASS} bg-green-dark text-gray-night-green`;
const GREEN_DARK = "#006623";
const AUTOPLAY_MS = 4000;

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className="ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
      style={{ "--arrow-offset": "1rem", width: "2.5rem" }}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d={ARROW_PATH}
        clipRule="evenodd"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
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
  );
}

function ImageStack({ images, activeIndex, className = "" }) {
  return images.map((image, index) => (
    <Image
      key={image.src}
      alt=""
      src={image.src}
      width={image.width}
      height={image.height}
      draggable={false}
      className={`absolute h-full w-full object-cover transition-all duration-500 ${className}`}
      style={{ opacity: index === activeIndex ? 1 : 0 }}
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  ));
}

function CareersLinkRow({ link, showDivider }) {
  const content = (
    <>
      <span className="sr-only">{link.srText}</span>
      <div className="flex items-center justify-between gap-xs">
        <div className="text-2xl text-[#00F554]">{link.title}</div>
        <ArrowIcon />
      </div>
      <div>{link.description}</div>
    </>
  );

  return (
    <>
      {showDivider ? (
        <div className="-my-[0.0625rem] h-[0.125rem] bg-gray-defi-slate" />
      ) : null}
      {link.external ? (
        <a
          href={link.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          referrerPolicy="no-referrer"
          className="group/interactive flex flex-col gap-xs pb-md lg:gap-md"
        >
          {content}
        </a>
      ) : (
        <Link
          href={link.href}
          className="group/interactive flex flex-col gap-xs pb-md lg:gap-md"
        >
          {content}
        </Link>
      )}
    </>
  );
}

function CareersGallery({
  images,
  activeIndex,
  onActiveIndexChange,
  onOpenDialog,
  onHoverChange,
}) {
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const nextIndex = Math.min(
      Math.max(Math.floor(ratio * images.length), 0),
      images.length - 1,
    );
    onActiveIndexChange(nextIndex);
  };

  return (
    <div
      className="relative aspect-square flex-1 bevel lg:aspect-[1.2] xl:aspect-[1.6]"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onMouseMove={handleMouseMove}
    >
      <ImageStack images={images} activeIndex={activeIndex} />
      <button
        type="button"
        onClick={onOpenDialog}
        className="absolute z-10 h-full w-full bg-green-light opacity-0 transition-all hover:opacity-30"
        aria-label="Open culture gallery"
      />
    </div>
  );
}

export default function CompanyExploreCareersSection({
  title,
  headingId = "explore-sidago-careers",
  images,
  links,
}) {
  if (!title || !images?.length || !links?.length) {
    return null;
  }

  const dialogRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const total = images.length;

  const goToIndex = useCallback(
    (index) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const onToggle = () => {
      setIsDialogOpen(dialog.open);
      document.body.style.overflow = dialog.open ? "hidden" : "";
    };

    dialog.addEventListener("toggle", onToggle);
    return () => {
      dialog.removeEventListener("toggle", onToggle);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (total <= 1 || isHovered || isDialogOpen) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [total, isHovered, isDialogOpen]);

  if (!total) {
    return null;
  }

  return (
    <section className="bg-gray-defi-charcoal">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id={headingId}
              className="font-blender text-xl uppercase text-[#00F554]"
            >
              {title}
            </h2>
          </div>
          <hr className="border-[#006623]" />
        </div>

        <section className="bg-gray-defi-charcoal text-gray-off-white">
          <div className="flex flex-col gap-3xl lg:flex-row lg:gap-2xl">
            <CareersGallery
              images={images}
              activeIndex={activeIndex}
              onActiveIndexChange={setActiveIndex}
              onOpenDialog={openDialog}
              onHoverChange={setIsHovered}
            />

            <dialog
              ref={dialogRef}
              className="container fixed flex max-h-[100dvh] w-full max-w-none flex-col gap-xl overflow-y-auto border-0 bg-transparent p-block opacity-0 transition-all backdrop:bg-gray-night-green backdrop:opacity-50 open:opacity-100"
              onCancel={closeDialog}
              onClick={(event) => {
                if (event.target === dialogRef.current) {
                  closeDialog();
                }
              }}
            >
              <div
                className="relative aspect-video w-full overflow-hidden bevel"
                onClick={(event) => event.stopPropagation()}
              >
                <ImageStack images={images} activeIndex={activeIndex} />
              </div>
              <div
                className="flex justify-between"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex justify-between gap-3xl lg:items-center">
                  <div className="flex gap-md">
                    <BevelNavButton
                      direction="left"
                      ariaLabel="Previous image"
                      bgColor={GREEN_DARK}
                      onClick={() => goToIndex(activeIndex - 1)}
                      className={DIALOG_NAV_CLASS}
                    />
                    <BevelNavButton
                      direction="right"
                      ariaLabel="Next image"
                      bgColor={GREEN_DARK}
                      onClick={() => goToIndex(activeIndex + 1)}
                      className={DIALOG_NAV_CLASS}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={closeDialog}
                  className={DIALOG_NAV_CLASS}
                >
                  <CloseIcon />
                </button>
              </div>
            </dialog>

            <div className="flex flex-1 flex-col justify-center gap-md">
              {links.map((link, index) => (
                <CareersLinkRow
                  key={link.href}
                  link={link}
                  showDivider={index > 0}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
