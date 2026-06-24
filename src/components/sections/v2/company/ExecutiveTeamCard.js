"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";

const SOCIAL_BUTTON_CLASS =
  "group/interactive inline-flex items-center justify-center font-medium bevel bevel-[0.25rem] p-[0.625rem] bg-gray-defi-graphite text-gray-off-white hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100";

function ExpandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 41"
      className="absolute right-xs top-xs w-[3.5rem]"
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.405 30.937v-20h1.19v20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M30 21.532H10v-1.19h20z"
        clipRule="evenodd"
      />
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
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M31.51 3.173h5.623l-12.284 14.04L39.3 36.315H27.985L19.123 24.73 8.983 36.316H3.357L16.496 21.3 2.633 3.173h11.602l8.01 10.59zm-1.973 29.778h3.116l-20.11-26.59H9.198z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 41 40"
      className="w-lg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M35.133 3.333H6.8a2.5 2.5 0 0 0-2.5 2.5v28.334a2.5 2.5 0 0 0 2.5 2.5h28.333a2.5 2.5 0 0 0 2.5-2.5V5.833a2.5 2.5 0 0 0-2.5-2.5M14.3 31.667h-5v-15h5zM11.8 13.75a2.916 2.916 0 1 1 3-2.917 2.967 2.967 0 0 1-3 2.917m20.833 17.917h-5v-7.9c0-2.367-1-3.217-2.3-3.217a2.9 2.9 0 0 0-2.7 3.1 1 1 0 0 0 0 .233v7.784h-5v-15h4.834v2.166a5.18 5.18 0 0 1 4.5-2.333c2.583 0 5.6 1.433 5.6 6.1z"
      />
    </svg>
  );
}

function SocialLink({ link }) {
  const Icon = link.type === "x" ? XIcon : LinkedInIcon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      referrerPolicy="no-referrer"
      aria-label={link.label}
      className={SOCIAL_BUTTON_CLASS}
    >
      <span className="sr-only">{link.label}</span>
      <Icon />
    </a>
  );
}

function CardBack({ member }) {
  return (
    <div className="flex h-full flex-col justify-end gap-xl bg-[#A8F5C2] p-xl text-gray-night-green bevel">
      <div className="flex flex-col gap-sm">
        <div className="text-xl xl:text-2xl">{member.name}</div>
        <div className="font-blender text-xs uppercase xl:text-sm">
          {member.role}
        </div>
      </div>
      <div className="text-xs xl:text-sm">
        {member.bio.map((paragraph, index) => (
          <p key={index} className={index > 0 ? "mt-4" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>
      {member.social.length > 0 ? (
        <div className="flex gap-lg">
          {member.social.map((link) => (
            <SocialLink key={link.href} link={link} />
          ))}
        </div>
      ) : (
        <div className="flex gap-lg" />
      )}
    </div>
  );
}

export default function ExecutiveTeamCard({ member }) {
  const reduceMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  const showFlipped = !reduceMotion && flipped;

  if (reduceMotion) {
    return (
      <div className="relative h-full w-full">
        <div className="flex h-full flex-col justify-end gap-sm bg-gray-defi-graphite p-xl bevel">
          <Image
            alt={member.name}
            src={member.image.src}
            width={member.image.width}
            height={member.image.height}
            draggable={false}
            className="absolute left-0 top-0 h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d] via-[#000d] via-10% to-transparent to-50%" />
          <div className="z-10 text-xl lg:text-2xl">{member.name}</div>
          <div className="z-10 font-blender text-xs uppercase lg:text-sm">
            {member.role}
          </div>
        </div>
        <div className="mt-md">
          <CardBack member={member} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flipper relative h-full w-full transition-all ${showFlipped ? "flipper--flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFlipped(false);
        }
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex h-full flex-col justify-end gap-sm bg-gray-defi-graphite p-xl bevel">
        <Image
          alt={member.name}
          src={member.image.src}
          width={member.image.width}
          height={member.image.height}
          draggable={false}
          className="absolute left-0 top-0 h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000d] via-[#000d] via-10% to-transparent to-50%" />
        <ExpandIcon />
        <div className="z-10 text-xl lg:text-2xl">{member.name}</div>
        <div className="z-10 font-blender text-xs uppercase lg:text-sm">
          {member.role}
        </div>
      </div>

      <CardBack member={member} />
    </div>
  );
}
