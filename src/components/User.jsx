import { useState } from "react";
import axios from "axios";

function User() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Store selected file
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("password", formData.password);
        if (file) {
            data.append("profilePic", file); // Append file to FormData
        }

        try {
            const response = await axios.post("http://localhost:5000/users/create", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("User created:", response.data);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-[90vh] bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="shadow-2xl bg-white rounded-2xl p-8 w-96">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Details</h1>
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
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Upload Profile Picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border border-gray-300 rounded-lg w-full px-4 py-2 cursor-pointer"
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
    );
}

export default User;
