export default function CoursePageParagraph({ children }) {
  return (
    <p
      className="
        mb-4
        text-base sm:text-lg md:text-xl   /* responsive font sizes */
        leading-relaxed
        text-gray-800 dark:text-gray-200
        
        px-4 sm:px-8 md:px-16 lg:px-[6.5rem] /* responsive horizontal padding */
        py-2 sm:py-4 md:py-6 lg:py-[3rem]    /* responsive vertical padding */
        pb-1
      "
    >
      {children}
    </p>
  );
}