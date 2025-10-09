function CoursePageHeading({ heading }) {
  return (
    <h1
      className="
        font-bold
        text-[var(--violet)]       /* course accent color */
        leading-tight
        tracking-tight
        text-center md:text-left   /* centered on mobile, aligned left on medium+ screens */

        /* Responsive font sizes */
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl

        /* Responsive margins and padding for layout consistency */
        mt-6 sm:mt-8 md:mt-10 lg:mt-12
        mb-4 sm:mb-6 md:mb-8 lg:mb-10
        px-4 sm:px-6 md:px-8         /* match CoursePageParagraph padding */
      "
    >
      {heading}
    </h1>
  );
}

export default CoursePageHeading;