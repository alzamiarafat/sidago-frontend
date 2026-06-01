import Image from "next/image";

export default function EventsSpeakerCard({ speaker }) {
  return (
    <div className="relative flex aspect-square flex-col justify-end gap-xs p-md bevel">
      <Image
        alt={speaker.imageAlt || speaker.name}
        src={speaker.imageSrc}
        width={771}
        height={771}
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000d] via-[#000d]/80 via-10% to-transparent to-50%" />
      <div className="z-10 text-xl">{speaker.name}</div>
      <div className="z-10 font-blender text-sm uppercase">{speaker.company}</div>
    </div>
  );
}
