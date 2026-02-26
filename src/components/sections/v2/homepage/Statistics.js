"use client";

import { motion } from "framer-motion";

export default function Statistics() {
  const stats = [
    { label: "Saving Costing", value: "75%" },
    { label: "Increased Output", value: "81%" },
    { label: "Return on Investment", value: "87%" },
    { label: "Client Retention", value: "92%" },
  ];

  return (
    <div className="bg-[#151619] ">
      <div className="container mx-auto px-6 lg:px-20">
        <section className="w-full py-16">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative group rounded-xl p-6 flex flex-col justify-between hover:bg-gray-800/50 transition-colors"
              >
                {/* Number with dotted effect */}
                <div className="text-4xl lg:text-7xl font-extrabold text-stone-500 bg-black mb-2 tracking-widest leading-none dotted-text hover:bg-[#E7512F] hover:text-[#E7512F]">
                  {stat.value}
                </div>

                {/* Label with wave animation on hover */}
                <motion.div
                  className="uppercase text-sm lg:text-md text-gray-300 font-semibold flex flex-wrap"
                  whileHover={{
                    y: [0, -4, 0],
                    transition: { repeat: Infinity, duration: 0.6 },
                  }}
                >
                  {stat.label}
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
