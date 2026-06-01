import Image from "next/image";

export default function EventsMediaCard({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      referrerPolicy="no-referrer"
      className="group/interactive flex h-full flex-col overflow-hidden bevel bg-gray-defi-charcoal text-gray-off-white transition-all lg:group-hover/cards:[&:not(:hover)]:opacity-70"
      style={{ position: "relative" }}
    >
      <span className="sr-only">{item.title}</span>
      <Image
        alt={item.imageAlt}
        src={item.imageSrc}
        width={557}
        height={291}
        className="aspect-[557/291] w-full shrink-0 object-cover object-center"
      />
      <div className="flex flex-1 flex-col justify-between gap-md p-xl">
        <div className="flex flex-col gap-xs">
          <div className="font-blender text-xs uppercase text-gray-tradfi-silver">
            {item.category}
          </div>
          <div className="ellipsis-3 max-h-[3lh] text-lg lg:text-xl">
            {item.title}
          </div>
        </div>
        <div className="font-blender text-xs uppercase text-gray-tradfi-silver">
          <span>{item.date}</span>
        </div>
      </div>
    </a>
  );
}
