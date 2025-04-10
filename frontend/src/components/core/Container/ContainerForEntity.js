import React from "react";


export default function ContainerEntity({children, property, color}) {
    //přidat barvy z figmy na proměnnou - parametr color (navázat s figmou podle čísla) => varianty jak u buttonu
    const defaultClass = "border border-black rounded-lg p-4"

    return(
        <div className={`${defaultClass} ${property || ""}`}>
            {children}
        </div>
    )
}