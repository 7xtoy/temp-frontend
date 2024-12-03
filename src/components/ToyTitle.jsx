import clsx from "clsx";

const ToyTitle = ({ title, className="", link=false}) => {
    // const getTrend = () => Math.random() < 0.5 ? -1 : 1;
    // const getRandRotation = () => Math.ceil((Math.random() * 10)) * getTrend()

    const trend = [-2,-4,-6,4,9,-9,-9,-8,2,1,-3,-4,-9,3,8,-7,-9,-6,-4,-6,-4,-10,4,2,-4,7,-7,10,-5,-10]

    return (
        <div className={clsx("flex flex-nowrap font-display text-border text-pastel-400 group", className)}>
            {[...title].map((character, index) => (
                <span
                    key={index}
                    className={clsx(
                        "block tracking-[-0.1em]",
                        {
                            "group-hover:text-toy-red-400 transition-colors": link
                        }
                    )}
                    style={{
                        rotate: `${trend[index > trend.length ? index - trend.length : index]}deg`,
                        transitionDuration: `${200 + 50 * index}ms`
                    }}
                >   
                    {character === " " ? "\u00A0\u00A0" : character}
                </span>
            ))}
        </div>
    );
};

export default ToyTitle;
