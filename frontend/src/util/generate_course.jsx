import { useState, useEffect } from "react";
import Course from "../components/course/Course";

export default function generate_course(json_path) {
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
  }, []);
  return (
    <>{data ? <Course course_title={data.course_title}></Course> : "error"}</>
  );
}
