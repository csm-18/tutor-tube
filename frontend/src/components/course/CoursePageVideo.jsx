function CoursePageVideo({ source, videoTitle }) {
  return (
    <>
      <iframe
        className="h-[26rem] w-[46rem] mt-[4rem] rounded-md"
        // width="1424"
        // height="801"
        src={source}
        title={videoTitle}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default CoursePageVideo;
