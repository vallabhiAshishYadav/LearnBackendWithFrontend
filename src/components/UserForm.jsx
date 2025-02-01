import React, { useState } from "react";

const UserForm = () => {
    // State to manage multiple rows of input fields
    const [formData, setFormData] = useState([
        {
            name: "",
            age: "",
            mobile: "",
            email: "",
            address: "",
            country: "",
            country2: "",
            officeName: ""
        }
    ]);

    // Function to handle changes in input fields
    const handleChange = (index, e) => {
        const { name, value } = e.target;
        setFormData((prevData) =>
            prevData.map((row, i) =>
                i === index ? { ...row, [name]: value } : row
            )
        );
    };

    // Function to add a new row
    const addRow = () => {
        setFormData((prevData) => [
            ...prevData,
            {
                name: "",
                age: "",
                mobile: "",
                email: "",
                address: "",
                country: "",
                country2: "",
                officeName: ""
            }
        ]);
    };

    // Function to remove a row
    const removeRow = (index) => {
        setFormData((prevData) => prevData.filter((_, i) => i !== index));
    };

    // Function to handle form submission
    const handleSubmit = () => {
        console.log("Form data:", formData);
    };

    return (
        <div className=" ms-40">
            <div className="bg-gray-100 flex items-center justify-center ">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-full overflow-x-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        User Details Form
                    </h2>

                    {/* Render each row */}
                    {formData.map((row, index) => (
                        <div key={index} className="flex space-x-4 mb-4" style={{ minWidth: "1200px" }}>
                            {/* Name */}
                            <div className="flex-1 min-w-[150px]">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    name="name"
                                    value={row.name}
                                    onChange={(e) => handleChange(index, e)}
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Name"
                                />
                            </div>

                            {/* Age */}
                            <div className="flex-1 min-w-[100px]">
                                <label className="block text-sm font-medium text-gray-700">Age</label>
                                <input
                                    name="age"
                                    value={row.age}
                                    onChange={(e) => handleChange(index, e)}
                                    type="number"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Age"
                                />
                            </div>

                            {/* Mobile */}
                            <div className="flex-1 min-w-[150px]">
                                <label className="block text-sm font-medium text-gray-700">Mobile</label>
                                <input
                                    name="mobile"
                                    value={row.mobile}
                                    onChange={(e) => handleChange(index, e)}
                                    type="tel"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Mobile"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex-1 min-w-[200px]">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    name="email"
                                    value={row.email}
                                    onChange={(e) => handleChange(index, e)}
                                    type="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Email"
                                />
                            </div>

                            {/* Address */}
                            <div className="flex-1 min-w-[250px]">
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    name="address"
                                    value={row.address}
                                    onChange={(e) => handleChange(index, e)}
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Address"
                                />
                            </div>

                            {/* Country */}
                            <div className="flex-1 min-w-[150px]">
                                <label className="block text-sm font-medium text-gray-700">Country</label>
                                <input
                                    name="country"
                                    value={row.country}
                                    onChange={(e) => handleChange(index, e)}
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Country"
                                />
                            </div>

                            {/* Country2 */}
                            <div className="flex-1 min-w-[150px]">
                                <label className="block text-sm font-medium text-gray-700">Country2</label>
                                <input
                                    name="country2"
                                    value={row.country2}
                                    onChange={(e) => handleChange(index, e)}
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Country2"
                                />
                            </div>

                            {/* Office Name */}
                            <div className="flex-1 min-w-[200px]">
                                <label className="block text-sm font-medium text-gray-700">Office Name</label>
                                <input
                                    name="officeName"
                                    value={row.officeName}
                                    onChange={(e) => handleChange(index, e)}
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Office Name"
                                />
                            </div>

                            {/* Remove Button */}
                            <div className="flex-1 min-w-[200px]">
                                <button
                                    onClick={() => removeRow(index)}
                                    className="mt-6 text-red-600 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Add More Details Button */}
                    <div className="mt-4">
                        <button
                            type="button"
                            onClick={addRow}
                            className="w-auto bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            Add More Details
                        </button>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default UserForm;
