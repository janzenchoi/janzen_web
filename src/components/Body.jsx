import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Template } from "./page/Template";
import { MAX_WIDTH } from "../helper/layout";

/**
 * The body of the page
 * @param {boolean} mobileMode whether to use mobile or desktop view
 * @param {boolean} colourTheme the theme to colour the site
 * @returns body object
 */
export const Body = ({ mobileMode, colourTheme }) => {

  // Main style for the body
  const outerStyle = {
    position: "fixed",
    paddingTop: "var(--header-height)",
    minHeight: "calc(100vh - var(--header-height))",
    width: "calc(100% - 2rem)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "1rem",
    boxSizing: "border-box",
    backgroundColor: "var(--colour-0)",
  }
  const innerStyle = {
    maxWidth: MAX_WIDTH,
    width: "100%",
    boxSizing: "border-box",
  };

  // Return body object
  return (
    <div style={outerStyle}>
      <div style={innerStyle}>
        <Routes>
          <Route path="/" element={<Home mobileMode={mobileMode} colourTheme={colourTheme}/>}/>
          <Route path="/template" element={<Template/>}/>
        </Routes>
      </div>
    </div>
  );
}