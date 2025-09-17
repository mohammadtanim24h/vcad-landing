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
                        <p className="text-primary font-[900]">
                            Loading student testimonials...
                        </p>
                    }
                >
                    <StudentTestimonials />
                </Suspense>
            </main>
        </div>
    );
}

export default App;
