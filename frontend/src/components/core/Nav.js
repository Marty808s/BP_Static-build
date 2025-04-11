import React from "react";
import Container from "./Container/Container";
import Headings from "./Text/Headings";

const USER = {
    "name": "Aleš",
    "faculty": "PřF"
}

export default function Nav({user=USER}) {
    return(
        <>
        {/* 1/16 a 15/16 */}
        <Container property={"w-full grid grid-cols-[1fr_15fr] gap-4 bg-facultyCol"}>
            {/* TEXT */}
            <Container property={"flex items-center"}>
                <Headings sizeTag="h4" property={"m-4 text-white"}>InternHub</Headings>
            </Container>

            {/* NAVIGACE - dodělat do komponenty pro Link s paragraphem a shadow na hover (DODĚLAT RESPONSIVITU)*/}
            <Container property={"flex flex-row items-center justify-end gap-8 m-4"}>
                <p className="text-white">ASDASDAS</p>
                <p className="text-white">ASDASDAS</p>
                <p className="text-white">ASDASDAS</p>
                <p className="text-white">ASDASDAS</p>
            </Container>
        </Container>
        </>
    )
}