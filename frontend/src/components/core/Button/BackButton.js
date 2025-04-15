import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1);
    }

    return(
        <Button variant={"primarySmall"} icon={"arrowLeft"} iconColor={"text-white"} onClick={() => handleBack()}>
            Zpět
        </Button>
    )
}