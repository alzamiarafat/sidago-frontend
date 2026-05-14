import dynamic from "next/dynamic";

export default dynamic(() => import("./Navbar"), {
  loading: () => (
    <div
      className="sticky top-0 z-50 min-h-[4.5rem] w-full shrink-0 bg-gray-night-green lg:min-h-[6rem]"
      aria-hidden
    />
  ),
});
