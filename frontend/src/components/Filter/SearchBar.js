import React, {useState} from "react";
import Container from "@core/Container/Container";
import Paragraph from "@core/Text/Paragraph";

export default function SearchBar() {

    const [search, setSearch] = useState("");

    //handle na změnu textu
    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    const inputClass = `w-full py-1 px-2 text-black bg-facultyCol rounded-lg border-2 placeholder-gray-800`;

    return (
        <Container property="w-full items-center justify-center">
            <input
                type={"text"}
                id={"search"} 
                className={inputClass} 
                placeholder={"Hledat..."} 
                value={search}
                onChange={handleSearch}
                />
        </Container>
    )
}
