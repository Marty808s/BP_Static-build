import Paragraph from "../components/core/Text/Paragraph";
import Headings from "../components/core/Text/Headings";

function Test() {
  return (
    <div className="App">
      <header className="App-header">
         <p className='text-black'>asdssasd</p>
        <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
          onClick = {() => console.log("Tailwind je ready!!")}
        >
          <Paragraph property={"font-bold"} size={"text-lg"}>Ahoj</Paragraph>
        </button>
      </header>
        <Headings sizeTag={"h1"} property={"text-red-600"}>Heading 1</Headings>
        <Headings sizeTag={"h2"}>Heading 2</Headings>
        <Headings sizeTag={"h3"}>Heading 3</Headings>
        <Headings sizeTag={"h4"}>Heading 4</Headings>
    </div>
  );
}

export default Test;
