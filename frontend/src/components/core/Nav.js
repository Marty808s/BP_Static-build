import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container/Container";
import Headings from "./Text/Headings";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Button from "./Button/Button";


const USER = {
    "name": "Aleš",
    "faculty": "PřF"
}

function SubMenu({ items, title }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container property="relative inline-block" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <Button property="text-white hover:text-gray-200 transition-colors" noVariant={true}>
                <Container property={"flex items-center gap-1"}>
                    {title}
                    {!isOpen ? (<FaAngleDown size="12" className="text-white" />) : (<FaAngleUp size="12" className="text-white" />)}
                </Container>
            </Button>
            {isOpen && (
                <Container property="absolute bg-facultyCol shadow-lg rounded-md min-w-[150px] max-w-[200px] z-50">
                    {Object.entries(items).map(([key, value]) => (
                        <Link 
                            key={key} 
                            to={value} 
                            className="block text-white hover:text-gray-200 transition-colors"
                        >
                            {key}
                        </Link>
                    ))}
                </Container>
            )}
        </Container>
    );
}

function LinkNav({navigationDict}) {
    return (
        <Container property="flex items-center gap-8">
            {Object.entries(navigationDict).map(([key, value]) => {
                if (typeof value === 'object' && Object.keys(value).length > 1) {
                    return <SubMenu key={key} title={key} items={value} />;
                } else {
                    return (
                        <Link key={key} to={value} className="text-white hover:text-gray-200 transition-colors">
                            {key}
                        </Link>
                    );
                }
            })}
        </Container>
    );
}

function Nav({user=USER}) {
    // TOHLE BUDE NÁSLEDNĚ ŘÍZENO ROLÍ
    const navigationDict = {
        "Home": "/",
        "Účet": "/",
        "Objednávky": "/",
        "About": {
            "Tohle je dlouhý text, který nemá význam": "/about",
            "O vás": "/oVas"
        },
        "Contact": "/contact"
    };

    return(
        <>
        {/* 1/16 a 15/16 */}
        <Container property={"w-full grid grid-cols-[1fr_15fr] gap-4 bg-facultyCol"}>
            {/* TEXT */}
            <Container property={"flex items-center"}>
                <Headings sizeTag="h4" property={"m-4 text-white"}>InternHub</Headings>
            </Container>

            {/* NAVIGACE */}
            <Container property={"flex items-center justify-end m-4"}>
                <LinkNav navigationDict={navigationDict} />
            </Container>
        </Container>
        </>
    );
}

export default Nav;