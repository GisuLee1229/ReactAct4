import React, { useState } from 'react';
import Header from '../component/header';

const Contact = () => {
    const [showText, setShowText] = useState(false);

    const toggleAllTextVisibility = () => {
        setShowText(!showText);
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="bg-cyan-500 text-white min-h-screen flex flex-col justify-center items-center">

                <button onClick={toggleAllTextVisibility} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg absolute top-0 left-0 m-4 mt-28">
                    {showText ? "Hide Contact" : "Show Contact"}
                </button>
                <div className={`max-w-lg w-full mx-auto px-6 py-12 bg-gray-800 rounded-md shadow-lg transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-700 text-white" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-700 text-white" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                            <textarea id="message" name="message" rows="4" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-700 text-white" placeholder="Enter your message"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
