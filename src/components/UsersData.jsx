import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersData() {
    const [getData, setGetData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 2; // Number of users per page

    const fetchUser = async (page) => {
        try {
            const response = await axios.get(`http://localhost:5000/users/getlist?p=${page}`);
            console.log("Response is", response.data);
            setGetData(response.data.users);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.log("Error fetching users:", error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            await axios.delete(`http://localhost:5000/users/delete/${id}`);
            setGetData((prevData) => prevData.filter((user) => user._id !== id));
            fetchUser(currentPage);
        } catch (error) {
            console.log("Error deleting user:", error);
        }
    };

    useEffect(() => {
        fetchUser(currentPage);
    }, [currentPage]);

    return (
        <div className="flex flex-col justify-center items-center h-[90vh] bg-gradient-to-br from-gray-100 to-gray-300">
            <h1 className="text-2xl font-bold mb-6">User List</h1>
            <table className="border-separate border-spacing-4 bg-white shadow-lg rounded-lg">
                <thead>
                    <tr>
                        <th className="text-left px-4 py-2 border-b">Name</th>
                        <th className="text-left px-4 py-2 border-b">Email</th>
                        <th className="px-4 py-2 border-b text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {getData.map((data) => (
                        <tr key={data._id} className="hover:bg-gray-100">
                            <td className="px-4 py-2">{data.name}</td>
                            <td className="px-4 py-2">{data.email}</td>
                            <td className="px-4 py-2 flex space-x-4">
                                <Link to={`/useredit/${data._id}`} className="text-blue-500 hover:underline">
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(data._id)} className="text-red-500 hover:underline">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex mt-4 space-x-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Previous
                </button>
                <span className="px-3 py-1">{currentPage} / {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default UsersData;
