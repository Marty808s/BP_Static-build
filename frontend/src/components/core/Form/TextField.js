import React, { useState } from "react";
import Container from "@core/Container/Container";
import Paragraph from "@core/Text/Paragraph";

export default function TextField({id, property, label, placeholder, icon = false, required = false, value, onChange,type = "text"}) {
    
    const [inputValue, setInputValue] = useState(label ? label : "");

    const labelEntity = label ? <Paragraph>{label}</Paragraph> : null;

    const requiredLabel = <Paragraph property={"text-red-600 ml-1"}>*</Paragraph>

    const inputClass = "w-full px-4 py-1 text-base text-gray-900 bg-gray-100 rounded-lg border-2";
    return (
        <Container property={property}>
            <Container property="flex items-center">
                {labelEntity}
                {required && requiredLabel}
            </Container>
            <input type="text" id={id} className={inputClass + property} placeholder={placeholder || ""} required={required} />
        </Container>
    );
}
