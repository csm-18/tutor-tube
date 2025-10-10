import React from "react";

const ProgressBar = ({ value = 0, max = 100 }) => {
  // Clamp the value between 0 and max
  const percentage = Math.min(Math.max(value, 0), max);
  const width = (percentage / max) * 100;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Outer Bar */}
      <div
        className="
          w-[16rem] sm:w-[20rem] md:w-[24rem] lg:w-[20rem]   /* responsive widths */
          h-[0.8rem]
          bg-white
          rounded-full
          overflow-hidden
        "
      >
        {/* Inner Bar */}
        <div
          className="h-full bg-[var(--violet)] transition-all duration-300"
          style={{ width: `${width}%` }}
        />
      </div>

      {/* Label */}
      <p
        className="
          mt-2
          text-sm sm:text-base md:text-lg     /* responsive text sizes */
          text-[var(--violet)]
          font-medium
          text-center
        "
      >
        {Math.round(width)}% Completed
      </p>
    </div>
  );
};

export default ProgressBar;