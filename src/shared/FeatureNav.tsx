const FeatureNav = () => {
    const features = [
        "Courses",
        "Campuses",
        "Partner institutions",
        "Student testimonials",
        "Stories",
    ];
    return (
        <nav className="flex justify-center">
            <ul className="flex space-x-4 w-max uppercase p-6 border border-fuchsia">
                {features.map((feature, index) => (
                    <li
                        className={`cursor-pointer ${
                            index === 0 ? "font-[900]" : "font-[400]"
                        }`}
                        key={feature}
                    >
                        {feature}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default FeatureNav;
