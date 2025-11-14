import React from "react";
// props means properties passed from one component to another 
// they are like parameters that can be passed in a function 

import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles })  => {
    return(
        <button
         className= { `px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition ${styles}`}
        // here title is a property passed 
        > {title}
        
        </button>
    )
}

export default Button