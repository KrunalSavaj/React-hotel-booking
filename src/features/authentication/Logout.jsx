import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import { BeatLoader } from "react-spinners";

function Logout() {


    const { logout, isLoading } = useLogout();


    return (
        <ButtonIcon disabled={isLoading} onClick={logout}>
            {!isLoading ? <HiArrowRightOnRectangle /> : <BeatLoader color="#ffffff" />}
        </ButtonIcon>
    );
}

export default Logout;
