import { EventTab, ToyTitle, AdventData, CalendarData } from "@/exports"
import clsx from "clsx"

const Home = () => {
    return (
        <section className={clsx(
            "w-full md:w-3/5 flex flex-col gap-28"
        )}>
            <div className="flex flex-col gap-8">
                <ToyTitle title={`Calendrier de l'avent`} className={"lg:text-5xl sm:text-3xl text-3xl mb-6"} />
                <div className="flex flex-col gap-8">
                    <EventTab advent={true} event={AdventData.advent} />
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <ToyTitle title={"Les évènements 7x Toy Story"} className={"lg:text-5xl sm:text-3xl text-3xl mb-6"} />
                <div className="flex flex-col gap-8">
                    {
                        CalendarData.events.map( (event, index) => (
                            <EventTab event={event} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Home