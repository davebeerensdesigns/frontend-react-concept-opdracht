import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Post from "./pages/post/Post";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <main id='page'>
                    <Routes>
                        <Route path="/"
                               element={<Home/>}/>
                        <Route path="/subreddit/:subredditId"
                               element={<Post/>}/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
