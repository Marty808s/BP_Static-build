import Nav from "@core/Nav";
import Container from "@core/Container/Container";
import ContainerForEntity from "@core/Container/ContainerForEntity";
import Headings from "@core/Text/Headings";
import Paragraph from "@core/Text/Paragraph";
import PraxeEntity from "@components/Praxe/PraxeEntity";

export default function PraxePage() {

    const entity = {
        title: "IOS Developer",
        logo: "LOGO",
        administration_date: "23. 10. 2025",
        status: "Pozvánka"

    }

    const entity2 = {
        title: "IOS Developer",
        logo: "LOGO",
        administration_date: "23. 10. 2025",
        status: "Probíhající stáž"

    }

    const entity3 = {
        title: "IOS Developer",
        logo: "LOGO",
        administration_date: "23. 10. 2025",
        status: "Zrušená přihláška"

    }

    // hook na entitu
    const handleClick = () => {
        console.log("clicked praxe"); 
    }

    return(
        <Container property="min-h-screen">
            <Nav/>
            <Container property={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"}>
                <Headings sizeTag={"h4"} property={"mb-4"}>Praxe</Headings>
                <Container property={"flex flex-col gap-2"}>
                    <PraxeEntity entity={entity} onClick={handleClick}/>
                    <PraxeEntity entity={entity2} onClick={handleClick}/>
                    <PraxeEntity entity={entity3} onClick={handleClick}/>
                </Container>
            </Container>
        </Container>
    )
}
