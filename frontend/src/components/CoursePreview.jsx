import { Link } from "react-router-dom";

function CoursePreview({ name, image, route_link }) {
  return (
    <div
      className="
        w-full 
        max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[24rem]
        mx-auto
        dark:border dark:border-neutral-800 dark:shadow-lg dark:shadow-indigo-950/40
      "
    >
      <Link
        to={route_link}
        className="
          block group rounded-xl overflow-hidden
          bg-white dark:bg-gray-900
          shadow-md hover:shadow-2xl
          transform transition-transform duration-300 hover:-translate-y-2
        "
      >
        {/* Image */}
        <div className="relative w-full">
          <img
            src={image}
            alt={name}
            className="
              w-full
              h-40 sm:h-48 md:h-56 lg:h-60
              object-cover
              rounded-t-xl
              transition-transform duration-500
              group-hover:scale-105
            "
          />

          {/* Gradient Overlay on Hover */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/30 via-transparent to-transparent
              opacity-0 group-hover:opacity-100
              transition duration-500
            "
          />
        </div>

        {/* Title */}
        <div
          className="
            p-3 sm:p-4 md:p-5
            text-center
            bg-gray-50 dark:bg-gray-800
          "
        >
          <p
            className="
              text-base sm:text-lg md:text-xl lg:text-2xl
              font-raleway font-bold
              text-gray-900 dark:text-gray-100
              group-hover:text-blue-500 dark:group-hover:text-indigo-300
              transition-colors duration-300
            "
          >
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CoursePreview;