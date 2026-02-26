export default function LatestInsight() {
  return (
    <section className="bg-gray-defi-graphite bevel -my-lg py-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2">
            <div className="mb-12 flex flex-col gap-6">
              <h2
                id="@wintermute-feed"
                className="font-blender text-xl uppercase text-green-dark"
              >
                @wintermute feed
              </h2>
              <hr className="border-[#006623]" />
            </div>

            <section className="bg-gray-defi-graphite text-gray-off-white">
              <div className="flex w-full flex-col gap-3">
                <div className="h-[2.5rem] animate-pulse rounded-lg bg-gray-defi-ash"></div>
                <div className="h-[22rem] animate-pulse rounded-lg bg-gray-defi-ash"></div>
                <div className="h-[1.25rem] animate-pulse rounded-lg bg-gray-defi-ash"></div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-1/2">
            <div className="mb-12 flex flex-col gap-6">
              <h2
                id="whats-happening"
                className="font-blender text-xl uppercase text-green-dark"
              >
                What’s happening
              </h2>
              <hr className="border-[#006623]" />
            </div>

            {/* Cards container */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="h-[26rem] bevel animate-pulse bg-gray-defi-ash"></div>
              <div className="h-[26rem] bevel animate-pulse bg-gray-defi-ash"></div>
              <div className="h-[26rem] bevel animate-pulse bg-gray-defi-ash"></div>
              <div className="h-[26rem] bevel animate-pulse bg-gray-defi-ash"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
