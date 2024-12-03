import { useEffect } from 'react'
import { FlyingBuzz, Woody, HamsterGame, ContentWrapper, ScoreboardData, ToyTitle, Logo } from '@/exports'
import clsx from 'clsx'

const PodiumTab = ({name, points, place}) => {
    const medals = {
        first: "🥇",
        second: "🥈",
        third: "🥉",
    }

    return (
        <div className={clsx(
            "flex justify-between p-3",
            {
                "relative rounded-3xl border-[3px]": place <= 3,
                "bg-gradient-to-br border-yellow-500 from-yellow-200 via-yellow-300 to-pastel-400": place === 1,
                "bg-gradient-to-br border-slate-200 from-slate-300 via-stone-300 to-neutral-400": place === 2,
                "bg-gradient-to-br border-yellow-500 from-yellow-600 via-amber-700 to-yellow-700": place === 3,
            }
        )}>
            {place === 1 && (
                <p className={clsx(
                    "absolute left-0 top-0 -translate-x-1/4 -translate-y-2/3 -rotate-12 group-hover:rotate-[-15deg] transition-transform",
                    "shadow-lg border-yellow-500 border-2 bg-pastel-400 px-3 py-2 rounded-lg font-display text-sm text-yellow-600",
                )}>GouzyChampion</p>
            )}
            <div className="flex gap-2 items-center">
                <span className={clsx(
                    "text-3xl",
                    {
                        "font-display text-pastel-400": place > 3
                    }
                )}>
                    {place === 1 ? medals.first : place === 2 ? medals.second : place === 3 ? medals.third : place}
                </span>
                <span className="text-lg">{name}</span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text-3xl">{points}</span>
                <span className="rounded-full flex items-center justify-center p-1 border-2 border-amber-400 bg-pastel-400 shadow-[inset_2px_2px_2px_2px_rgba(0,0,0,0.2)]">
                    <img src={Logo} alt="Gouzy Coin" className="w-6"/>
                </span>
            </div>
        </div>
    )
}

const ScoreboardComponent = () => {
    const scores = ScoreboardData.scoreboard // .name, .points
    const sortedScores = scores.sort( (one, two) => two.points - one.points)

    return (
        <section
            className="flex flex-col w-full lg:w-3/5 md:w-3/4 gap-28 text-white"
        >

            <div className="flex flex-col">
                <ToyTitle title={"Scoreboard"} className="text-6xl mb-6" />
                <img src={Woody} alt="Woody" className="w-32" />
                <div className={clsx(
                    "group relative w-full border-4 rounded-xl border-pastel-400 flex flex-col gap-2 p-8",
                    "bg-gradient-to-br from-sky-300 via-blue-400 to-teal-400 hover:bg-opacity-50 transition-opacity"
                )}>
                    {sortedScores.length === 0 && (
                        <p className="text-center font-display text-2xl">Ooops... Il semble qu'aucun utilisateur n'a gagné de points pour l'instant. Devenez le premier possesseur de GouzyCoins en réalisant les défis 7x Toy Story!</p>
                    )}
                    {sortedScores.length >= 1 && (
                        <PodiumTab name={sortedScores[0].name} points={sortedScores[0].points} place={1} />
                    )}
                    {sortedScores.length >= 2 && (
                        <PodiumTab name={sortedScores[1].name} points={sortedScores[1].points} place={2} />
                    )}
                    {sortedScores.length >= 3 && (
                        <PodiumTab name={sortedScores[2].name} points={sortedScores[2].points} place={3} />
                    )}
                    {sortedScores.length >= 4 && (
                        <>
                            <div className="h-[3px] rounded-full w-3/4 mx-auto bg-yellow-500 my-4"></div>  

                            {sortedScores.slice(3, 9).map( (player, index) => (
                                <PodiumTab name={player.name} points={player.points} place={index + 4} />
                            ))}                      
                        </>
                    )}
                </div>
            </div>
            
        </section>
    )
}
 
const Scoreboard = () => {
    useEffect( () => {
        document.title = "Scoreboard 7x Toy Story"
    }, [])

    return (
        <>
            <FlyingBuzz />
            <HamsterGame/>
            <ContentWrapper>
                <ScoreboardComponent />
            </ContentWrapper>
        </>
    )
}

export default Scoreboard