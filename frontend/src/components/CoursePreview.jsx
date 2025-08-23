import { Link } from "react-router-dom";

function CoursePreview({ name, image, route_link }) {
  return (
    <div className="w-[22rem] dark:border dark:border-neutral-800 dark:shadow-lg dark:shadow-indigo-950/40">
      <Link
        to={route_link}
        //dark:bg-gray-900
        className="group block rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2"
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
        <div className="p-4 text-center dark:bg-indigo-400">
          {/* group-hover:text-blue-500 */}
          <p className="text-2xl font-raleway font-bold text-black group-hover:text-blue-500 dark:group-hover:text-black  transition">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CoursePreview;
