"use client";

import React from "react";

export default function InsightNews({
  items,
  bgColor = "bg-gray-night-green",
  textColor = "text-gray-off-white",
}) {
  const newsItems = items?.filter((item) => item?.title) || [];

  return (
    <section className={`relative ${bgColor} ${textColor}`}>
      {/* Background split */}
      <div className="absolute inset-0 flex">
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col lg:flex-row">
        {newsItems.map((item, index) => {
          return (
            <React.Fragment key={`${item.title}-${index}`}>
              {index === 0 ? (
                <div
                  className="-mx-[0.0625rem] hidden w-[0.125rem] shrink-0 self-stretch bg-gray-defi-slate lg:my-xl lg:block"
                  aria-hidden
                />
              ) : null}
              <div
                className={`relative flex-1 ${
                  index === 0
                    ? "border-l-[0.125rem] border-solid border-gray-defi-slate pl-sm lg:border-l-0 lg:pl-0"
                    : ""
                }`}
              >
                <div className="flex h-full flex-col gap-sm py-md lg:px-md lg:py-xl">
                  <div className="flex flex-1 items-center gap-xs">
                    <p className="m-0 text-xl lg:text-lg">{item.title}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index !== newsItems.length - 1 && (
                <div className="-mx-[0.0625rem] w-[0.125rem] shrink-0 self-stretch bg-gray-defi-slate lg:my-xl"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
