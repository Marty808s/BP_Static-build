import React from "react";
import Container from "@core/Container/Container";
//import Headings from "@core/Text/Headings";
//import Button from "@core/Button/Button";
import Nav from "@components/core/Nav";
import LoginForm from "@login/LoginForm";

export default function LoginPage() {
    return (
        <>
        <Nav/>
        <Container property="min-h-screen flex items-center justify-center bg-gray-100">
            <LoginForm/>
        </Container>
        </>
    );
}

