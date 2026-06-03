export default function BrandLogoCarousel() {
  return (
        <section className="bg-gray-defi-shadow text-gray-off-white">
          <div
            className="flex flex-col justify-between gap-2xl overflow-hidden lg:flex-row lg:gap-[5rem] xl:gap-[10.75rem]"
          >
            <div
              className="flex justify-between gap-3xl lg:items-center lg:hidden"
            >
              <div className="relative flex flex-1 gap-md lg:hidden">
                <button
                  className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash"
                  type="button"
                >
                  <div
                    className="flex w-full items-center justify-between text-lg"
                  >
                    <div>Horizontal</div>
                    <div
                      className="flex font-blender font-medium uppercase text-gray-defi-ash text-sm"
                    >
                      <span className="min-w-md">1</span
                      ><span className="min-w-sm">/</span
                      ><span className="min-w-md">4</span>
                    </div>
                  </div>
                  <div
                    className="relative h-[0.125rem] bg-gray-defi-ash w-full shrink-0 bg-opacity-30"
                  >
                    <div
                      className="absolute h-full w-full transition-all ease-linear bg-green-dark"
                      style={{ transitionDuration: "4s" }}
                    ></div>
                  </div></button
                ><button
                  className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                  type="button"
                >
                  <div
                    className="flex w-full items-center justify-between text-lg"
                  >
                    <div>Vertical</div>
                    <div
                      className="flex font-blender font-medium uppercase text-gray-defi-ash text-sm"
                    >
                      <span className="min-w-md">2</span
                      ><span className="min-w-sm">/</span
                      ><span className="min-w-md">4</span>
                    </div>
                  </div>
                  <div
                    className="relative h-[0.125rem] bg-gray-defi-ash w-full shrink-0 bg-opacity-30"
                  >
                    <div
                      className="absolute h-full ease-linear bg-green-dark w-0 transition-none"
                      style={{ transitionDuration: "4s" }}
                    ></div>
                  </div></button
                ><button
                  className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                  type="button"
                >
                  <div
                    className="flex w-full items-center justify-between text-lg"
                  >
                    <div>Symbol</div>
                    <div
                      className="flex font-blender font-medium uppercase text-gray-defi-ash text-sm"
                    >
                      <span className="min-w-md">3</span
                      ><span className="min-w-sm">/</span
                      ><span className="min-w-md">4</span>
                    </div>
                  </div>
                  <div
                    className="relative h-[0.125rem] bg-gray-defi-ash w-full shrink-0 bg-opacity-30"
                  >
                    <div
                      className="absolute h-full ease-linear bg-green-dark w-0 transition-none"
                      style={{ transitionDuration: "4s" }}
                    ></div>
                  </div></button
                ><button
                  className="absolute inset-0 flex flex-col justify-center gap-sm text-left transition-all hover:text-gray-defi-ash opacity-0"
                  type="button"
                >
                  <div
                    className="flex w-full items-center justify-between text-lg"
                  >
                    <div>Color</div>
                    <div
                      className="flex font-blender font-medium uppercase text-gray-defi-ash text-sm"
                    >
                      <span className="min-w-md">4</span
                      ><span className="min-w-sm">/</span
                      ><span className="min-w-md">4</span>
                    </div>
                  </div>
                  <div
                    className="relative h-[0.125rem] bg-gray-defi-ash w-full shrink-0 bg-opacity-30"
                  >
                    <div
                      className="absolute h-full ease-linear bg-green-dark w-0 transition-none"
                      style={{ transitionDuration: "4s" }}
                    ></div>
                  </div>
                </button>
              </div>
              <div className="flex gap-md">
                <button
                  type="button"
                  aria-label="Previous"
                  className="group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] p-[0.625rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 text-gray-night-green bg-green-dark"
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
                  </svg></button
                ><button
                  type="button"
                  aria-label="Next"
                  className="group/interactive gap-md inline-flex items-center justify-between font-medium disabled:opacity-50 bevel bevel-[0.25rem] p-[0.625rem] hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 text-gray-night-green bg-green-dark"
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
                <div
                  className="h-[0.25rem] transition-all bg-green-dark w-0 opacity-30"
                ></div>
                <div
                  className="h-[0.25rem] transition-all bg-green-dark w-0 opacity-30"
                ></div>
                <div
                  className="h-[0.25rem] transition-all bg-green-dark w-0 opacity-30"
                ></div>
                <div
                  className="h-[0.25rem] transition-all bg-green-dark w-0 opacity-30"
                ></div>
                <div
                  className="h-[0.25rem] w-sm transition-all bg-green-dark"
                  style={{ width: "calc(0.75rem * 0)" }}
                ></div>
                <div
                  className="h-[0.25rem] transition-all bg-green-dark opacity-30 ml-[0.125rem] w-sm"
                ></div>
                <div
                  className="h-[0.25rem] transition-all bg-green-dark opacity-30 ml-[0.125rem] w-sm"
                ></div>
                <div
                  className="h-[0.25rem] transition-all bg-green-dark opacity-30 ml-[0.125rem] w-sm"
                ></div>
                <div
                  className="h-[0.25rem] transition-all bg-green-dark opacity-30 ml-[0.125rem] w-sm"
                ></div>
              </div>
            </div>
            <div className="hidden flex-1 flex-col gap-2xl lg:flex">
              <button
                className="flex w-full flex-col gap-md text-left hover:text-gray-defi-ash"
                type="button"
              >
                <div className="text-xl">Horizontal</div>
                <div
                  className="relative h-[0.125rem] bg-gray-defi-ash w-full shrink-0 bg-opacity-30"
                >
                  <div
                    className="absolute h-full w-full transition-all ease-linear bg-green-dark"
                    style={{ transitionDuration: "4s" }}
                  ></div>
                </div></button
              ><button
                className="flex w-full flex-col gap-md text-left hover:text-gray-defi-ash"
                type="button"
              >
                <div className="text-xl">Vertical</div>
                <div
                  className="relative h-[0.125rem] bg-gray-defi-ash w-full shrink-0 bg-opacity-30 opacity-0"
                >
                  <div
                    className="absolute h-full ease-linear bg-green-dark w-0 transition-none"
                    style={{ transitionDuration: "4s" }}
                  ></div>
                </div></button
              ><button
                className="flex w-full flex-col gap-md text-left hover:text-gray-defi-ash"
                type="button"
              >
                <div className="text-xl">Symbol</div>
                <div
                  className="relative h-[0.125rem] bg-gray-defi-ash w-full shrink-0 bg-opacity-30 opacity-0"
                >
                  <div
                    className="absolute h-full ease-linear bg-green-dark w-0 transition-none"
                    style={{ transitionDuration: "4s" }}
                  ></div>
                </div></button
              ><button
                className="flex w-full flex-col gap-md text-left hover:text-gray-defi-ash"
                type="button"
              >
                <div className="text-xl">Color</div>
                <div
                  className="relative h-[0.125rem] bg-gray-defi-ash w-full shrink-0 bg-opacity-30 opacity-0"
                >
                  <div
                    className="absolute h-full ease-linear bg-green-dark w-0 transition-none"
                    style={{ transitionDuration: "4s" }}
                  ></div>
                </div>
              </button>
            </div>
            <div className="relative flex lg:w-[34.25rem] xl:w-[38.75rem]">
              <div
                className="relative w-full shrink-0 transition-all"
                style={{ left: "calc(-100% * 0)" }}
              >
                <a
                  style={{ position: "relative" }}
                  className="flex flex-col bevel bg-gray-defi-ash"
                  href=""
                ><span className="sr-only">Example.Com</span
                ><img
                    alt=""
                    loading="lazy"
                    width="700"
                    height="700"
                    decoding="async"
                    data-nimg="1"
                    className="h-0 w-full flex-1 object-cover bevel"
                    style={{ color: "transparent" }}
                    srcSet="images/image_13.png 1x, images/image_5.png 2x"
                    src="images/image_5.png"
                  />
                  <div className="px-md py-xl text-sm lg:text-xl">
                    Use the horizontal logo where possible, keeping white
                    space equal to the ‘W’ in the wordmark.
                  </div></a
                >
              </div>
              <div
                className="relative w-full shrink-0 transition-all pointer-events-none opacity-0"
                style={{ left: "calc(-100% * 1)" }}
              >
                <a
                  style={{ position: "relative" }}
                  className="flex flex-col bevel bg-gray-defi-ash"
                  href=""
                ><span className="sr-only">Example.Com</span
                ><img
                    alt=""
                    loading="lazy"
                    width="700"
                    height="700"
                    decoding="async"
                    data-nimg="1"
                    className="h-0 w-full flex-1 object-cover bevel"
                    style={{ color: "transparent" }}
                    srcSet="images/image_14.png 1x, images/image_1.png 2x"
                    src="images/image_1.png"
                  />
                  <div className="px-md py-xl text-sm lg:text-xl">
                    Use the vertical logo where space appropriate, keeping
                    white space equal to the ‘W’ in the wordmark.
                  </div></a
                >
              </div>
              <div
                className="relative w-full shrink-0 transition-all pointer-events-none opacity-0"
                style={{ left: "calc(-100% * 2)" }}
              >
                <a
                  style={{ position: "relative" }}
                  className="flex flex-col bevel bg-gray-defi-ash"
                  href=""
                ><span className="sr-only">Example.Com</span
                ><img
                    alt=""
                    loading="lazy"
                    width="700"
                    height="700"
                    decoding="async"
                    data-nimg="1"
                    className="h-0 w-full flex-1 object-cover bevel"
                    style={{ color: "transparent" }}
                    srcSet="images/image_13.png 1x, images/image_5.png 2x"
                    src="images/image_5.png"
                  />
                  <div className="px-md py-xl text-sm lg:text-xl">
                    Use the symbol only if the other two lockups aren’t
                    viable, keeping white space equal to the ‘W’ in the
                    wordmark.
                  </div></a
                >
              </div>
              <div
                className="relative w-full shrink-0 transition-all pointer-events-none opacity-0"
                style={{ left: "calc(-100% * 3)" }}
              >
                <a
                  style={{ position: "relative" }}
                  className="flex flex-col bevel bg-gray-defi-ash"
                  href=""
                ><span className="sr-only">Example.Com</span
                ><img
                    alt=""
                    loading="lazy"
                    width="700"
                    height="700"
                    decoding="async"
                    data-nimg="1"
                    className="h-0 w-full flex-1 object-cover bevel"
                    style={{ color: "transparent" }}
                    srcSet="images/image_15.png 1x, images/image_4.png 2x"
                    src="images/image_4.png"
                  />
                  <div className="px-md py-xl text-sm lg:text-xl">
                    A) Default Gibson green B) Dark green if visibility&apos;s an
                    issue. C/D) Use only as a last resort when A/B aren&apos;t
                    viable.
                  </div></a
                >
              </div>
            </div>
          </div>
        </section>
  );
}
