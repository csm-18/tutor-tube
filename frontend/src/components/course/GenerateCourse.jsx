import { useState, useEffect } from "react";
import Course from "./Course";
import CoursePage from "./CoursePage";
import CoursePageVideo from "./CoursePageVideo";
import BulletList from "./BulletList";

export default function GenerateCourse({ json_path }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(json_path);
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [json_path]);

  return (
    <>
      {data ? (
        <Course course_title={data.courseTitle}>
          {data.modules.map((page_data) => (
            <CoursePage
              key={page_data.id}
              pageNumber={page_data.id}
              moduleName={page_data.title}
            >
              <CoursePageVideo
                source={page_data.video}
                videoTitle={page_data.title}
              />
              <BulletList items={page_data.points} />
            </CoursePage>
          ))}
        </Course>
      ) : (
        "Loading..."
      )}
    </>
  );
}
