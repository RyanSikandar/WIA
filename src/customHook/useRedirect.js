import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
            alert("You need to be logged in to access this page");
        }

        // Listen for token changes across tabs
        const handleStorageChange = (event) => {
            if (event.key === "token" && !event.newValue) {
                alert("You have been logged out");
                navigate("/");
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [navigate]);
};
