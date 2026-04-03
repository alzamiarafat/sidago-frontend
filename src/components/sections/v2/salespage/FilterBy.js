export default function FilterBy() {
  return (
    <section>
      <div className="container py-block">
        <div className="pb-container">
          <section className="bg-gray-night-green text-gray-off-white">
            <div>
              <div className="flex flex-col gap-2xl bg-gray-defi-graphite p-md text-sm bevel lg:hidden">
                <div className="font-blender text-sm uppercase">Filter By</div>
                <div className="flex flex-col gap-xl">
                  <div>
                    <div>
                      <div className="flex items-center gap-2xl lg:gap-lg flex-row-reverse">
                        <div className="relative flex h-3xl w-3xl items-center justify-center text-gray-off-white">
                          <div className="absolute h-[3.75%] w-[50%] transition-all duration-500 bg-gray-off-white"></div>
                          <div className="absolute h-[50%] w-[3.75%] rotate-0 transform transition-all duration-500 bg-gray-off-white"></div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Market Color</div>
                        </div>
                      </div>
                      <div
                        className="flex gap-2xl overflow-hidden transition-[height] lg:gap-lg"
                        style={{ height: 0 }}
                      >
                        <div className="flex-1">
                          <div>
                            <div className="flex flex-col gap-md pt-xl transition-all">
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=market-update"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Market Update
                              </a>
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=reports"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Reports
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center gap-2xl lg:gap-lg flex-row-reverse">
                        <div className="relative flex h-3xl w-3xl items-center justify-center text-gray-off-white">
                          <div className="absolute h-[3.75%] w-[50%] transition-all duration-500 bg-gray-off-white"></div>
                          <div className="absolute h-[50%] w-[3.75%] rotate-0 transform transition-all duration-500 bg-gray-off-white"></div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Research</div>
                        </div>
                      </div>
                      <div
                        className="flex gap-2xl overflow-hidden transition-[height] lg:gap-lg"
                        style={{ height: 0 }}
                      >
                        <div className="flex-1">
                          <div>
                            <div className="flex flex-col gap-md pt-xl transition-all">
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=defi-research"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                DeFi Research
                              </a>
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=governance-digest"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Governance Digest
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center gap-2xl lg:gap-lg flex-row-reverse">
                        <div className="relative flex h-3xl w-3xl items-center justify-center text-gray-off-white">
                          <div className="absolute h-[3.75%] w-[50%] transition-all duration-500 bg-gray-off-white"></div>
                          <div className="absolute h-[50%] w-[3.75%] rotate-0 transform transition-all duration-500 bg-gray-off-white"></div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">News</div>
                        </div>
                      </div>
                      <div
                        className="flex gap-2xl overflow-hidden transition-[height] lg:gap-lg"
                        style={{ height: 0 }}
                      >
                        <div className="flex-1">
                          <div>
                            <div className="flex flex-col gap-md pt-xl transition-all">
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=announcements"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Announcements
                              </a>
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=media"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Media
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center gap-2xl lg:gap-lg flex-row-reverse">
                        <div className="relative flex h-3xl w-3xl items-center justify-center text-gray-off-white">
                          <div className="absolute h-[3.75%] w-[50%] transition-all duration-500 bg-gray-off-white"></div>
                          <div className="absolute h-[50%] w-[3.75%] rotate-0 transform transition-all duration-500 bg-gray-off-white"></div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Views</div>
                        </div>
                      </div>
                      <div
                        className="flex gap-2xl overflow-hidden transition-[height] lg:gap-lg"
                        style={{ height: 0 }}
                      >
                        <div className="flex-1">
                          <div>
                            <div className="flex flex-col gap-md pt-xl transition-all">
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=case-studies"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Case Studies
                              </a>
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=opinions"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Opinions
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden cursor-pointer lg:block">
                <div>
                  <div className="flex items-center gap-2xl lg:gap-lg">
                    <div className="relative flex h-3xl w-3xl items-center justify-center text-gray-off-white">
                      <div className="absolute h-[3.75%] w-[50%] transition-all duration-500 bg-gray-off-white"></div>
                      <div className="absolute h-[50%] w-[3.75%] transform transition-all duration-500 rotate-90 bg-gray-off-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-blender text-xl uppercase">
                        Filter By
                      </div>
                    </div>
                  </div>
                  <hr className="mb-10 mt-10 h-[0.0625rem] w-full bg-gray-off-white" />
                  <div className="flex gap-2xl overflow-hidden transition-[height] lg:gap-lg">
                    <div className="hidden w-3xl lg:hidden"></div>
                    <div className="flex-1">
                      <div>
                        <div className="grid grid-cols-4 gap-xl">
                          <div className="flex flex-col gap-6 text-xl">
                            <div className="h-7 font-semibold">
                              Market Color
                            </div>
                            <div className="grid gap-x-10 gap-y-4">
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=market-update"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Market Update
                              </a>
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=reports"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Reports
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-6 text-xl">
                            <div className="h-7 font-semibold">Research</div>
                            <div className="grid gap-x-10 gap-y-4">
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=defi-research"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                DeFi Research
                              </a>
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=governance-digest"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Governance Digest
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-6 text-xl">
                            <div className="h-7 font-semibold">News</div>
                            <div className="grid gap-x-10 gap-y-4">
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=announcements"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Announcements
                              </a>
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=media"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Media
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-6 text-xl">
                            <div className="h-7 font-semibold">Views</div>
                            <div className="grid gap-x-10 gap-y-4">
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=case-studies"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Case Studies
                              </a>
                              <a
                                style={{ position: "relative" }}
                                className="group flex items-center gap-sm text-sm lg:text-lg"
                                href="/insights?category=opinions"
                              >
                                <span className="sr-only">Insights</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18"
                                  className="h-[1.125rem] min-h-[1.125rem] w-[1.125rem] min-w-[1.125rem] group-hover:text-gray-defi-ash"
                                >
                                  <path
                                    stroke="currentColor"
                                    d="M14.331.5 17.5 3.669v10.662L14.331 17.5H3.67L.5 14.331V3.67L3.669.5z"
                                  ></path>
                                </svg>
                                Opinions
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="bg-gray-night-green text-gray-off-white">
          <div>
            <div className="flex-col gap-2xl flex lg:flex">
              <div className="group/cards grid grid-cols-1 gap-xl lg:grid-cols-4">
                <div>
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/market-color/market-update/market-update-30-march-2026-2"
                  >
                    <span className="sr-only">
                      Insights › Market color › Market update › Market update 30
                      march 2026 2
                    </span>
                    <img
                      alt="Market Update: 30 March 2026"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_17.png 1x,
                            images/image_10.png 2x
                          "
                      src="images/image_10.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Market Update
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Market Update: 30 March 2026
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Analysis of recent crypto market developments from
                            Sidago OTC Desk
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>30 Mar 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="#"
                  >
                    <span className="sr-only">
                      Insights › News › Announcements › Sidago launches 24 7
                      crude oil cfd trading to meet demand for weekend liquidity
                    </span>
                    <img
                      alt="Sidago launches 24/7 crude oil CFD trading to meet demand for weekend liquidity"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="images/image_27.png 1x, images/image_9.png 2x"
                      src="images/image_9.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Announcements
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Sidago launches 24/7 crude oil CFD trading to meet
                            demand for weekend liquidity
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            New OTC offering gives counterparties leveraged oil
                            exposure beyond traditional market hours
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>24 Mar 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/market-color/market-update/market-update-23-march-2026"
                  >
                    <span className="sr-only">
                      Insights › Market color › Market update › Market update 23
                      march 2026
                    </span>
                    <img
                      alt="Market Update: 23 March 2026"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_17.png 1x,
                            images/image_10.png 2x
                          "
                      src="images/image_10.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Market Update
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Market Update: 23 March 2026
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Analysis of recent crypto market developments from
                            Sidago OTC Desk
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>23 Mar 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/views/opinions/epoch-5-a-structurally-different-btc-mining-cycle"
                  >
                    <span className="sr-only">
                      Insights › Views › Opinions › Epoch 5 a structurally
                      different btc mining cycle
                    </span>
                    <img
                      alt="Epoch 5: A structurally different BTC mining cycle"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_25.png 1x,
                            images/image_11.png 2x
                          "
                      src="images/image_11.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Opinions
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Epoch 5: A structurally different BTC mining cycle
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Following headlines of BTC miners selling down
                            treasuries to fund partial pivots into HPC and AI,
                            concerns are mounting. While data suggests this
                            squeeze is unlike previous cycles in 2018 and 2022,
                            we believe this is a healthy shakeup that fits
                            within the design of BTC and will make the mining
                            industry more efficient as a result. Beyond a laser
                            focus on input costs and diversification into more
                            flexible compute, we believe active balance sheet
                            management is a key lever that miners are not
                            pulling.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>12 Mar 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/views/opinions/the-retail-trade-crypto-vs-equities"
                  >
                    <span className="sr-only">
                      Insights › Views › Opinions › The retail trade crypto vs
                      equities
                    </span>
                    <img
                      alt="The retail trade: crypto vs equities"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_25.png 1x,
                            images/image_11.png 2x
                          "
                      src="images/image_11.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Opinions
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            The retail trade: crypto vs equities
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Retail activity moves crypto markets. Through
                            speculation, reflexive dip-buying, and agile capital
                            rotation across the token universe, retail investors
                            defined every major cycle. New data suggests that
                            retail’s relation to crypto is changing. We have
                            been flagging equity markets capturing retail’s
                            attention at the expense of altcoins for a while.
                            New data from JP Morgan’s strategy desk, overlayed
                            with our proprietary flow data, now suggests that
                            equity and crypto are becoming substitute risk
                            assets.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>26 Feb 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    referrerpolicy="no-referrer"
                    rel="nofollow"
                    style={{ position: "relative" }}
                    target="_blank"
                    href="https://www.coindesk.com/daybook-us/2026/02/10/ai-mania-is-helping-cap-crypto-s-upside-wintermute-says"
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  >
                    <span className="sr-only">
                      Daybook us › 2026 › 02 › 10 › Ai mania is helping cap
                      crypto s upside wintermute says
                    </span>
                    <img
                      alt="AI mania is helping cap crypto's upside, Sidago says"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      src="images/Media-CoinDesk.svg"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Media
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            AI mania is helping cap cryptos upside, Sidago says
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Investments in AI have been “absorbing available
                            capital for months at the expense of everything
                            else,” Sidago wrote in a note. The trading firm
                            wrote that stripping AI companies from the Nasdaq
                            100 index sees crypto’s negative skew nearly
                            disappear.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>10 Feb 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/news/announcements/wintermute-trader-assessment-day"
                  >
                    <span className="sr-only">
                      Insights › News › Announcements › Sidago trader assessment
                      day
                    </span>
                    <img
                      alt="Sidago Trader Assessment Day"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_24.png 1x,
                            images/image_13.png 2x
                          "
                      src="images/image_13.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Announcements
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Sidago Trader Assessment Day
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            On March 6, 2026, we’re inviting a small group of
                            exceptional graduates to join us at our London
                            office for an Algorithmic Trader Assessment Day.
                            This is a chance to meet experienced Sidago traders,
                            take part in interesting technical challenges, and
                            learn more about how we operate.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>10 Feb 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/views/opinions/digital-assets-in-2026-the-clearing-layer-for-the-internet-economy"
                  >
                    <span className="sr-only">
                      Insights › Views › Opinions › Digital assets in 2026 the
                      clearing layer for the internet economy
                    </span>
                    <img
                      alt="Digital assets in 2026: The clearing layer for the internet economy"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_30.png 1x,
                            images/image_14.png 2x
                          "
                      src="images/image_14.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Opinions
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Digital assets in 2026: The clearing layer for the
                            internet economy
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Sidago Ventures delves into where they believe
                            digital assets will be heading in 2026, and where
                            they will be actively backing founders.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>28 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    referrerpolicy="no-referrer"
                    rel="nofollow"
                    style={{ position: "relative" }}
                    target="_blank"
                    href="https://finance.yahoo.com/news/wintermute-says-crypto-bull-cycle-112456352.html"
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  >
                    <span className="sr-only">
                      News › Sidago says crypto bull cycle 112456352.html
                    </span>
                    <img
                      alt="Sidago Says Crypto’s Bull Cycle Is Over – Three Forces Will Drive 2026"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      src="images/Media-Yahoo-Finance.svg"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Media
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Sidago Says Crypto’s Bull Cycle Is Over – Three
                            Forces Will Drive 2026
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Sidago declares cryptos traditional bull cycle over,
                            citing liquidity concentration in large-cap assets
                            and weakened capital rotation as 2025 marks a shift
                            toward institutional anchoring over
                            speculation-driven rallies.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>20 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/market-color/reports/digital-asset-otc-markets-2025"
                  >
                    <span className="sr-only">
                      Insights › Market color › Reports › Digital asset otc
                      markets 2025
                    </span>
                    <img
                      alt="Digital asset OTC market 2025"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_23.png 1x,
                            images/image_15.png 2x
                          "
                      src="images/image_15.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Reports
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Digital asset OTC market 2025
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Sidago 2025 digital asset OTC market review analyzes
                            crypto liquidity flows, institutional trading
                            behavior and derivatives growth to explain how
                            traditional cycle dynamics are changing.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>13 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    referrerpolicy="no-referrer"
                    rel="nofollow"
                    style={{ position: "relative" }}
                    target="_blank"
                    href="https://www.theblock.co/post/385332/wintermute-otc-data-crypto-liquidity-in-btc-eth-alts-fade"
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  >
                    <span className="sr-only">
                      Post › 385332 › Sidago otc data crypto liquidity in btc
                      eth alts fade
                    </span>
                    <img
                      alt="The Block: Sidago OTC data shows crypto liquidity clustered in BTC and ETH as broader altcoin rallies faded in 2025"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      src="images/Media-The-Block.svg"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Media
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            The Block: Sidago OTC data shows crypto liquidity
                            clustered in BTC and ETH as broader altcoin rallies
                            faded in 2025
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Sidago says crypto liquidity concentrated in BTC,
                            ETH, and a handful of majors as ETF and treasury
                            channels shaped where capital landed.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>13 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="hidden lg:block">
                  <a
                    referrerpolicy="no-referrer"
                    rel="nofollow"
                    style={{ position: "relative" }}
                    target="_blank"
                    href="https://www.bloomberg.com/news/articles/2026-01-13/crypto-s-fringe-collapses-as-40-billion-in-altcoin-bets-vanish"
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  >
                    <span className="sr-only">
                      News › Articles › 2026 01 13 › Crypto s fringe collapses
                      as 40 billion in altcoin bets vanish
                    </span>
                    <img
                      alt="Bloomberg: Crypto’s Altcoin Fringe Sees $40 Billions Exodus In Risk Unwind"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      src="images/Media-Bloomberg-1.svg"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Media
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Bloomberg: Crypto’s Altcoin Fringe Sees $40 Billions
                            Exodus In Risk Unwind
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Altcoins — once the high-octane casino of the crypto
                            boom — are struggling to rally for even a month.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>13 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="flex-col gap-2xl lg:flex-col-reverse lg:gap-4xl hidden lg:hidden"
              style={{ clipPath: "inset(-100rem -100rem -100rem -100rem)" }}
            >
              <div className="flex justify-between gap-3xl lg:items-center">
                <div className="relative flex flex-1 gap-md lg:hidden">
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">1</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">2</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">3</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">4</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">5</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">6</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">7</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">8</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">9</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">10</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">11</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                  <button
                    className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                    type="button"
                  >
                    <div className="flex w-full items-center justify-between text-lg">
                      <div className="flex font-blender font-medium uppercase text-gray-defi-ash text-xl">
                        <span className="min-w-md">12</span>
                        <span className="min-w-sm">/</span>
                        <span className="min-w-md">12</span>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex gap-md">
                  <button
                    type="button"
                    aria-label="Previous"
                    className="group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] p-[0.625rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 text-gray-night-green bg-green-mid"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="h-lg w-lg rotate-180"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next"
                    className="group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] p-[0.625rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 text-gray-night-green bg-green-mid"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                      className="h-lg w-lg"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="hidden lg:flex">
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid w-0 opacity-30"></div>
                  <div
                    className="h-[0.25rem] w-sm transition-all bg-green-mid"
                    style={{ width: "calc(0.75rem * 0)" }}
                  ></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                  <div className="h-[0.25rem] transition-all bg-green-mid opacity-30 ml-[0.125rem] w-sm"></div>
                </div>
              </div>
              <div className="relative -mx-[100rem] flex overflow-x-auto px-[100rem] scrollbar-none group/cards">
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/market-color/market-update/market-update-30-march-2026-2"
                  >
                    <span className="sr-only">
                      Insights › Market color › Market update › Market update 30
                      march 2026 2
                    </span>
                    <img
                      alt="Market Update: 30 March 2026"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_17.png 1x,
                            images/image_10.png 2x
                          "
                      src="images/image_10.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Market Update
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Market Update: 30 March 2026
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Analysis of recent crypto market developments from
                            Sidago OTC Desk
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>30 Mar 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/news/announcements/wintermute-launches-24-7-crude-oil-cfd-trading-to-meet-demand-for-weekend-liquidity"
                  >
                    <span className="sr-only">
                      Insights › News › Announcements › Sidago launches 24 7
                      crude oil cfd trading to meet demand for weekend liquidity
                    </span>
                    <img
                      alt="Sidago launches 24/7 crude oil CFD trading to meet demand for weekend liquidity"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="images/image_27.png 1x, images/image_9.png 2x"
                      src="images/image_9.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Announcements
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Sidago launches 24/7 crude oil CFD trading to meet
                            demand for weekend liquidity
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            New OTC offering gives counterparties leveraged oil
                            exposure beyond traditional market hours
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>24 Mar 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/market-color/market-update/market-update-23-march-2026"
                  >
                    <span className="sr-only">
                      Insights › Market color › Market update › Market update 23
                      march 2026
                    </span>
                    <img
                      alt="Market Update: 23 March 2026"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_17.png 1x,
                            images/image_10.png 2x
                          "
                      src="images/image_10.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Market Update
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Market Update: 23 March 2026
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Analysis of recent crypto market developments from
                            Sidago OTC Desk
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>23 Mar 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/views/opinions/epoch-5-a-structurally-different-btc-mining-cycle"
                  >
                    <span className="sr-only">
                      Insights › Views › Opinions › Epoch 5 a structurally
                      different btc mining cycle
                    </span>
                    <img
                      alt="Epoch 5: A structurally different BTC mining cycle"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_25.png 1x,
                            images/image_11.png 2x
                          "
                      src="images/image_11.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Opinions
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Epoch 5: A structurally different BTC mining cycle
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Following headlines of BTC miners selling down
                            treasuries to fund partial pivots into HPC and AI,
                            concerns are mounting. While data suggests this
                            squeeze is unlike previous cycles in 2018 and 2022,
                            we believe this is a healthy shakeup that fits
                            within the design of BTC and will make the mining
                            industry more efficient as a result. Beyond a laser
                            focus on input costs and diversification into more
                            flexible compute, we believe active balance sheet
                            management is a key lever that miners are not
                            pulling.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>12 Mar 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/views/opinions/the-retail-trade-crypto-vs-equities"
                  >
                    <span className="sr-only">
                      Insights › Views › Opinions › The retail trade crypto vs
                      equities
                    </span>
                    <img
                      alt="The retail trade: crypto vs equities"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_25.png 1x,
                            images/image_11.png 2x
                          "
                      src="images/image_11.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Opinions
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            The retail trade: crypto vs equities
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Retail activity moves crypto markets. Through
                            speculation, reflexive dip-buying, and agile capital
                            rotation across the token universe, retail investors
                            defined every major cycle. New data suggests that
                            retail’s relation to crypto is changing. We have
                            been flagging equity markets capturing retail’s
                            attention at the expense of altcoins for a while.
                            New data from JP Morgan’s strategy desk, overlayed
                            with our proprietary flow data, now suggests that
                            equity and crypto are becoming substitute risk
                            assets.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>26 Feb 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    referrerpolicy="no-referrer"
                    rel="nofollow"
                    style={{ position: "relative" }}
                    target="_blank"
                    href="https://www.coindesk.com/daybook-us/2026/02/10/ai-mania-is-helping-cap-crypto-s-upside-wintermute-says"
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  >
                    <span className="sr-only">
                      Daybook us › 2026 › 02 › 10 › Ai mania is helping cap
                      crypto s upside wintermute says
                    </span>
                    <img
                      alt="AI mania is helping cap crypto's upside, Sidago says"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      src="images/Media-CoinDesk.svg"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Media
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            AI mania is helping cap cryptos upside, Sidago says
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Investments in AI have been “absorbing available
                            capital for months at the expense of everything
                            else,” Sidago wrote in a note. The trading firm
                            wrote that stripping AI companies from the Nasdaq
                            100 index sees crypto’s negative skew nearly
                            disappear.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>10 Feb 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/news/announcements/wintermute-trader-assessment-day"
                  >
                    <span className="sr-only">
                      Insights › News › Announcements › Sidago trader assessment
                      day
                    </span>
                    <img
                      alt="Sidago Trader Assessment Day"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_24.png 1x,
                            images/image_13.png 2x
                          "
                      src="images/image_13.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Announcements
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Sidago Trader Assessment Day
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            On March 6, 2026, we’re inviting a small group of
                            exceptional graduates to join us at our London
                            office for an Algorithmic Trader Assessment Day.
                            This is a chance to meet experienced Sidago traders,
                            take part in interesting technical challenges, and
                            learn more about how we operate.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>10 Feb 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/views/opinions/digital-assets-in-2026-the-clearing-layer-for-the-internet-economy"
                  >
                    <span className="sr-only">
                      Insights › Views › Opinions › Digital assets in 2026 the
                      clearing layer for the internet economy
                    </span>
                    <img
                      alt="Digital assets in 2026: The clearing layer for the internet economy"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_30.png 1x,
                            images/image_14.png 2x
                          "
                      src="images/image_14.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Opinions
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Digital assets in 2026: The clearing layer for the
                            internet economy
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Sidago Ventures delves into where they believe
                            digital assets will be heading in 2026, and where
                            they will be actively backing founders.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>28 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    referrerpolicy="no-referrer"
                    rel="nofollow"
                    style={{ position: "relative" }}
                    target="_blank"
                    href="https://finance.yahoo.com/news/wintermute-says-crypto-bull-cycle-112456352.html"
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  >
                    <span className="sr-only">
                      News › Sidago says crypto bull cycle 112456352.html
                    </span>
                    <img
                      alt="Sidago Says Crypto’s Bull Cycle Is Over – Three Forces Will Drive 2026"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      src="images/Media-Yahoo-Finance.svg"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Media
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Sidago Says Crypto’s Bull Cycle Is Over – Three
                            Forces Will Drive 2026
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Sidago declares cryptos traditional bull cycle over,
                            citing liquidity concentration in large-cap assets
                            and weakened capital rotation as 2025 marks a shift
                            toward institutional anchoring over
                            speculation-driven rallies.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>20 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    style={{ position: "relative" }}
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                    href="/insights/market-color/reports/digital-asset-otc-markets-2025"
                  >
                    <span className="sr-only">
                      Insights › Market color › Reports › Digital asset otc
                      markets 2025
                    </span>
                    <img
                      alt="Digital asset OTC market 2025"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      srcset="
                            images/image_23.png 1x,
                            images/image_15.png 2x
                          "
                      src="images/image_15.png"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Reports
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Digital asset OTC market 2025
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Wintermute’s 2025 digital asset OTC market review
                            analyzes crypto liquidity flows, institutional
                            trading behavior and derivatives growth to explain
                            how traditional cycle dynamics are changing.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>13 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    referrerpolicy="no-referrer"
                    rel="nofollow"
                    style={{ position: "relative" }}
                    target="_blank"
                    href="https://www.theblock.co/post/385332/wintermute-otc-data-crypto-liquidity-in-btc-eth-alts-fade"
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  >
                    <span className="sr-only">
                      Post › 385332 › Sidago otc data crypto liquidity in btc
                      eth alts fade
                    </span>
                    <img
                      alt="The Block: Sidago OTC data shows crypto liquidity clustered in BTC and ETH as broader altcoin rallies faded in 2025"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      src="images/Media-The-Block.svg"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Media
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            The Block: Sidago OTC data shows crypto liquidity
                            clustered in BTC and ETH as broader altcoin rallies
                            faded in 2025
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Sidago says crypto liquidity concentrated in BTC,
                            ETH, and a handful of majors as ETF and treasury
                            channels shaped where capital landed.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>13 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="w-[calc(100%-1rem)] shrink-0 pl-md lg:w-[--link-card-desktop-width] lg:pl-0 lg:pr-[3rem]"
                  style={{
                    "--link-card-desktop-width": "calc(100% / 2 + 1rem)",
                  }}
                >
                  <a
                    referrerpolicy="no-referrer"
                    rel="nofollow"
                    style={{ position: "relative" }}
                    target="_blank"
                    href="https://www.bloomberg.com/news/articles/2026-01-13/crypto-s-fringe-collapses-as-40-billion-in-altcoin-bets-vanish"
                    className="flex flex-col bevel bg-gray-defi-charcoal h-full transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
                  >
                    <span className="sr-only">
                      News › Articles › 2026 01 13 › Crypto s fringe collapses
                      as 40 billion in altcoin bets vanish
                    </span>
                    <img
                      alt="Bloomberg: Crypto’s Altcoin Fringe Sees $40 Billions Exodus In Risk Unwind"
                      loading="lazy"
                      width="800"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      className="bevel w-full aspect-[1.66] object-cover"
                      style={{ color: "transparent" }}
                      src="images/Media-Bloomberg-1.svg"
                    />
                    <div className="z-10 flex justify-between p-xl flex-1">
                      <div className="flex flex-col justify-between gap-xs">
                        <div className="flex flex-col gap-xs">
                          <div className="font-blender uppercase text-xs">
                            Media
                          </div>
                          <div className="ellipsis-3 text-lg max-h-[3lh]">
                            Bloomberg: Crypto’s Altcoin Fringe Sees $40 Billions
                            Exodus In Risk Unwind
                          </div>
                          <div className="ellipsis-4 text-sm text-gray-tradfi-silver max-h-[4lh]">
                            Altcoins — once the high-octane casino of the crypto
                            boom — are struggling to rally for even a month.
                          </div>
                        </div>
                        <div className="font-blender uppercase text-xs">
                          <span>13 Jan 2026</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-container pb-none flex">
          <a
            style={{ position: "relative" }}
            className="group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] px-sm py-xs bg-green-tradfi text-gray-night-green"
            href="/insights/discover"
          >
            <span className="sr-only">Insights › Discover</span>Discover all
            insights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40"
              className="ml-[--arrow-offset] transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
              style={{ "--arrow-offset": "0.4rem", width: "1rem" }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
