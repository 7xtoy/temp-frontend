import { Buzz } from "@/exports"
import { motion } from "framer-motion"
import { useState } from "react"

const FlyingBuzz = () => {
    const [key, setKey] = useState(0)

    const animations = [
        {
            "initial": {
                top: "-50%",
                left: "-50%",
                rotateZ: "90deg"
            },
            "animate": {
                top: "150%",
                left: "150%",
                rotateZ: "90deg"
            }
        },
        {
            "initial": {
                top: "-50%",
                right: "-50%",
                rotateZ: "-180deg"
            },
            "animate": {
                top: "150%",
                right: "150%",
                rotateZ: "-180deg"
            }
        },
        {
            "initial": {
                bottom: "-50%",
                left: "25%",
            },
            "animate": {
                bottom: "150%",
                left: "50%",
            }
        }
    ]


    return (
        <div className="fixed inset-0 z-[-1]">
            <motion.img 
                key={key}
                src={Buzz}
                alt="Buzz" 
                className="pointer-events-none select-none w-20 absolute"
                initial={animations[key].initial}
                animate={animations[key].animate}
                transition={{
                    duration: 10
                }}
                onAnimationComplete={() => setKey(prevKey => prevKey == animations.length - 1 ? 0 : prevKey + 1)}
            />
        </div>
  )
}

export default FlyingBuzz;