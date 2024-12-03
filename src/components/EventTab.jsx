import clsx from "clsx"
import { ToyTitle, ChristmasBackground, Woody } from "@/exports";
import { format } from "date-fns"
import { GeoAltFill } from "react-bootstrap-icons";
import { AdventData } from "../exports";

const getEventDateString = (when) => {
    let start = new Date(when.start)
    let end = new Date(when.end)

    if (when.start === "" || when.end === "") {
        return "La date de cet évènement sera bientôt connue!"
    } else if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return `${when.start} ${when.end}`
    } else {
        if (start.getDate() == end.getDate()) {
            return `Le ${format(start, 'MM/dd')}, de ${format(start, 'HH:mm')} à ${format(end, 'HH:mm')}`
        } else {
            return `Du ${format(start, 'MM/dd HH:mm')} au ${format(end, 'MM/dd HH:mm')}`
        }
    }
}

const getRemainingDaysString = (start) => {
    start = new Date(start)
    let now = new Date()

    if (isNaN(start.getTime())) {
        return ""
    } else {
        let delta = - (now - start)
        let deltaDays = Math.ceil(delta / ( 1000 * 60 * 60 * 24))

        if (deltaDays == 0) {
            return "Aujourd'hui!"
        } else if (deltaDays == 1) {
            return "Demain!"
        } else if (deltaDays > 1) {
            return `Dans ${deltaDays} jours!`
        } else {
            return ""
        }
    }    
}

const EventTab = ({event, advent=false}) => {
    const remainingDaysString = getRemainingDaysString(event.when.start)

    return (
        <>
            {advent && (
                <img src={Woody} alt="Woody" className="w-32" />
            )}
            <article className={clsx(
                    "group relative w-full border-4 rounded-xl border-pastel-400 flex flex-col gap-2 px-4 pt-4 pb-8",
                    {
                        "border-pastel-400": !advent,
                        "bg-gradient-to-br from-sky-300 via-blue-400 to-teal-400 hover:bg-opacity-50 transition-opacity": !advent,
                        "text-white border-pastel-400 shadow-2xl shadow-pastel-400/50 hover:shadow-pastel-400 transition-all duration-300": advent
                    }
                )}
                style={advent ? {
                    backgroundImage: `url(${ChristmasBackground}`,
                    backgroundRepeat: "repeat"
                } : {}}
            >
                {!advent && (
                    <div className={clsx(
                        "absolute inset-0 rounded-xl",
                        "bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    )} />
                )}

                { ( (!advent && remainingDaysString !== "") || advent ) && (
                    <div className={clsx(
                        "absolute right-0 top-0 translate-x-1/3 -translate-y-1/2 rotate-12 group-hover:rotate-[15deg] transition-transform",
                        "shadow-lg bg-pastel-400 px-3 py-2 rounded-lg font-display",
                        {
                            "text-4xl text-toy-red-400": advent
                        }
                    )}>{advent ? `J-${AdventData.advent.day}` : remainingDaysString}</div>
                )}

                <div className="relative flex gap-4">
                    <img src={event.icon_who} alt={event.name} className="size-16 rounded-full border-2 border-pastel-400 pointer-events-none" />

                    <div className="flex flex-col gap-2">
                        <ToyTitle title={event.name} className={clsx(
                            {
                                "text-3xl": !advent,
                                "text-pastel-400 text-4xl": advent
                            }
                        )}/>

                        <div className={clsx(
                            "flex gap-2 items-center text-sm w-fit",
                            {
                                "border-[3px] border-pastel-400 bg-toy-red-400 px-3 py-2 rounded-lg": advent
                            }
                            )}>
                            <p>{event.who}</p>
                            <span className="size-1 bg-pastel-400 rounded-full" />
                            <p>{getEventDateString(event.when)}</p>
                            <span className="size-1 bg-pastel-400 rounded-full" />
                            <div className="flex gap-2 items-center">
                                {<GeoAltFill className="text-pastel-400" size={12}/>}
                                <span>
                                {event.place}
                                </span>
                            </div>
                        </div>

                        <p className="text-md">{event.description}</p>


                    </div>
                </div>
            </article>
        </>
    )
}

export default EventTab