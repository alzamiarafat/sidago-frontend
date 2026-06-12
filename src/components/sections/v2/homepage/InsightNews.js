"use client";

import Link from "next/link";
import React from "react";
import LinkTitleWithArrow from "@/src/components/sections/v2/common/LinkTitleWithArrow";

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
      <div className="container relative z-10 w-full">
        <div className="flex w-full flex-col lg:flex-row">
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
              className="group/interactive flex min-w-0 flex-1 basis-0"
            >
              <span className="sr-only">{item.srText}</span>

              <div className="flex h-full w-full items-center px-md py-md lg:px-md lg:py-xl">
                <LinkTitleWithArrow
                  title={item.title}
                  textClassName="text-xl font-medium leading-snug lg:text-lg group-hover/interactive:opacity-80 group-active/interactive:opacity-80 group-active/interactive:lg:opacity-100"
                  arrowClassName="text-green-dark"
                  alignClassName="w-full justify-between"
                  textWrapperClassName={
                    index === 2
                      ? "max-w-[10.75rem] sm:max-w-[11.5rem] lg:max-w-[12rem]"
                      : ""
                  }
                />
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
      </div>
    </section>
  );
}