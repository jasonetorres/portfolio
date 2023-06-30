import React from 'react';
import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Poss, Header, GPT3, Features } from './containers';
import './App.css';


const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <GPT3 />
        <Features />
        <Poss />
        <Blog />
        <Footer />

    </div>
);

export default App;