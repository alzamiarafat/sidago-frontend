const GALLERY_IMAGES = [
  {
    src: "images/team.png",
    srcSet: "images/team.png 1x, images/team.png 2x",
    opacity: 1,
  },
  {
    src: "images/image.jpg",
    srcSet: "images/image_13.jpg 1x, images/image.jpg 2x",
    opacity: 0,
  },
  {
    src: "images/image_3.jpg",
    srcSet: "images/image_11.jpg 1x, images/image_3.jpg 2x",
    opacity: 0,
  },
  {
    src: "images/image_6.jpg",
    srcSet: "images/image_10.jpg 1x, images/image_6.jpg 2x",
    opacity: 0,
  },
  {
    src: "images/image_4.jpg",
    srcSet: "images/image_9.jpg 1x, images/image_4.jpg 2x",
    opacity: 0,
  },
  {
    src: "images/image_5.jpg",
    srcSet: "images/image_12.jpg 1x, images/image_5.jpg 2x",
    opacity: 0,
  },
  {
    src: "images/image_1.jpg",
    srcSet: "images/image_7.jpg 1x, images/image_1.jpg 2x",
    opacity: 0,
  },
];

const DIALOG_IMAGES = [
  {
    src: "images/image_2.jpg",
    srcSet: "images/image_8.jpg 1x, images/image_2.jpg 2x",
    opacity: 1,
  },
  ...GALLERY_IMAGES.slice(1),
];

const CAREER_LINKS = [
  {
    label: "Careers",
    description: "Join our dynamic team",
    href: "/contact",
  },
  {
    label: "Opportunities",
    description: "Explore open roles",
    href: "/contact",
  },
  {
    label: "Community",
    description: "Follow Sidago on LinkedIn",
    href: "https://www.linkedin.com/company/Sidago-trading/",
    external: true,
  },
];

function ArrowIcon({ className = "", style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      className={className}
      style={style}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.049 9.579 25.033 10v9.405H5.807v1.19h19.226v9.524l1.017.42L36.11 20.45l-.002-.842zm.175 11.016v8.084l8.06-8.084zm7.994-1.19-7.994-7.97v7.97z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function GalleryImage({ image }) {
  return (
    <img
      alt=""
      loading="lazy"
      width="1152"
      height="1182"
      decoding="async"
      data-nimg="1"
      className="absolute h-full w-full object-cover transition-all duration-500"
      style={{ color: "transparent", opacity: image.opacity }}
      src={image.src}
      srcSet={image.srcSet}
    />
  );
}

function ControlButton({ ariaLabel, rotate = false, close = false }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="group/interactive bevel bevel-[0.25rem] inline-flex items-center justify-between gap-md p-[0.625rem] font-medium disabled:opacity-50 hover:lg:opacity-70 active:opacity-70 active:lg:opacity-100 bg-green-dark text-gray-night-green"
    >
      {close ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 40 40"
          className="h-lg w-lg"
        >
          <path
            fill="currentColor"
            d="m10.667 30.513-1.18-1.18L18.82 20l-9.333-9.333 1.18-1.18L20 18.82l9.333-9.333 1.18 1.18L21.18 20l9.333 9.333-1.18 1.18L20 21.18z"
          ></path>
        </svg>
      ) : (
        <ArrowIcon className={`h-lg w-lg ${rotate ? "rotate-180" : ""}`} />
      )}
    </button>
  );
}

function CareerLink({ item, showDivider = true }) {
  return (
    <>
      <a
        href={item.href}
        className="group/interactive flex flex-col gap-xs pb-md lg:gap-md"
        style={{ position: "relative" }}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "nofollow" : undefined}
        referrerPolicy={item.external ? "no-referrer" : undefined}
      >
        <span className="sr-only">
          Company › {item.external ? "Sidago trading" : item.label}
        </span>
        <div className="flex items-center justify-between gap-xs">
          <div className="text-2xl text-green-dark">{item.label}</div>
          <ArrowIcon
            className="ml-[--arrow-offset] shrink-0 transition-all group-active/interactive:ml-0 group-active/interactive:mr-[--arrow-offset] group-active/interactive:lg:ml-[--arrow-offset] group-active/interactive:lg:mr-0 group-hover/interactive:ml-0 group-hover/interactive:mr-[--arrow-offset]"
            style={{ "--arrow-offset": "1rem", width: "2.5rem" }}
          />
        </div>
        <div>{item.description}</div>
      </a>
      {showDivider ? (
        <div className="-my-[0.0625rem] h-[0.125rem] bg-gray-defi-slate"></div>
      ) : null}
    </>
  );
}

export default function ExploreCareer() {
  return (
    <section className="bg-gray-defi-charcoal">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="explore-Sidago-careers"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Explore Sidago careers
            </h2>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>

        <section className="bg-gray-defi-charcoal text-gray-off-white">
          <div className="flex flex-col gap-3xl lg:flex-row lg:gap-2xl">
            <div className="relative aspect-square flex-1 bevel lg:aspect-[1.2] xl:aspect-[1.6]">
              {GALLERY_IMAGES.map((image) => (
                <GalleryImage key={image.src} image={image} />
              ))}

              <button
                className="absolute z-10 h-full w-full bg-green-light opacity-0 transition-all hover:opacity-30"
                type="button"
              ></button>

              <dialog className="container fixed flex flex-col gap-xl bg-transparent opacity-0 transition-all backdrop:bg-gray-night-green backdrop:opacity-50">
                <div className="relative aspect-video w-full overflow-hidden">
                  {DIALOG_IMAGES.map((image) => (
                    <GalleryImage key={`dialog-${image.src}`} image={image} />
                  ))}
                </div>

                <div className="flex justify-between">
                  <div className="flex justify-between gap-3xl lg:items-center">
                    <div className="flex gap-md">
                      <ControlButton ariaLabel="Previous" rotate />
                      <ControlButton ariaLabel="Next" />
                    </div>
                  </div>
                  <ControlButton ariaLabel="Close image" close />
                </div>
              </dialog>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-md">
              {CAREER_LINKS.map((item, index) => (
                <CareerLink
                  key={item.label}
                  item={item}
                  showDivider={index !== CAREER_LINKS.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
