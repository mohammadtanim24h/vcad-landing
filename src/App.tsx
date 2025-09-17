import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import FeatureNav from "./shared/FeatureNav";
import Courses from "./components/courses/Courses";
import Campuses from "./components/campuses/Campuses";
import StudentTestimonials from "./components/studentTestimonials/StudentTestimonials";
import { Suspense } from "react";

function App() {
    return (
        <div className="text-white">
            <Header />
            <main className="space-y-16 md:space-y-24 lg:space-y-48">
                <Hero />
                <FeatureNav />
                <Courses />
                <Campuses />

                <Suspense
                    fallback={
                        <div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl inline-block font-[900] leading-[100%]">
                                Student{" "}
                                <span className="after:content-[''] after:block lg:after:h-[20px] after:h-[10px] after:bg-primary lg:after:mt-[-26px] after:mt-[-10px]">
                                    Testimonials
                                </span>
                            </h2>
                            <p className="text-primary font-[900] mt-6 text-center">
                                Loading student testimonials...
                            </p>
                        </div>
                    }
                >
                    <StudentTestimonials />
                </Suspense>
            </main>
        </div>
    );
}

export default App;
