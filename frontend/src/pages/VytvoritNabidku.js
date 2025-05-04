import React, { useState } from "react";
import Container from "@core/Container/Container";
import Nav from "@components/core/Nav";
import Headings from "@core/Text/Headings";
import BackButton from "@core/Button/BackButton";
import Button from "@core/Button/Button";
import TextField from "@core/Form/TextField";
import TextBox from "@core/Form/TextBox";
import DropDown from "@core/Form/DropDown";
import CustomDatePicker from "@core/Form/DatePicker";


export default function VytvoritNabidku() {

    const renderForm = () => (
        <>
        <Container property={"grid gap-2 grid-cols-3"}>
            <TextField 
                id={"name"}
                required={true}
                label={"Jméno"} 
                placeholder={"Zadejte jméno"}
                onChange={(value) => console.log(value)}
            />
            <TextField 
                id={"surname"}
                required={true}
                label={"Příjmení"} 
                placeholder={"Zadejte příjmení"}
                onChange={(value) => console.log(value)}
            />
        </Container>

        {/* PROSTOR PRO TLAČÍKO */}
        <Container property={"flex w-full justify-end ml-auto"}>
            <Button 
                property={"mt-2 px-16"} 
                onClick={() => console.log("Ukládám vole")}
            >
                Vytvořit
            </Button>
        </Container>
        </>
    )

    return(
        <Container property="min-h-screen">
            <Nav/>
            <Container property="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <BackButton/>
                <Container property={"bg-gray-50 mt-2 p-4 rounded-lg"}>
                    {renderForm()}
                </Container>

            </Container>
        </Container>
    )
}