// About.js
import React, { useState } from 'react';
import Header from '../component/header';
import Main from '../component/main';

const About = () => {
    const [showText, setShowText] = useState(false);

    const toggleAboutTextVisibility = () => {
        setShowText(!showText);
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="bg-cyan-500 text-white min-h-screen flex flex-col">
                <Main isVisible={showText} toggleVisibility={toggleAboutTextVisibility} buttonText={showText ? "Hide About" : "Show About"} />
                <div className={`text-center flex-grow flex flex-col justify-center items-center transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-4xl font-bold mb-4 mt-5">Rimuru Tempest</p>
                    <img src="https://i.pinimg.com/736x/17/0a/db/170adbda4075701931a726178b30f3b5.jpg" alt="Rimuru Tempest" className="mx-auto my-4 w-[400px]  h-[550px]" />
                    <p className="text-lg mb-8">
                        The main protagonist of the series and Founder as well as Chancellor and King of the monster nation known as the Jura-Tempest Federation.
                        Originally Mikami Satoru, a 37-year-old general contractor, he was stabbed by a passing robber while protecting one of his co-workers and reincarnated in a new world as a slime, one of the lowest monsters on the food chain.
                        In spite of the situations he finds himself in, he often tends to be very easygoing, yet calculating and cautious.
                        A pacifist at heart, he tries to avoid casualties and save people if possible and wishes to maintain good relations with humans.
                    </p>
                    <div className={`${showText ? 'opacity-100' : 'opacity-0'}`}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
