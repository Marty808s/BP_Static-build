
import React from "react";

export default function Paragraph({ children, property, size }) {
    return (
        <p className={`${property} ${size}`}>{children}</p>
    );
}