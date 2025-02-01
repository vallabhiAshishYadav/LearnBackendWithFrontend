import React from "react";

const UserProfile = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
                {/* Profile Header */}
                <div className="bg-blue-600 p-6">
                    <div className="flex items-center justify-center">
                        <img
                            src="https://via.placeholder.com/150" // Replace with your image URL
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-white"
                        />
                    </div>
                    <h2 className="text-center text-white text-2xl font-bold mt-4">
                        John Doe
                    </h2>
                    <p className="text-center text-blue-200">Software Engineer</p>
                </div>

                {/* Profile Details */}
                <div className="p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
                        <p className="text-gray-600 mt-1">
                            Passionate about building scalable web applications and solving
                            real-world problems with code.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                        <ul className="mt-1 text-gray-600">
                            <li>Email: john.doe@example.com</li>
                            <li>Phone: +1 (123) 456-7890</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                React
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                Tailwind CSS
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                JavaScript
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                Node.js
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-4 text-center">
                    <p className="text-gray-600 text-sm">
                        &copy; 2023 John Doe. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;