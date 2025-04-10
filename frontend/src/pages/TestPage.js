import Paragraph from "../components/core/Text/Paragraph";
import Headings from "../components/core/Text/Headings";
import ContainerEntity from "../components/core/Container/ContainerForEntity";
import Container from "../components/core/Container/Container";
import Button from "../components/core/Button/Button";

function Test() {

  const handleClick = () => {
    console.log("Clicked")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Paragraph variant={"largeBold"}>Test par</Paragraph>
        <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
          onClick = {() => console.log("Tailwind je ready!!")}
        >
          <Paragraph variant={"baseBold"}>Ahoj</Paragraph>
        </button>
      </header>
        <Headings sizeTag={"h1"} property={"text-red-600"}>Heading 1</Headings>
        <Headings sizeTag={"h2"}>Heading 2</Headings>
        <Headings sizeTag={"h3"}>Heading 3</Headings>
        <Headings sizeTag={"h4"}>Heading 4</Headings>

        <ContainerEntity property={"bg-blue-600 p-1"}>
          <Headings sizeTag={"h4"}>Heading 2</Headings>
        </ContainerEntity>

        <Container property={"bg-blue-200"}>
          <Headings sizeTag={"h2"}>Heading 1</Headings>
        </Container>

        <Button text={"Zmáčkni mě vole"} property={"mt-4"} variant = {"danger"} onClick={handleClick}/>
        
        <Button property={"mt-4"} onClick={handleClick}>
          <Paragraph>Ahoj</Paragraph>
        </Button>

    </div>
  );
}

export default Test;
