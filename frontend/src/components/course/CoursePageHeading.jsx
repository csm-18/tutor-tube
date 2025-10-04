function CoursePageHeading({ heading }) {
  return (
    <h1
      className="
        text-2xl           /* base size for mobile */
        sm:text-3xl        /* small screens */
        md:text-4xl        /* medium screens */
        lg:text-5xl        /* large screens */
        xl:text-6xl        /* extra large screens */
        font-bold
        text-center        /* optional, improves layout on mobile */
      "
    >
      {heading}
    </h1>
  );
}

export default CoursePageHeading;