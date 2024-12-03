import { Header, ContentWrapper, Home, ToyTitle, FallingHamster, Explosion } from "@/exports";
import { useState, useRef } from "react";

const Hamster = ({setCounter}) => {
    const explosionRef = useRef(null)

    return (
        <>
            <FallingHamster explosionRef={explosionRef} setCounter={setCounter}/>
            <img 
                ref={explosionRef}
                src={Explosion} 
                className={"w-24 absolute top-auto -translate-y-1/2 select-none pointer-events-none z-[999]"}
                style={{display: "none"}}
                />
        </>
    )
}

function App() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <Header counter={counter}/>
            <Hamster setCounter={setCounter}/>
            <ContentWrapper>
                <Home />
            </ContentWrapper>
        </>
    );
}

export default App;
