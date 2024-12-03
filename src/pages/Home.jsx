import { EventTab, ToyTitle, AdventData, CalendarData, FlyingBuzz, HamsterGame, ContentWrapper } from "@/exports"
import clsx from "clsx"
import { useEffect } from "react"

const HomeComponent = ({showIncomingEvents}) => {

    return (
        <section className={clsx(
            "w-full lg:w-3/5 md:w-3/4 flex flex-col gap-28"
        )}>
            <div className="flex flex-col">
                <ToyTitle title={`Calendrier de l'avent`} className={"lg:text-5xl sm:text-3xl text-3xl mb-6"} />
                <div className="flex flex-col">
                    <EventTab advent={true} event={AdventData.advent} />
                </div>
            </div>
            {showIncomingEvents && (
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
            )}
        </section>
    )
}

const Home = () => {
    const showIncomingEvents = true

    useEffect( () => {
        document.title = "7x Toy Story"
    }, [])

    return (
        <>
            <FlyingBuzz />
            <HamsterGame/>
            <ContentWrapper>
                <HomeComponent showIncomingEvents={showIncomingEvents}/>
            </ContentWrapper>
        </>
    )
}

export default Home