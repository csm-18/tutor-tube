import { useState, useEffect } from "react";
import Course from "../components/course/Course";

export default function generate_course(json_path) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(json_path)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return <Course course_title={data.course_title}></Course>;
}
