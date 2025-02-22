import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function DarkModeToogle() {
  const {isDarkMode, toogleDarkMode} = useDarkMode();



    return (
        <ButtonIcon onClick={toogleDarkMode}>
            {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon />}
        </ButtonIcon>
    )
}

export default DarkModeToogle
