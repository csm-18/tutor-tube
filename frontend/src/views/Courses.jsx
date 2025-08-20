import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CoursePreview from "../components/CoursePreview";

function Courses() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col justify-between">
      <Nav />
      <h2 className="text-center text-[5rem] bold pt-5">Courses</h2>
      <div className="grid grid-cols-3 gap-[6rem] flex-1 p-[8rem] pt-[4rem]">
        <CoursePreview
          name="HTML5 - Beginners to Advanced!"
          image="./html.jpg"
        />

        <CoursePreview name="?" image="./html.jpg" />
        <CoursePreview name="?" image="./html.jpg" />
        <CoursePreview name="?" image="./html.jpg" />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
