import React from "react";
import Container from "@core/Container/Container";
import ContainerForEntity from "@core/Container/ContainerForEntity";
import Nav from "@components/core/Nav";
import BackButton from "@core/Button/BackButton";
import Headings from "@core/Text/Headings";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import Button from "@core/Button/Button";


export default function NabidkaDetailPage() {
    const { id } = useParams();

    //PODLE USERA ZE SESSION UKÁŽU PŘÍSLUŠNOU PODOBU TÉTO STRÁNKY 
    // (udělat variantu volné nabídky a následně probíhající/spravované)

    const entity = {
        "id": "1",
        "title": "Apple IOS Developer",
        "time": "1.1.2025 - 30.5.2025",
        "annotation": "<p>asdas<strong>dasdasdasdasda<u><s>sdasdasdasdasdd</s></u></strong></p><ol><li>ASDASDASDASDASDASD</li><li>ASDASDASDASDASD</li><li>ASDASDASDASDASD</li><li>ASDASDA</li></ol><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla quis diam. Etiam bibendum elit eget erat. Nullam faucibus mi quis velit. Donec iaculis gravida nulla. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nullam eget nisl. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto <u>beatae vitae dicta sunt explicabo. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nam sed tellus id magna elementum tincidunt. Nullam faucibus mi quis velit. Sed convallis magna eu sem.</u></p><p><u><br></u></p><ol><li><u>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla quis diam. Etiam bibendum elit eget erat. Nullam faucibus mi quis velit. Donec iaculis gravida nulla. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nullam eget nisl. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nam sed tellus id magna elementum tincidunt. Nullam faucibus mi quis velit. Sed convallis magna eu sem.</u></li><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla quis diam. Etiam bibendum elit eget erat. Nullam faucibus mi quis velit. Donec iaculis gravida nulla. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nullam eget nisl. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nam sed tellus id magna elementum tincidunt. Nullam faucibus mi quis velit. Sed convallis magna eu sem.</li></ol><p><br></p>",
        "adress": "Praha, Česká republika"
    }

    // Volná nabídka
    return(
        <Container property="min-h-screen">
            <Nav/>
            <Container property="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ContainerForEntity property={"pl-8 pr-8 pt-4 pb-8"}>
                <BackButton/>
                <Container property="grid grid-cols-[auto,1fr] gap-4 mt-2 mb-4">
                        
                    {/* LOGO */}
                    <Container property="w-md bg-blue-600 rounded-lg p-4 flex items-center justify-center">
                        <Headings sizeTag="h4" property="text-white">
                            {"LOGO"}
                        </Headings>
                    </Container>

                    {/* TITLE */}
                    <Container>
                        <Headings sizeTag={"h4"} property={""}>{entity.title} | id: {id}</Headings>
                        <Container property={"flex flex-row gap-2"}>
                            <Button variant="blueSmallNoHover" pointer={false} className="w-fit">Místo konání: {entity.adress}</Button>
                            <Button variant="blueSmallNoHover" pointer={false} className="w-fit">{entity.time}</Button>
                        </Container>
                    </Container>

                </Container>
                {/* ANNOTATION */}
                <Container property={"editor-content mt-2"}>
                    {HTMLReactParser(entity.annotation)}
                </Container>

                <Container property={"grid grid-cols-1 gap-8"}>
                    <Button className="col-start-1 justify-self-end">Podat přihlášku</Button>
                </Container>
            </ContainerForEntity>
                
            </Container>
        </Container>
    )
} 