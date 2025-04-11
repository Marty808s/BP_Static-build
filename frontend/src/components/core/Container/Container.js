import React from "react";


export default function Container({children, property}) {
    
    return(
        <div className={`${property || ""}`}>
            {children}
        </div>
    )
}