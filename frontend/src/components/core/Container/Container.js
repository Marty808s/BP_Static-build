import React from "react";


export default function Container({children, property}) {
    // přidělat varianty viz button
    return(
        <div className={`${property || ""}`}>
            {children}
        </div>
    )
}