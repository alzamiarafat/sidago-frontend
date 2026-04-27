const fallbackHashes = [
  "0x3b8bd16df83aa4919256cc4dc8de916f1bf360eba921a2f708844359f9e36a54",
  "0x485fc2ebc8cb3646008f4fc72cf77562d55fb51dbb4c260d8c438ccadb9d5b32",
  "0x4622b369985bc8fb7eb9b250712148758faa0b40dc67aa140001c63bbd474d11",
];

export function LatestAbout({
  title = "Latest Sidago Tx hash",
  hashes = fallbackHashes,
}) {
  return (
    <section className="bg-gray-defi-shadow">
      <div className="container relative flex justify-between gap-4 overflow-hidden bg-gray-defi-shadow font-blender uppercase text-gray-off-white">
        <div className="z-10 flex max-w-[8rem] items-center text-gray-off-white sm:max-w-full xl:text-2xl">
          {title}
        </div>
        <div className="h-[calc(3rem+4rem)] flex-1 py-2xl lg:h-[calc(5.625rem+4rem)]">
          <div className="ticker__scene h-full">
            {hashes.map((hash, index) => (
              <div
                key={hash}
                className="ticker__coin absolute inset-0 flex items-center justify-end gap-8 duration-500"
                style={{
                  transform: `translateZ(-28.867513459481298px) rotateX(${-2.0943951023931953 * index}rad) translateZ(28.867513459481298px)`,
                }}
              >
                <div className="w-full min-w-[14rem] max-w-[12.9rem] break-words text-left text-sm text-green-dark sm:min-w-[13.7rem] md:min-w-[20.5rem] lg:min-w-[23.4rem] lg:text-base">
                  {hash}
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-defi-shadow from-15% via-transparent via-30%" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-defi-shadow from-15% via-transparent via-30%" />
        </div>
      </div>
    </section>
  );
}
