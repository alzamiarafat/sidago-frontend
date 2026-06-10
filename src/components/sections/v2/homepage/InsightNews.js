"use client";

import Link from "next/link";
import React from "react";

function isInternalHref(href) {
  return href?.startsWith("/") && !href.startsWith("//");
}

export default function InsightNews({
  items,
  bgColor = "bg-gray-night-green",
  textColor = "text-gray-off-white",
}) {
  return (
    <section className={`relative ${bgColor} ${textColor}`}>
      {/* Background split */}
      <div className="absolute inset-0 flex">
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:container">
        {items?.map((item, index) => {
          const internal = isInternalHref(item.href);
          const LinkTag = internal ? Link : "a";
          const linkProps = internal
            ? { href: item.href }
            : {
                href: item.href,
                referrerPolicy: "no-referrer",
                rel: "nofollow",
                target: "_blank",
              };

          return (
          <React.Fragment key={index}>
            {/* Card */}
            <LinkTag
              {...linkProps}
              style={{ position: "relative" }}
              className="group/interactive flex-1"
            >
              <span className="sr-only">{item.srText}</span>

              <div className="flex h-full flex-col gap-sm py-md lg:px-md lg:py-xl">
                <div className="flex flex-1 items-center justify-between gap-xs">
                  <div className="min-w-0 flex-1 pr-xs text-xl leading-snug lg:text-lg group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100">
                    {item.title}
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40"
                    className="ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] lg:hidden text-green-dark"
                    style={{
                      "--arrow-offset": "1rem",
                      width: "2.5rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40"
                    className="ml-[--arrow-offset] hidden shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset] lg:inline text-green-dark"
                    style={{
                      "--arrow-offset": "0.6rem",
                      width: "1.5rem",
                    }}
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </LinkTag>

            {/* Divider */}
            {index !== items.length - 1 && (
              <div className="-mx-[0.0625rem] w-[0.125rem] lg:my-xl bg-gray-defi-slate"></div>
            )}
          </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}