import React from "react";
import { useLocation } from "react-router-dom";

const Recipes = (props) => {
    let data = useLocation().state;
    console.log(data);

    const logout = () => {
        useLocation.state = null;
        data = null;
        console.log(data);
    };

    return (
        <div>
            <h1> hi </h1> <button onClick={logout}> Logout </button>{" "}
        </div>
    );
};

export default Recipes;
