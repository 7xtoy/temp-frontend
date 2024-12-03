import clsx from "clsx";
import { LogoLong, ToyTitle } from "@/exports";


const Header = ({counter}) => {
    return (
        <header
            className={clsx(
                "sticky w-full top-0 flex flex-col items-center justify-center py-3",
                "bg-sky-300 border-b-4 border-sky-200 shadow-xl z-[1000]"
            )}
        >
            <ToyTitle title={`Hamster count: ${counter}`}  className="text-3xl"/>
        
            <div className="flex items-center justify-center gap-12">
                <a href="TODO LINK EVENEMENTS" className="text-4xl">
                    <ToyTitle title={"Évènements"} link={true}/>
                </a>
                
                <img src={LogoLong} alt="7x Toy Story" className="w-64 h-auto" />

                <a href="TODO LINK SCOREBOARD" className="text-4xl">
                    <ToyTitle title={"Scoreboard"} link={true}/>
                </a>
            </div>
        </header>
    );
};

export default Header;
