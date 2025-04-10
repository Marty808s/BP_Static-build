import React from "react";
import Paragraph from "../Text/Paragraph";

export default function Button({children, text, property, onClick, variant = "primary"}) {

    const baseClass = "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
    
    const baseText = text ? <Paragraph>{text}</Paragraph> : null;
    
    const variants = {
        // předělat podle barev ve figmě
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        success: "bg-green-600 text-white hover:bg-green-700",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    };

    return (
        <button
            className={`${baseClass} ${variants[variant]} ${property || ''}`}
            onClick={onClick}
            type="button"
        >
            {baseText || children}
        </button>
    );
}