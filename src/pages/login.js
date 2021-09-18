import React from "react";
import Login from "components/Login";

export default function () {
    return(
     <div>
        <h1>Log in Here</h1>
        <Login 
        handleChange={handleChange}
        handlePasswordChange={handlePasswordChange}
        ></Login>
        </div>
    );
}
    
