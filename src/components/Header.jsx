import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const token = localStorage.getItem("authToken");
    console.log("token is ", token);
    const user = useSelector((state) => state.user.user);
    console.log("user is ------------", user);
    const [isDropdown, setIsDropdown] = useState(false);

    const handleDropdown = () => {
        setIsDropdown(!isDropdown);
    };
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setIsDropdown(!isDropdown);
    };

    return (
        <>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link to="/user" className="text-sm/6 font-semibold text-gray-900">
                            Form
                        </Link>
                        <Link to="/userlist" className="text-sm/6 font-semibold text-gray-900">
                            User List
                        </Link>
                        <Link to="/userprofile" className="text-sm/6 font-semibold text-gray-900">
                            User Profile
                        </Link>
                        <Link to="/userform" className="text-sm/6 font-semibold text-gray-900">
                            User Form
                        </Link>
                        <Link to="/familycat" className="text-sm/6 font-semibold text-gray-900">
                            Family Category
                        </Link>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Marketplace
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Company
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {token ? (
                            <h1
                                onClick={handleDropdown}
                                className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
                            >
                                Profile
                            </h1>
                        ) : (
                            <Link to="/userlogin" className="text-sm/6 font-semibold text-gray-900">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                        )}
                    </div>
                </nav>

                {isDropdown && (
                    <div
                        className="flex fixed top-16 right-16 z-50 justify-center items-center w-auto h-auto bg-opacity-50 p-4"
                    >
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700  p-4">
                            <div className=" space-y-4">
                                <img
                                    src={`http://localhost:5000/${user?.data.profilePic}`} // Concatenate base URL with profilePic filename
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full border-4 border-white"
                                />
                                <ul>
                                    <li>{user?.data.name}</li>
                                    <li>{user?.data.email}</li>
                                </ul>
                            </div>
                            <div className="flex mt-4 ">
                                <button
                                    onClick={handleLogout}
                                    type="button"
                                    className="text-white bg-red-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center "
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;
