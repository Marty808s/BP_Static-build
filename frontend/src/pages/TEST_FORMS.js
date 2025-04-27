import React from "react";
import Container from "@core/Container/Container";
import TextField from "@core/Form/TextField";
import BackButton from "@core/Button/BackButton";

export default function TEST_FORM() {
    return(
        <>
        <BackButton></BackButton>
        <Container property={"bg-gray-50 m-8 p-8 rounded-lg"}>
            <TextField label={"Jméno"} placeholder={"Zadejte jméno"}/>

        </Container>
        </>
    )
}

