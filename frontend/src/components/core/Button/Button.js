import React from "react";
import Paragraph from "../Text/Paragraph";

export default function Button({children, text, property, onClick, variant = "primary"}) {

    const baseClassBig = "px-4 py-2 rounded-lg p-2 transition-colors duration-200";
    const baseClassSmall = "px-2 py-1 rounded-lg p-1 transition-colors duration-200";
    
    const baseText = text ? <Paragraph>{text}</Paragraph> : null;
    
    const variants = {
        primary: "bg-facultyCol text-white hover:bg-gray-400 " + baseClassBig,
        blue: "bg-blue-300 text-gray-800 hover:bg-gray-400 " + baseClassBig,
        red: "bg-red-400 text-white hover:bg-gray-400 " + baseClassBig,
        yellow: "bg-yellow-300 text-white hover:bg-gray-400 " + baseClassBig,
        primarySmall: "bg-facultyCol text-white hover:bg-gray-400 " + baseClassSmall,
        blueSmall: "bg-blue-300 text-gray-800 hover:bg-gray-400 " + baseClassSmall,
        redSmall: "bg-red-400 text-white hover:bg-gray-400 " + baseClassSmall,
        yellowSmall: "bg-yellow-300 text-white hover:bg-gray-400 " + baseClassSmall,
    };

    return (
        <button
            className={`${variants[variant]} ${property || ''}`}
            onClick={onClick}
            type="button"
        >
            {baseText || children}
        </button>
    );
}