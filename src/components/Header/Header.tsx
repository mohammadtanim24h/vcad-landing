import Hamburger from "../../assets/icons/hamburger.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center maximum-width">
            {/* Logo */}
            <div className="w-[184px]">
                <img src="/logo.png" alt="logo" />
            </div>
            {/* Hamburger menu */}
            <div className="w-6 h-6">
                <img src={Hamburger} alt="hamburger-menu" />
            </div>
        </header>
    );
};

export default Header;
