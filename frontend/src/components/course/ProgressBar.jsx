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
          w-[16rem] sm:w-[20rem] md:w-[24rem] lg:w-[20rem]
          h-[0.8rem]
          bg-white dark:bg-gray-800
          rounded-full
          overflow-hidden
          border border-gray-300 dark:border-violet-700
        "
      >
        {/* Inner Bar */}
        <div
          className="h-full bg-[var(--violet)] dark:bg-violet-500 transition-all duration-300"
          style={{ width: `${width}%` }}
        />
      </div>

      {/* Label */}
      <p
        className="
          mt-2
          text-sm sm:text-base md:text-lg
          text-[var(--violet)] dark:text-violet-200
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