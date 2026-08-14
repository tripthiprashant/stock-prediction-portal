import React, { useEffect } from "react";
import axios from "axios";
import axiosinstance from "../../axiosinstance";

const Dashboard = () => {
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await axiosinstance.get(            
                    "/protected_view/"
                );
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchProtectedData();
    }, []);

    return (
        <div className="text-light">
            Dashboard
        </div>
    );
};

export default Dashboard;