import React from "react";
import Paragraph from "@components/core/Text/Paragraph";
import { FiBook, FiEdit, FiSearch, FiFilter, FiPlus } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { RxCross1, RxCheck } from "react-icons/rx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Button({id, children, text, property, onClick, variant = "primary", buttonSize = "big", noVariant = false, icon = null, iconSize = "14", iconColor = "text-white"}) {

    const baseClassBig = "px-4 py-2 rounded-lg p-2 transition-colors duration-200";
    const baseClassSmall = "px-2 py-1 rounded-lg p-1 transition-colors duration-200";

    const icons = {
        angleDown: <FaAngleDown size={iconSize} className={iconColor} />,
        angleUp: <FaAngleUp size={iconSize} className={iconColor} />,
        book: <FiBook size={iconSize} className={iconColor} />,
        edit: <FiEdit size={iconSize} className={iconColor} />,
        search: <FiSearch size={iconSize} className={iconColor} />,
        filter: <FiFilter size={iconSize} className={iconColor} />,
        plus: <FiPlus size={iconSize} className={iconColor} />,
        cross: <RxCross1 size={iconSize} className={iconColor} />,
        check: <RxCheck size={iconSize} className={iconColor} />,
        users: <TbUsers size={iconSize} className={iconColor} />,
    }

    const baseIconLayout = "inline-flex items-center gap-1"
    
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
            id={id}
            className={`
                ${noVariant ? "" : variants[variant]} 
                ${!noVariant && (buttonSize === "big" ? baseClassBig : baseClassSmall)} 
                ${property || ''} 
                ${icon && baseIconLayout}
            `}
            onClick={onClick}
            type="button"
        >
            {icon && icons[icon]}
            {baseText || children}
        </button>
    );
}