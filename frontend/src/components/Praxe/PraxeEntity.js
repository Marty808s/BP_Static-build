import React from "react";
import ContainerForEntity from "@core/Container/ContainerForEntity";
import Headings from "@core/Text/Headings";
import Container from "@core/Container/Container";
import Paragraph from "@core/Text/Paragraph";

export default function PraxeEntity({entity, onClick=null}) {

    const statusEntity = {
        "Probíhající stáž": "green",
        "Zrušená přihláška": "red",
        "Zaslaná přihláška": "gray",
        "Pozvánka": "yellow" 

    }

    return(
        <ContainerForEntity variant={entity.status ? statusEntity[entity.status] : ""} property={"pl-8 pt-4 pb-4 pr-8 mb-4"} onClick={onClick}>
            <Container property={"grid grid-cols-4 gap-4 inline-block"}>
                <Paragraph sizeTag="h4">{entity.logo}</Paragraph>
                <Paragraph variant={"baseBold"}>{entity.title}</Paragraph>
                <Paragraph>Datum podání: {entity.administration_date}</Paragraph>
                <Paragraph>Status: {entity.status}</Paragraph>
            </Container>
    </ContainerForEntity>
    )
}