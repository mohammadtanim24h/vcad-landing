import PrimaryButton from "../../shared/PrimaryButton";
import HeroImage from "../../assets/images/hero/hero.png";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center mt-8 lg:mt-0 gap-6 md:gap-0">
            <div className="basis-1/2 space-y-4 lg:space-y-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-[900] leading-[100%] uppercase">
                    Welcome to VCAD
                </h1>
                <p className="text-lg font-[400] leading-6">
                    Our team at Victoria College of Arts and Design is
                    passionate about creating innovative projects and generating
                    new ideas. We work with a variety of experts and esteemed
                    companies using a collaborative approach. Located in
                    London's Design District, we have valuable connections
                    within our industry. Search our latest courses.
                </p>
                <PrimaryButton content="Apply Now" />
            </div>
            <div className="basis-1/2">
                <img src={HeroImage} alt="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
