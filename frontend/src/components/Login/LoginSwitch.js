import React, {useState, useCallback, useEffect} from "react";
import Container from "@core/Container/Container";
import Button from "@core/Button/Button";
import Paragraph from "@components/core/Text/Paragraph";

export default function LoginSwitch({getLoginType}) {

    const logTypes = ["STAG", "Department"]

    // Barevné varianty stavů
    const selectedCol = "text-blue-800"
    const basicCol = "text-blue-300"

    const [colorTypes, setColors] = useState([
        {"STAG": basicCol},
        {"Department": basicCol}
    ])
    
    const [selectedType, selectType] = useState(logTypes[0]) /* INIT bude stag */

    const handleColorChange = (id) => {
        const newColors = colorTypes.map(item => {
            const key = Object.keys(item)[0];
            return { [key]: key === id ? selectedCol : basicCol };
        });
        setColors(newColors);
    }


    const handleSwitch = (event) => {
        const clickedId = event.target.id;

        // TOHLE PŘEDĚLAT NA CALLBACK
        selectType(clickedId);
        getLoginType(clickedId);
        handleColorChange(clickedId);
    }

    useEffect(() => {
        handleColorChange(selectedType);
        getLoginType(selectedType);
    },[])

    return(
        <>
            <Container property={"w-full flex flex-row items-center justify-start gap-2 mb-4"} >
                <Container>
                    <Paragraph id="STAG" variant={"largeBold"} property={colorTypes[0]["STAG"]} onClick={handleSwitch}>STAG</Paragraph>
                </Container>

                <Container>
                    <Paragraph id="/" variant={"largeBold"}>/</Paragraph>
                </Container>

                <Container>
                    <Paragraph id="Department" variant={"largeBold"} property={colorTypes[1]["Department"]} onClick={handleSwitch}>Jsem firma</Paragraph>
                </Container>
            </Container>
        </>
    )
}