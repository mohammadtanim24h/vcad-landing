import Discussion from "../../assets/images/courses/discussion.jpg";
import PrimaryButton from "../../shared/PrimaryButton";

const CourseSectionRight = () => {
    return (
        <div className="flex flex-col xl:flex-row items-start gap-6 md:gap-12">
            {/* Quote */}
            <div className="basis-[35%]">
                <div className="mb-8">
                    <img src="/quote.png" alt="quote" className="w-8 md:w-12" />
                </div>
                <blockquote className="text-3xl md:text-5xl lg:text-6xl font-[900] leading-[100%] px-10">
                    A World where{" "}
                    <span className="text-primary">EVERYONE has</span> the
                    <span className="text-primary"> opportunity</span> to fulfil
                    their potential
                </blockquote>
                <div className="mt-8 flex justify-end">
                    <img
                        src="/quote.png"
                        alt="quote"
                        className="w-8 md:w-12 rotate-180"
                    />
                </div>
            </div>

            {/* Image */}
            <div className="basis-[65%]">
                <div className="relative">
                    <img src={Discussion} alt="discussion" />
                    {/* Apply Card */}
                    <div className="absolute bottom-[-100px] md:bottom-[-120px] right-[-20px] md:right-[-60px] flex flex-col md:flex-row justify-center md:justify-around items-center gap-3 md:gap-10 bg-surface px-2 py-4 md:px-6 md:py-10 w-3/4 md:w-3xl">
                        <p className="flex-1 text-lg md:text-4xl text-primary font-[900] px-4 md:px-0">
                            There's Still Time to Apply for September 2025
                        </p>
                        <div>
                            <PrimaryButton content="View Courses"></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSectionRight;
