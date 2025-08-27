import { useState, useEffect } from "react";
import Course from "./Course";
import CoursePage from "./CoursePage";
import CoursePageVideo from "./CoursePageVideo";
import BulletList from "./BulletList";
import CoursePageParagraph from "./CoursePageParagraph";
import QuizQuestion from "./QuizQuestion";
import CoursePageHeading from "./CoursePageHeading";
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
          {data.modules.map((page_data) =>
            page_data.type === "lesson" ? (
              <CoursePage
                key={page_data.id}
                pageNumber={page_data.id}
                moduleName={page_data.title}
              >
                <CoursePageHeading heading={page_data.title} />
                <CoursePageVideo
                  source={page_data.video}
                  videoTitle={page_data.title}
                />
                <CoursePageParagraph>
                  {page_data.description}
                </CoursePageParagraph>
                <br />
                <br />
                <BulletList items={page_data.points} />
              </CoursePage>
            ) : (
              <CoursePage
                moduleName={page_data.title}
                pageNumber={page_data.id}
              >
                <CoursePageHeading heading={page_data.title} />
                {page_data.questions.map((quiz_data) => (
                  <QuizQuestion
                    key={quiz_data.id}
                    questionId={quiz_data.id}
                    question={quiz_data.question}
                    options={quiz_data.options}
                    correctAnswer={quiz_data.answer}
                  />
                ))}
              </CoursePage>
            )
          )}
        </Course>
      ) : (
        "Loading..."
      )}
    </>
  );
}
