import CourseSectionLeft from "./CourseSectionLeft";
import CourseSectionRight from "./CourseSectionRight";

const Courses = () => {
    return (
        <section className="my-8 md:my-16 space-y-8 md:space-y-24 maximum-width">
            <CourseSectionLeft />
            <CourseSectionRight />
        </section>
    );
};

export default Courses;
