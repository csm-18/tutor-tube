import { Link } from "react-router-dom";

function CoursePreview({ name, image }) {
  return (
    <div className="w-[22rem] flex flex-col items-center">
      <Link>
        <img src={image} alt={name} className="w-[90%] h-auto rounded-md" />
        <p className="text-center text-3xl py-4">{name}</p>
      </Link>
    </div>
  );
}

export default CoursePreview;
