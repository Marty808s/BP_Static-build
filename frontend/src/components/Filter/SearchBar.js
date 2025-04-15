import React, {useState} from "react";
import Container from "@core/Container/Container";
import Paragraph from "@core/Text/Paragraph";
import { RxCross1 } from "react-icons/rx";
import Button from "@core/Button/Button";

export default function SearchBar() {

    const [search, setSearch] = useState("");

    //handle na změnu textu
    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }


    const inputClass = `w-full py-1 px-2 text-black bg-facultyColLight rounded-lg border border-black placeholder-gray-800`;

    return (
        <Container property="relative inline-block w-full items-center justify-center">
            <input
                type={"text"}
                id={"search"} 
                className={inputClass} 
                placeholder={"Hledat..."} 
                value={search}
                onChange={handleSearch}
            />
            <Container property="absolute right-2 top-1/2 -translate-y-1/2">
                {search !== "" && <Button noVariant={true} icon={"cross"} iconColor="text-black" onClick={() => setSearch("")}/>
}            </Container>

        </Container>
    )
}
