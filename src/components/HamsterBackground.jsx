import clsx from "clsx"
import { Hamster, Explosion, ToyTitle } from "@/exports"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export const FallingHamster = ({explosionRef, setCounter}) => {
    const hamsterTimeout = 500
    const getRandomLeftOffset = () => Math.round(Math.random() * 80 + 10)

    const imgRef = useRef(null)

    const [isClicked, setIsClicked] = useState(false)
    const [durationMultiplier, setDurationMultiplier] = useState(1)

    const [leftOffset, setLeftOffset] = useState(getRandomLeftOffset())
    const [key, setKey] = useState(0)

    const incrementKey = () => {
        setKey(prevKey => prevKey + 1)
    }

    const setRandomLeftOffset = () => {
        setLeftOffset(getRandomLeftOffset())
    }

    const onAnimationComplete = () => {
        let timeout = 0
        if(isClicked) {
            setIsClicked(false)
            timeout = hamsterTimeout
        }

        setTimeout( () => {
            explosionRef.current.style.display = "none"
            setRandomLeftOffset()
            incrementKey()
        }, timeout)
    }

    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1)
        setDurationMultiplier(prevDurationMultiplier => prevDurationMultiplier * 0.95)

        if (!isClicked) {
            setIsClicked(true)
            console.log()

            if (imgRef && imgRef.current) {
                let style = window.getComputedStyle(imgRef.current)
                let bottom = style.bottom

                if (explosionRef && explosionRef.current) {
                    bottom = (parseFloat(bottom, 10) / window.innerHeight) * 100
                    console.log(bottom)
                    explosionRef.current.style.top = `${bottom}%`
                    explosionRef.current.style.left = `${leftOffset}%`
                    explosionRef.current.style.display = "block"
                }
            }

            setTimeout(() => onAnimationComplete(), hamsterTimeout)
        }
    }

    return (
        <motion.div
            ref={imgRef}
            key={key}
            onClick={() => handleClick()}
            className={clsx("w-24 h-fit absolute cursor-crosshair select-none z-[999]", {"hidden": isClicked})}
            initial={{
                top: "-15%",
                left: `${leftOffset}%`,
                rotateX: 0                   
            }}
            animate={{
                top: "auto",
                left: `${leftOffset}%`,
                bottom: "-15%",
                rotateZ: 360,
            }}
            transition={{
                duration: 5 * durationMultiplier,
                repeat: 0,
                ease: "easeIn",
            }}
            onAnimationComplete={() => onAnimationComplete()}
        >
            <img src={Hamster} alt="Just a hamster..." className="h-fit w-full pointer-events-none z-[999]"/>
        </motion.div>
    )
}

// const HamsterBackground = () => {
//     const explosionRef = useRef(null)
//     const [counter, setCounter] = useState(0)

//     return (
//         <div className={clsx(
//             "fixed inset-0"
//         )}>
//             <FallingHamster explosionRef={explosionRef} setCounter={setCounter}/>
//             <img 
//                 ref={explosionRef}
//                 src={Explosion} 
//                 className={"w-24 absolute top-auto -translate-y-1/2 select-none pointer-events-none z-[999]"}
//                 style={{display: "none"}}
//             />

//             <ToyTitle title={`Hamster count: ${counter}`}  className="text-3xl absolute bottom-0"/>
//         </div>
//     )
// }

// export default HamsterBackground