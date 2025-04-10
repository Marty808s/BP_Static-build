import React from 'react';

export default function Headings({ children, sizeTag, property }) {
    // defaultní hodnota bez parametru bude h4
    let sizeTagClass = null;
    
    switch(sizeTag) {
        case 'h4':
            sizeTagClass = "text-2xl font-semibold";
            break;
        case 'h3':
            sizeTagClass = "text-4xl font-semibold";
            break;
        case 'h2':
            sizeTagClass = "text-5xl font-semibold";
            break;
        case 'h1':
            sizeTagClass = "text-7xl font-semibold";
            break;
        default:
            sizeTagClass = "text-2xl font-semibold";
    }

    return (
        React.createElement(
            sizeTag,
            { className: `${sizeTagClass} ${property || ''}`.trim() },
            children
        )
    );
}