import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import LinkedIn from "../../assets/icons/linkedin.png";

const quotes = [
    "Learning here feels inspiring.",
    "Best decision I ever made.",
    "Growth happens every single day.",
    "Confidence through constant practice.",
];

// Generate a random age between 20-26
const getRandomAge = () => {
    return Math.floor(Math.random() * (26 - 20 + 1)) + 20;
};

// Generate a random course
const getRandomCourse = () => {
    return ["Photography", "Cooking", "Painting", "Coding"][
        Math.floor(Math.random() * 4)
    ];
};

const StudentTestimonialCard = ({
    name,
    image,
}: {
    name: string;
    image: string;
}) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative w-[240px] h-[400px] md:w-[400px] md:h-[560px] rotate-[13deg]">
                {/* Card container */}
                <div className="absolute inset-0 border-2 border-fuchsia-500 overflow-hidden">
                    {/* Background image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-surface/70 z-10" />

                    {/* Content */}
                    <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white rotate-[-13deg] space-y-4">
                        <p className="text-2xl uppercase font-[900] leading-snug">
                            “{" "}
                            {quotes[Math.floor(Math.random() * quotes.length)]}{" "}
                            “
                        </p>
                        <p className="text-sm uppercase">
                            {name} \ {getRandomAge()} \ {getRandomCourse()}
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-4 text-lg">
                            <a href="#">
                                <img src={Facebook} alt="facebook" />
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="instagram" />
                            </a>
                            <a href="#">
                                <img src={LinkedIn} alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentTestimonialCard;
