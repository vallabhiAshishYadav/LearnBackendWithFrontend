import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
function UserLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigation = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/users/login", formData);
            console.log("Response: ", res.data);
            dispatch(setUser(res.data))

            if (res.data.token) {
                localStorage.setItem("authToken", res.data.token); // Save token to localStorage
                alert(res.data.message);
                navigation("/landingpage", { state: res.data })
            } else {
                alert(res.data.error || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-[90vh] bg-gradient-to-br from-gray-100 to-gray-300">
                <div className="shadow-2xl bg-white rounded-2xl p-8 w-96">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Login</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="block text-gray-600 font-medium mb-1">Email</label>
                            <input
                                name="email"
                                onChange={handleChange}
                                value={formData.email}

                                className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg w-full px-4 py-2"
                                type="email"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">Password</label>
                            <input
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg w-full px-4 py-2"
                                type="password"
                                placeholder="Enter Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UserLogin;