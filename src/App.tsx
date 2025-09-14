import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import FeatureNav from "./shared/FeatureNav";

function App() {
    return (
        <div className="max-w-[1536px] mx-auto p-4 text-white">
            <Header />
            <main className="space-y-48">
                <Hero />
                <FeatureNav />
            </main>
        </div>
    );
}

export default App;
