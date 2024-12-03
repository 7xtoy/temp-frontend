import clsx from "clsx";
import { LogoLong, ToyTitle } from "@/exports";


const Header = () => {
    return (
        <header
            className={clsx(
                "fixed top-0 flex items-center justify-center gap-12 py-3 left-0 right-0",
                "bg-sky-300 border-b-4 border-sky-200 shadow-xl"
            )}
        >
            <a href="TODO LINK EVENEMENTS" className="text-4xl">
                <ToyTitle title={"Évènements"} />
            </a>
            
            <img src={LogoLong} alt="7x Toy Story" className="w-64 h-auto" />

            <a href="TODO LINK SCOREBOARD" className="text-4xl">
                <ToyTitle title={"Scoreboard"} />
            </a>
        </header>
    );
};

export default Header;
