import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

function renderLine(line, index) {
  const prefix =
    index > 0 ? (
      <>
        <br />
        <br />
      </>
    ) : null;

  if (typeof line === "string") {
    return (
      <Fragment key={index}>
        {prefix}
        {line}
      </Fragment>
    );
  }

  if (line?.type === "link") {
    return (
      <Fragment key={index}>
        {prefix}
        <span className="text-green-dark duration-500 group-hover/postBody:brightness-75">
          {line.text}
        </span>
      </Fragment>
    );
  }

  return null;
}

export default function FeedPostSlide({ post }) {
  const isExternal = post.href?.startsWith("http");

  const body = (
    <>
      {post.lines?.map((line, index) => renderLine(line, index))}
      {post.image ? (
        <Image
          alt={post.image.alt ?? ""}
          src={post.image.src}
          width={post.image.width ?? 1152}
          height={post.image.height ?? 648}
          className="[&:not(:first-child)]:mt-sm [&:not(:last-child)]:mb-sm h-auto w-full object-cover"
          unoptimized
        />
      ) : null}
      {post.caption ? (
        <div className="text-lg [&:not(:first-child)]:mt-sm [&:not(:last-child)]:mb-sm">
          {post.caption}
        </div>
      ) : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        referrerPolicy="no-referrer"
        rel="nofollow"
        style={{ position: "relative" }}
        target="_blank"
        href={post.href}
        className="flex flex-col gap-sm"
      >
        {post.srText ? <span className="sr-only">{post.srText}</span> : null}
        {body}
      </a>
    );
  }

  return (
    <Link href={post.href} className="flex flex-col gap-sm" style={{ position: "relative" }}>
      {post.srText ? <span className="sr-only">{post.srText}</span> : null}
      {body}
    </Link>
  );
}
