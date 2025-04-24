import React from "react";
import ContainerForEntity from "./ContainerForEntity";
import Container from "./Container";
import Button from "@core/Button/Button";
import Headings from "@core/Text/Headings";

export default function PopUpCon({children, onClose, title, variant = "gray"}) {
    return(
        <Container property={"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"}>
            <ContainerForEntity property={"w-1/2 max-w-2xl"} variant={variant}>
                <Container property={"flex justify-between items-center mb-4"}>
                    <Headings sizeTag="h4">{title}</Headings>
                    <Button onClick={onClose} property={"px-2 py-1"}>
                        X
                    </Button>
                </Container>
                <Container property={"max-h-[80vh] overflow-y-auto"}>
                    {children}
                </Container>
            </ContainerForEntity>
        </Container>
    )
}