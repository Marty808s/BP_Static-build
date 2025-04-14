import React from "react"
import Container from "@core/Container/Container"
import ContainerForEntity from "@core/Container/ContainerForEntity"
import Paragraph from "@components/core/Text/Paragraph"
import Headings from "@components/core/Text/Headings"

export default function NabidkaEntity({entity}) {
    return(
        <ContainerForEntity variant="gray" property="hover:shadow-lg transition-shadow duration-200">
            <Container property="grid grid-cols-[auto,1fr] gap-4">

                {/* LOGO */}
                <Container property="w-md bg-blue-600 rounded-lg p-4 flex items-center justify-center">
                    <Headings sizeTag="h4" property="text-white">
                        {"LOGO ZDE"}
                    </Headings>
                </Container>


                <Container property={"grid grid-cols-1"}>
                    {/* TITULEK */}
                    <Container property="p-2 space-y-2">
                        <Headings sizeTag="h4" property="text-black">
                            {entity.title}
                        </Headings>
                    </Container>

                    {/* ANOTACE */}
                    <Container property="p-2 space-y-2">
                        <Container property="space-y-2">
                            <Paragraph variant="base" property="text-gray-600 line-clamp-3">
                                {entity.annotation}
                            </Paragraph>
                        </Container>
                        
                        {/* MÍSTO KONÁNÍ */}
                        <Container property="flex justify-between items-center">
                            <Container property={"bg-blue-400  px-2 p-1 rounded-lg"}>
                                <Paragraph variant="small" property="text-white">
                                    {entity.adress}
                                </Paragraph>
                            </Container>
                        </Container>
                    </Container>

                </Container>
            </Container>
        </ContainerForEntity>
    )
}