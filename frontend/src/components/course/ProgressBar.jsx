import React from "react";

const ProgressBar = ({ value = 0, max = 100 }) => {
  const percentage = Math.min(Math.max(value, 0), max); // clamp between 0 and max
  const width = (percentage / max) * 100;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Outer Bar */}
      <div className="w-[20rem] h-[0.8rem] bg-white rounded-full overflow-hidden">
        {/* Inner Bar */}
        <div
          className="h-full bg-[var(--violet)] transition-all duration-300"
          style={{ width: `${width}%` }}
        />
      </div>

      {/* Label */}
      <p className="mt-2 text-[var(--violet)] font-medium">
        {Math.round(width)}% Completed
      </p>
    </div>
  );
};

export default ProgressBar;
