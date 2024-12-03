import { Header, ContentWrapper, Home, ToyTitle, FlyingBuzz, Scoreboard } from "@/exports";
import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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
