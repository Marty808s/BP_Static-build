import React, {useState, useEffect} from "react";
import Container from "@core/Container/Container";
import Button from "@core/Button/Button";
import Headings from "@components/core/Text/Headings";
import LoginSwitch from "@login/LoginSwitch";
import TextField from "@core/Form/TextField";

export default function LoginForm() {

    const [loginAccess, setLoginAccess] = useState("");

    const handleAccess = (value) => {
        setLoginAccess(value);
    }

    useEffect(() => {
        loginAccess && (console.log(loginAccess));
    },[loginAccess])
    
    return (
        <>
        <Container property="w-full max-w-md p-8 bg-white rounded-lg shadow-lg mt-[-250px]">
            <LoginSwitch getLoginType={handleAccess}/>
            <Headings sizeTag="h4" property="text-center">Přihlášení</Headings>
            <TextField required={true} label={"Přihlašovácí jméno"} placeholder={"Jméno"} property={"m-4"}></TextField>
        </Container>
        </>
    );
}

