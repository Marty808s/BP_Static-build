import SearchBar from "@components/Filter/SearchBar";
import Container from "@core/Container/Container";
import Button from "@core/Button/Button";

export default function FilterNabidka() {

    // tady budou hooky do children komponent
    return (
        <Container property="w-full flex items-center inline-block justify-center mb-8">
            <SearchBar />
            <Button onClick={() => console.log("clicked")} noVariant={true} property={"ml-2 bg-facultyColLight px-4 py-1 border border-black rounded-lg transition-colors duration-200 hover:bg-facultyCol"}>Hledat</Button>
        </Container>
    )
}
