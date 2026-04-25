export function Initiatives() {
  return (
    <section className="bg-gray-defi-graphite">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="launching-initiatives"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Launching initiatives
            </h2>
            <div className="text-gray-off-white">
              By operating across the entire DeFi ecosystem, Wintermute
              identifies crucial gaps and incubates solutions that drive DeFi
              growth.
            </div>
          </div>
          <hr className="border-[#006623]" />
        </div>
        <section className="bg-gray-defi-graphite text-gray-off-white">
          <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-2">
            <div className="group/interactive relative flex min-h-[18.75rem] items-end bevel bg-green-light text-gray-night-green px-xl py-2xl lg:min-h-[20.75rem]">
              <div className="flex h-full flex-1 flex-col justify-between gap-md">
                <img
                  alt="Rsync"
                  loading="lazy"
                  width="1152"
                  height="1152"
                  decoding="async"
                  data-nimg="1"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="https://wp-corp-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/03/17212508/rysnc.svg"
                />
                <div className="z-10 flex flex-col gap-xs">
                  <div className="flex flex-wrap gap-xs">
                    <img
                      alt="Logo"
                      loading="lazy"
                      width="90"
                      height="38"
                      decoding="async"
                      data-nimg="1"
                      className="h-[2.625rem] w-auto"
                      style={{ color: "transparent" }}
                      src="images/rysnc.svg"
                    />
                  </div>
                </div>
                <div className="z-10 flex flex-col gap-xs">
                  <div className="flex flex-col gap-xs xl:w-2/3">
                    <div className="text-2xl">Rsync</div>
                  </div>
                  <div>
                    One of the largest block builders on Ethereum, optimizing
                    transaction sequencing to improve network efficiency
                  </div>
                </div>
              </div>
            </div>
            <div className="group/interactive relative flex min-h-[18.75rem] items-end bevel bg-green-light text-gray-night-green px-xl py-2xl lg:min-h-[20.75rem]">
              <div className="flex h-full flex-1 flex-col justify-between gap-md">
                <img
                  alt="Rizzolver"
                  loading="lazy"
                  width="1152"
                  height="1152"
                  decoding="async"
                  data-nimg="1"
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  style={{ color: "transparent" }}
                  src="images/test-rizz.svg"
                />
                <div className="z-10 flex flex-col gap-xs">
                  <div className="flex flex-wrap gap-xs">
                    <img
                      alt="Logo"
                      loading="lazy"
                      width="90"
                      height="38"
                      decoding="async"
                      data-nimg="1"
                      className="h-[2.625rem] w-auto"
                      style={{ color: "transparent" }}
                      src="images/rizzolver.svg"
                    />
                  </div>
                </div>
                <div className="z-10 flex flex-col gap-xs">
                  <div className="flex flex-col gap-xs xl:w-2/3">
                    <div className="text-2xl">Rizzolver</div>
                  </div>
                  <div>
                    Solver handling DEX order flows, ensuring efficient
                    execution and improved liquidity distribution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
