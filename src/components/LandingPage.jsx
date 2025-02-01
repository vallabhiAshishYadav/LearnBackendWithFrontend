import { useLocation } from "react-router-dom";

function LandingPage() {
    const location = useLocation()
    const token = localStorage.getItem("authToken");
    console.log("token is ", token);
    const userData = location.state; // Access the passed state
    console.log("User Data:", userData);
    return (
        <>
            <h1>Landing page</h1>
        </>
    );
}

export default LandingPage;