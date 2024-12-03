import clsx from "clsx";
import { LogoLong, ToyTitle } from "@/exports";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header
            className={clsx(
                "sticky w-full top-0 flex flex-col items-center justify-center py-3",
                "bg-sky-300 border-b-4 border-sky-200 shadow-xl z-[1000]"
            )}
        >
            <div className="flex items-center justify-center gap-12">
                <Link to="/"><ToyTitle title={"Évènements"} className="text-4xl" link={true}/></Link>
                
                <img src={LogoLong} alt="7x Toy Story" className="w-64 h-auto" />

                <Link to="/Scoreboard"><ToyTitle title={"Scoreboard"} className="text-4xl" link={true}/></Link>
            </div>
        </header>
    );
};

export default Header;
