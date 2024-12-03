import { Header, Logo, Home, Scoreboard } from "@/exports";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    useEffect( () => {
        const setFavicon = () => {
            const link =
              document.querySelector("link[rel~='icon']") ||
              document.createElement("link");
            link.rel = "icon";
            link.href = Logo;
          
            if (!link.parentNode) {
              document.head.appendChild(link);
            }
        };

        setFavicon()
    })
    return (
        <Router>
            <Header/>

            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/Scoreboard" exact Component={Scoreboard} />
            </Routes>
        </Router>
    );
}

export default App;
