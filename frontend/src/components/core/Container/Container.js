import React from "react";


export default function Container({children, property}) {
    // tohle bude default container pro open atributy (podle potřeby vytvořím varianty - flex boxy, gridy atd)
    return(
        <div className={`${property || ""}`}>
            {children}
        </div>
    )
}