import { Header, ContentWrapper, Home, ToyTitle, HamsterGame, FlyingBuzz } from "@/exports";
import { useState, useRef } from "react";

function App() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <Header counter={counter}/>
            <FlyingBuzz />
            <HamsterGame setCounter={setCounter}/>
            <ContentWrapper>
                <Home />
            </ContentWrapper>
        </>
    );
}

export default App;
