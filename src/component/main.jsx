// Main.js
import React from 'react';

const Main = ({ isVisible, toggleVisibility, buttonText }) => {
    return (
        <div className="relative">
            <button onClick={toggleVisibility} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg absolute top-0 left-0 mt-6 ml-6 z-10">
                {buttonText}
            </button>
            {isVisible && (
                <div>
                    {/* Add the rest of your main content here */}
                </div>
            )}
        </div>
    );
};

export default Main;
