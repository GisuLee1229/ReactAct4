// Home.js
import React, { useState } from 'react';
import Header from '../component/header';
import Main from '../component/main';

const Home = () => {
    const [showText, setShowText] = useState(false);

    const toggleHomeTextVisibility = () => {
        setShowText(!showText);
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="bg-cyan-500 text-white min-h-screen flex flex-col">
                <Main isVisible={showText} toggleVisibility={toggleHomeTextVisibility} buttonText={showText ? "Hide Home" : "Show Home"} />
                <div className={`text-center flex-grow flex flex-col justify-center items-center transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-4xl font-bold mb-4 mt-5">Welcome to My Website</p>
                    <p className="text-lg mb-8">
                        This website is all about an anime called "Tensei shitara Slime Datta Ken" (That Time I Got Reincarnated as a Slime). Enjoy my website.
                    </p>
                    <div className={`${showText ? 'opacity-100' : 'opacity-0'}`}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
