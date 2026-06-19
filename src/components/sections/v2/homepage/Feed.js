import FeedPostCarousel from "./FeedPostCarousel";
import FeedPostSlide from "./FeedPostSlide";
import FeedWhatsHappeningCarousel from "./FeedWhatsHappeningCarousel";
import {
  sidagoFeedPosts,
  sidagoFeedProfile,
  sidagoFeedTimestamp,
} from "./feedData";
import { feedWhatsHappeningEvents } from "@/src/components/sections/v2/events/data";
import Image from "next/image";

export default function Feed() {
  const profile = sidagoFeedProfile;

  return (
    <section className="bg-gray-defi-graphite bevel -my-lg">
      <div className="container flex flex-col gap-x-block gap-y-4xl py-block lg:flex-row">
        <div
          className="core-column--stacked-on-mobile overflow-hidden"
          style={{ "--core-column-width": "50%" }}
        >
          <div className="mb-3xl flex flex-col gap-xl font-blender text-xl">
            <div className="flex flex-col gap-xs">
              <h2
                id="@sidago-feed"
                className="font-blender text-xl uppercase text-green-dark"
              >
                @Sidago feed
              </h2>
            </div>
            <hr className="!border-[#AB290D]" />
          </div>
          <section className="bg-gray-defi-graphite text-gray-off-white">
            <div>
              <div className="flex flex-col gap-xs">
                <div className="flex items-center justify-between leading-none">
                  <div className="flex items-center gap-xs">
                    <a
                      referrerPolicy="no-referrer"
                      rel="nofollow"
                      style={{ position: "relative" }}
                      target="_blank"
                      className="shrink-0 hover:brightness-75"
                      href={profile.profileUrl}
                    >
                      <span className="sr-only">{profile.name}</span>
                      <div className="flex h-[2.625rem] w-[2.625rem] shrink-0 items-center justify-center overflow-hidden rounded-full border border-solid border-gray-defi-charcoal bg-black">
                        <Image
                          alt={profile.avatar.alt}
                          src={profile.avatar.src}
                          width={560}
                          height={446}
                          unoptimized
                          className="h-[72%] w-[72%] object-contain"
                        />
                      </div>
                    </a>
                    <div className="flex flex-col flex-wrap gap-x-xs">
                      <a
                        referrerPolicy="no-referrer"
                        rel="nofollow"
                        style={{ position: "relative" }}
                        target="_blank"
                        className="text-xl hover:text-gray-tradfi-silver"
                        href={profile.profileUrl}
                      >
                        <span className="sr-only">{profile.name}</span>
                        {profile.name}
                      </a>
                      <div className="flex items-center gap-xs text-sm">
                        <a
                          referrerPolicy="no-referrer"
                          rel="nofollow"
                          style={{ position: "relative" }}
                          target="_blank"
                          className="text-green-dark hover:brightness-75"
                          href={profile.profileUrl}
                        >
                          <span className="sr-only">{profile.handle}</span>
                          {profile.handle}
                        </a>
                        <div className="h-[0.125rem] w-[0.125rem] rounded-full bg-green-dark" />
                        <a
                          referrerPolicy="no-referrer"
                          rel="nofollow"
                          style={{ position: "relative" }}
                          target="_blank"
                          className="text-green-dark hover:brightness-75"
                          href={profile.followUrl}
                        >
                          <span className="sr-only">Follow Sidago on X</span>
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 41 40"
                    className="relative w-3xl shrink-0"
                    aria-hidden
                  >
                    <path
                      fill="currentColor"
                      d="M31.51 3.173h5.623l-12.284 14.04L39.3 36.315H27.985L19.123 24.73 8.983 36.316H3.357L16.496 21.3 2.633 3.173h11.602l8.01 10.59zm-1.973 29.778h3.116l-20.11-26.59H9.198z"
                    />
                  </svg>
                </div>
                <FeedPostCarousel intervalMs={5000}>
                  {sidagoFeedPosts.map((post) => (
                    <FeedPostSlide key={post.srText + post.href} post={post} />
                  ))}
                </FeedPostCarousel>
                <div className="flex flex-row items-center gap-xs text-sm text-gray-defi-ash">
                  <div className="relative tracking-[-0.03em]">
                    {sidagoFeedTimestamp.time}
                  </div>
                  <div className="h-[0.125rem] w-[0.125rem] rounded-full bg-gray-defi-ash" />
                  <div className="relative tracking-[-0.03em]">
                    {sidagoFeedTimestamp.date}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="core-column--stacked-on-mobile overflow-hidden"
          style={{ "--core-column-width": "50%" }}
        >
          <div className="mb-3xl flex flex-col gap-xl font-blender text-xl">
            <div className="flex flex-col gap-xs">
              <h2
                id="what's-happening"
                className="font-blender text-xl uppercase text-green-dark"
              >
                What&apos;s happening
              </h2>
            </div>
            <hr className="!border-[#AB290D]" />
          </div>
          <FeedWhatsHappeningCarousel items={feedWhatsHappeningEvents} />
        </div>
      </div>
    </section>
  );
}
