import Magazine from "../../assets/images/courses/magazine.jpg";
import PrimaryButton from "../../shared/PrimaryButton";
import SecondaryButton from "../../shared/SecondaryButton";

const CourseSectionLeft = () => {
    return (
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
            <div className="flex-1">
                <img src={Magazine} alt="magazines" />
            </div>
            <div className="flex-1 space-y-4 md:space-y-12 py-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-[900] leading-[100%] uppercase">
                    What will you <br /> <span>study?</span>
                </h2>
                <p className="text-lg font-[400] leading-6">
                    If you join Victoria College of Arts and Design, you can
                    expect the highest calibre of teaching, cutting-edge
                    facilities, and exceptional industry connections, which will
                    help to prepare you for a rewarding career in the creative
                    and tech industries.
                </p>
                <div className="flex gap-4">
                    <PrimaryButton content="View Courses" />
                    <SecondaryButton content="Download Prospectus" />
                </div>
            </div>
        </div>
    );
};

export default CourseSectionLeft;
