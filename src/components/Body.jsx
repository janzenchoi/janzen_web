import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Template } from "./page/Template";
import { MAX_WIDTH } from "../helper/layout";

/**
 * The body of the page
 * @param {boolean} mobileMode whether to use mobile or desktop view
 * @param {boolean} colourTheme the theme to colour the site
 */
export const Body = ({ mobileMode, colourTheme }) => {

  // Container styles
  const outerStyle = {
    paddingTop: "var(--header-height)",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    backgroundColor: "var(--colour-1)",
    boxShadow: "0 0px 4px var(--colour-4)",
    position: "relative",
  };
  const innerStyle = {
    maxWidth: MAX_WIDTH,
    width: "100%",
    boxSizing: "border-box",
  };

  // Style for transitioning
  const fadeLayer = (visible) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    transition: "opacity 0.5s ease",
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none",
  });

  return (
    <div style={outerStyle}>
      <div style={innerStyle}>
        <Routes>
          <Route path="/" element={
            <div style={{ position: "relative" }}>
              <div style={fadeLayer(!mobileMode)}><Home mobileMode={false} colourTheme={colourTheme}/></div>
              <div style={fadeLayer(mobileMode)}><Home mobileMode={true} colourTheme={colourTheme}/></div>
            </div>}/>
          <Route path="/template" element={<Template />} />
        </Routes>
      </div>
    </div>
  );
};
