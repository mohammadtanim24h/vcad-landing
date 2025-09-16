import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import FeatureNav from "./shared/FeatureNav";
import Courses from "./components/courses/Courses";
import Campuses from "./components/campuses/Campuses";

function App() {
    return (
        <div className="text-white">
            <Header />
            <main className="space-y-16 md:space-y-24 lg:space-y-48">
                <Hero />
                <FeatureNav />
                <Courses />
                <Campuses />
            </main>
        </div>
    );
}

export default App;
