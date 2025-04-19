import React from "react";
import Container from "@core/Container/Container";
import Nav from "@components/core/Nav";
import { useParams } from "react-router-dom";

export default function NabidkaDetailPage() {
    const { id } = useParams();

    return(
        <Container property="min-h-screen">
            <Nav/>
            <Container property="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-bold mb-4">Detail nabídky {id}</h1>
            </Container>
        </Container>
    )
} 