import CourseSectionLeft from "./CourseSectionLeft";
import CourseSectionRight from "./CourseSectionRight";

const Courses = () => {
    return (
        <section className="my-8 md:my-16">
            <CourseSectionLeft />
            <CourseSectionRight />
        </section>
    );
};

export default Courses;
