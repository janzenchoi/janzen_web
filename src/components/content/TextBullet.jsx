import { titleStyle, subtitleStyle, textStyle, horizontalDividerStyle } from "./Card.jsx";

/**
 * Text bullet point
 * @param {boolean} mobileMode whether to use mobile or desktop view
 * @param {boolean} darkMode whether to use dark or light mode
 * @param {string} title bullet title
 * @param {string} subtitle bullet subtitle
 * @returns text bullet object
 */
export const TextBullet = ({ mobileMode, darkMode, title, subtitle }) => {
  
  // Define symbol
  const symbol = mobileMode ? "•" : "●";

  // Container styles
  const outerContainer = {
    padding: mobileMode ? "0.3rem" : "0.4rem",
    width: "calc(100% - 1rem)",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: mobileMode ? "0.8rem" : "1rem",
  };
  const innerContainer = {
    display: "flex",
    flexDirection: "column",
  };

  // Return text bullet
  return (
    <div style={outerContainer}>
      <div style={titleStyle}>{symbol}</div>
      <div style={innerContainer}>
        <div style={{ ...titleStyle, textAlign: "start" }}>{title}</div>
        <div style={{ ...subtitleStyle, textAlign: "start" }}>{subtitle}</div>
      </div>
    </div>
  );
}
