import CanaryWharf from "../../assets/images/campuses/canary-wharf.jpg";
import Borough from "../../assets/images/campuses/borough.jpg";
import Manchester from "../../assets/images/campuses/manchester.jpg";
import RightArrow from "../../assets/icons/right-arrow.png";

const Campuses = () => {
    return (
        <div className="relative w-screen bg-surface mt-24 md:mt-72 p-4">
            {/* Campus Name Badges */}
            <h3 className="campus-badge bg-fuchsia md:absolute md:top-40 md:left-30 md:-rotate-15 z-50">
                Canary Wharf
            </h3>
            <h3 className="campus-badge bg-[#00FFD2] text-surface md:absolute md:top-70 md:left-[80%] md:rotate-15 z-50">
                Borough
            </h3>
            <h3 className="campus-badge bg-primary text-surface md:absolute md:top-90 md:left-30 md:rotate-15 mb-4 md:mb-0 z-50">
                Manchester
            </h3>

            {/* Campus Images */}
            <div className="relative md:top-[-100px]">
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-2">
                    <div>
                        <div className="flex items-center gap-1 bg-primary text-surface px-3 py-1 ">
                            <h3 className="font-[900] uppercase">
                                Canary Wharf
                            </h3>
                            <img
                                src={RightArrow}
                                alt="right-arrow"
                                className="w-[14px] ml-4"
                            />
                        </div>
                        <img
                            src={CanaryWharf}
                            alt="canary-wharf"
                            className="w-full md:w-60 h-[474px] object-cover"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-1 bg-primary text-surface px-3 py-1 ">
                            <h3 className="font-[900] uppercase">Borough</h3>
                            <img
                                src={RightArrow}
                                alt="right-arrow"
                                className="w-[14px] ml-4"
                            />
                        </div>
                        <img
                            src={Borough}
                            alt="borough"
                            className="w-full md:w-60 h-[474px] object-cover"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-1 bg-primary text-surface px-3 py-1 ">
                            <h3 className="font-[900] uppercase">Manchester</h3>
                            <img
                                src={RightArrow}
                                alt="right-arrow"
                                className="w-[14px] ml-4"
                            />
                        </div>
                        <img
                            src={Manchester}
                            alt="manchester"
                            className="w-full md:w-60 h-[474px] object-cover"
                        />
                    </div>
                </div>
                <div className="text-center mt-8">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl inline-block font-[900] leading-[100%] after:content-[''] after:block lg:after:h-[20px] after:h-[10px] after:bg-primary lg:after:mt-[-26px] after:mt-[-10px]">
                        Campuses
                    </h2>
                    <p className="text-lg md:w-3/4 lg:w-1/3 mx-auto mt-8">
                        We have multiple locations across the UK, all
                        strategically situated in vibrant city centers and
                        easily accessible by public transport.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Campuses;
