import React from "react";
import Container from "@core/Container/Container";
import TextField from "@core/Form/TextField";
import DropDown from "@core/Form/DropDown";
import BackButton from "@core/Button/BackButton";
import TextBox from "@core/Form/TextBox";

export default function TEST_FORM() {
    return(
        <>
        <BackButton></BackButton>
        <Container property={"bg-gray-50 m-8 p-8 rounded-lg"}>
            <TextField 
                id={"jmeno"}
                label={"Jméno"} 
                placeholder={"Zadejte jméno"}
                onChange={(value) => console.log(value)}
            />
            <DropDown
                id={"kategorie"}
                label={"Vyberte kategorii"}
                icon={"eye"}
                options={[
                    { value: "1", label: "GEJ" },
                    { value: "2", label: "NE GEJ" }
                ]}
                onChange={(value) => console.log(value)}
            />

            <TextBox
                id={"textBox"}
                label={"O mě"}
                placeholder={"Napište něco o sobě"}
                onChange={(value) => console.log(value)}
            />

        </Container>
        </>
    )
}

