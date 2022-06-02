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
                <Header/>
                <main id='page'>
                    <div className='container'>
                        <Routes>
                            <Route path="/"
                                   element={<Home/>}/>
                            <Route path="/subreddit"
                                   element={<Post/>}/>
                            <Route path="/subreddit/:subredditId"
                                   element={<Post/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
