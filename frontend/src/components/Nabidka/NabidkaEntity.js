import React from "react"
import Container from "@core/Container/Container"
import ContainerForEntity from "@core/Container/ContainerForEntity"
import Paragraph from "@components/core/Text/Paragraph"
import Headings from "@components/core/Text/Headings"


export default function NabidkaEntity({entity}) {
    return(
        <ContainerForEntity variant="gray" property="hover:shadow-lg transition-shadow duration-200">

            <Container property={"grid grid-cols-2 gap-2"}>

                <Container property={"bg-blue-600"}>
                        <NabidkaEntity entity={entity}/>
                </Container>


                <Container property="p-4 space-y-4">
                    <Headings sizeTag="h4" property="text-gray-800 font-semibold">
                        {entity.title}
                    </Headings>
                    
                    <Container property="space-y-2">
                        <Paragraph variant="base" property="text-gray-600 line-clamp-3">
                            {entity.annotation}
                        </Paragraph>
                    </Container>
                </Container>

            </Container>

        </ContainerForEntity>
    )
}