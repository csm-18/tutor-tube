export default function CoursePageVideo({ source, videoTitle }) {
  return (
    <div
      className="
        mt-8
        rounded-md
        overflow-hidden
        w-full                     /* full width container */
        max-w-6xl                  /* limit max width */
        mx-auto                    /* center horizontally */
      "
    >
      <div className="aspect-video">
        <iframe
          className="
            w-full
            h-full
            rounded-md
          "
          src={source}
          title={videoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}