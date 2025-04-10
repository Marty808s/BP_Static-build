import React from "react";


export default function Paragraph({ children, property, size }) {
    // případně udělat varianty viz Button
    return (
        <p className={`${property} ${size}`}>{children}</p>
    );
}