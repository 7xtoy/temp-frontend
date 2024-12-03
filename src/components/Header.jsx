import clsx from "clsx";
import { Logo, LogoLong, ToyTitle } from "@/exports";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header
            className={clsx(
                "sticky w-full top-0 flex flex-col items-center justify-center md:py-3 py-1",
                "bg-sky-300 border-b-4 border-sky-200 shadow-xl z-[1000]"
            )}
        >
            <div className="w-full flex items-center md:justify-center md:gap-12 justify-around">

                <Link to="/"><ToyTitle title={"Évènements"} className="lg:text-4xl md:text-3xl text-xl" link={true}/></Link>
                
                <img src={Logo} alt="7x Toy Story" className="w-10 h-auto md:hidden block" />
                <img src={LogoLong} alt="7x Toy Story" className="w-64 h-auto md:block hidden" />

                <Link to="/Scoreboard"><ToyTitle title={"Scoreboard"} className="lg:text-4xl md:text-3xl text-xl" link={true}/></Link>
            </div>
        </header>
    );
};

export default Header;
