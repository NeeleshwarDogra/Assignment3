import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Recipes = (props) => {
    let data = useLocation().state;
    console.log(data);
	const navigate = useNavigate()

    const logout = () => {
        useLocation.state = null;
        data = null;
		navigate("/")
    };

    return (
        <div>
            <h1>Recipes</h1> <button onClick={logout}> Logout </button>{" "}
        </div>
    );
};

export default Recipes;
