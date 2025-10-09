export default function CoursePageVideo({ source, videoTitle }) {
  return (
    <div
      className="
        mt-6 sm:mt-8 md:mt-10 lg:mt-12
        mb-6 sm:mb-8 md:mb-10 lg:mb-12
        px-4 sm:px-6 md:px-8              /* aligns with CoursePageParagraph & Heading */
        w-full
      "
    >
      <div
        className="
          rounded-md
          overflow-hidden
          w-full
          max-w-5xl lg:max-w-5xl          /* slightly narrower on medium */
          mx-auto
          shadow-md hover:shadow-lg
          transition-shadow duration-300  /* subtle hover feel */
        "
      >
        <div className="aspect-video rounded-md overflow-hidden">
          <iframe
            className="w-full h-full rounded-md"
            src={source}
            title={videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}