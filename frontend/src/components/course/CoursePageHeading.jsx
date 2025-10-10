function CoursePageHeading({ heading }) {
  return (
    <h1
      className="
        font-bold
        text-[var(--violet)] dark:text-violet-200
        leading-tight
        tracking-tight
        text-center md:text-left

        text-2xl sm:text-3xl md:text-4xl lg:text-5xl

        mt-6 sm:mt-8 md:mt-10 lg:mt-12
        mb-4 sm:mb-6 md:mb-8 lg:mb-10
        px-4 sm:px-6 md:px-8
      "
    >
      {heading}
    </h1>
  );
}

export default CoursePageHeading;