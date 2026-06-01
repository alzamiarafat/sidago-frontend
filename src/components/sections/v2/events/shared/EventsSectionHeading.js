export default function EventsSectionHeading({
  id,
  title,
  className = "font-blender text-xl uppercase text-green-dark",
}) {
  return (
    <div className="mb-3xl flex flex-col gap-xl">
      <div className="flex flex-col gap-xs">
        <h2 id={id} className={className}>
          {title}
        </h2>
      </div>
      <hr className="!border-[#AB290D]" />
    </div>
  );
}
