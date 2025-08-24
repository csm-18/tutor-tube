export default function CoursePageParagraph({ children }) {
  return (
    <p className="px-[6.5rem] py-[3rem] pb-1 text-[1.3rem] text-base leading-relaxed text-gray-800 dark:text-gray-200 mb-4">
      {children}
    </p>
  );
}
