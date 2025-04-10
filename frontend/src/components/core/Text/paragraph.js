import React from "react";

export default function Paragraph({ children, variant = "base", property }) {

    const variants = {
        baseBold: "font-bold text-base",
        base: "font-normal text-base",
        largeBold: "font-bold text-lg",
        large: "font-normal text-lg"
    };

    return (
        <p className={`${variants[variant] || variants.base} ${property || ''}`}>
            {children}
        </p>
    );
}