export default function CoursePageParagraph({ children }) {
  return (
    <p
      className="
        mb-4 lg:mb-6
        text-base sm:text-lg md:text-xl    /* readable font scale */
        leading-relaxed
        text-gray-800 dark:text-gray-200
        tracking-normal

        /* Balanced spacing consistent with Course layout */
        px-4 sm:px-6 md:px-8
        py-2 sm:py-3 md:py-4
      "
    >
      {children}
    </p>
  );
}