import { useDarkModeColour } from "../helper/brightness";
import { light3, dark3 } from "../helper/colour";

export const Header = () => {
  const backgroundColour = useDarkModeColour(light3, dark3);
  const headerStyle = {
    height: "50px",
    width: "100vw",
    backgroundColor: backgroundColour,
    transition: "background-color 0.3s",
  };
  return <div style={{ ...headerStyle }}></div>;
};