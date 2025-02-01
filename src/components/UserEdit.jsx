import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserEdit() {
    const { id } = useParams(); // Get user ID from URL
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/getlist/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.log("Error fetching user:", error);
            }
        };
        fetchUserData();
    }, [id]);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/users/edit/${id}`, formData);
            console.log("Response:", response);
        } catch (error) {
            console.log("Error updating user:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-[90vh] bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="shadow-2xl bg-white rounded-2xl p-8 w-96">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Edit User</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Name</label>
                        <input
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                            className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg w-full px-4 py-2"
                            type="text"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            // disabled
                            className="border border-gray-300 bg-gray-200 rounded-lg w-full px-4 py-2"
                            type="email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">New Password</label>
                        <input
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg w-full px-4 py-2"
                            type="password"
                            placeholder="Enter New Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserEdit;
