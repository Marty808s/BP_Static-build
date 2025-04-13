import React from "react";


export default function Container({children, property, onMouseEnter, onMouseLeave}) {
    
    return(
        <div className={`${property || ""}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </div>
    )
}