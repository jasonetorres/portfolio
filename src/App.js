import React from 'react';
import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Poss, Header, GPT3, Feature } from './containers';
import './App.css';


const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <GPT3 />
        <Feature />
        <Poss />
        <Blog />
        <Footer />
    </div>
);

export default App;