import { Link } from "react-router-dom";

function CoursePreview({ name, image, route_link }) {
  return (
    <div className="w-[22rem]">
      <Link
        to={route_link}
        className="group block rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-56 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>

        {/* Title */}
        <div className="p-4 text-center">
          <p className="text-2xl font-raleway font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-500 transition">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CoursePreview;
