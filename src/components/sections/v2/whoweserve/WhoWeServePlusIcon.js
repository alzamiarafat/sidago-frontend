export default function WhoWeServePlusIcon({
  hovered = false,
  className = "text-green-dark",
}) {
  const barClass = hovered ? "bg-gray-night-green" : "bg-green-dark";

  return (
    <div
      className={`relative flex h-3xl w-3xl shrink-0 items-center justify-center transition-all ${className}`}
    >
      <div
        className={`absolute h-[3.75%] w-[50%] transition-all duration-500 ${barClass}`}
      />
      <div
        className={`absolute h-[50%] w-[3.75%] rotate-0 transition-all duration-500 ${barClass} ${
          hovered ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
        }`}
      />
    </div>
  );
}
