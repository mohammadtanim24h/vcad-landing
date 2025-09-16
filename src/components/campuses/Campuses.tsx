import CanaryWharf from "../../assets/images/campuses/canary-wharf.jpg";
import Borough from "../../assets/images/campuses/borough.jpg";
import Manchester from "../../assets/images/campuses/manchester.jpg";
import RightArrow from "../../assets/icons/right-arrow.png";

const Campuses = () => {
    return (
        <div className="relative bg-surface mt-24 md:mt-72">
            {/* Campus Name Badges */}
            {/* <h3 className="campus-badge bg-fuchsia absolute top-0 left-0">
                Canary Wharf
            </h3>
            <h3 className="campus-badge bg-primary absolute top-0 left-1/2">
                Borough
            </h3>
            <h3 className="campus-badge bg-[#00FFD2] absolute top-0 right-0">
                Manchester
            </h3> */}

            {/* Campus Images */}
            <div className="flex justify-center gap-2 relative top-[-100px]">
                <div>
                    <div className="flex items-center gap-1 bg-primary text-surface px-3 py-1 ">
                        <h3 className="font-[900] uppercase">Canary Wharf</h3>
                        <img
                            src={RightArrow}
                            alt="right-arrow"
                            className="w-[14px] ml-4"
                        />
                    </div>
                    <img
                        src={CanaryWharf}
                        alt="canary-wharf"
                        className="w-60 h-[474px] object-cover"
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
                        className="w-60 h-[474px] object-cover"
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
                        className="w-60 h-[474px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Campuses;
