import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-gray-200">
            <div className="text-center bg-white p-10 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
                <h1 className="text-9xl font-bold text-gray-800 animate-pulse">404</h1>
                <p className="mt-4 text-lg text-gray-600">Oops! The page you are looking for doesn't exist.</p>
                <a 
                    href="/" 
                    className="inline-block mt-6 px-8 py-4 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 transition-transform duration-300 hover:-translate-y-1"
                >
                    Go back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;