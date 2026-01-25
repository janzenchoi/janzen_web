
/**
 * Card for the body
 * @param {string} title card title
 * @param {*} children card items
 * @returns card object
 */
export const Card = ({ title, children }) => {

  // Container style for the card
  const containerStyle = {
    padding: "0.6rem 1rem 1rem 1rem",
    backgroundColor: "var(--colour-0)",
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
    boxShadow: "0 0px 3px var(--colour-3)",
    borderRadius: "4px",
    overflow: "hidden",
  };

  // Style for title
  const titleStyle = {
    width: "100%",
    fontWeight: 600,
    fontSize: "1.2rem",
    color: "var(--colour-6)",
    paddingBottom: "0.6rem",
  };

  // Return body object
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={horizontalDividerStyle}/>
      {children}
    </div>
  );
}

/**
 * Creates a bullet point
 * @param {string} text text for the bullet point
 * @returns text in a bullet
 */
export const Bullet = ({ text }) => {
    return <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.4rem" }}>
      <span style={textStyle}>•</span>
      <span style={{ ...textStyle, marginLeft: "0.8rem" }}>{text}</span>
    </div>;
};

/**
 * Text style
 */
export const textStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontWeight: 400,
  fontSize: "1rem",
  color: "var(--colour-5)",
  textAlign: "justify"
};

/**
 * Horizontal divider style
 */
export const horizontalDividerStyle = {
  width: "100%",
  height: "1px",
  margin: "0 0 1rem 0",
  backgroundColor: "var(--colour-3)",
  opacity: 0.8,
}

/**
 * Vertical divider style
 */
export const verticalDividerStyle = {
  height: "100%",
  width: "1px",
  margin: "0 0.6rem 0 0.6rem",
  backgroundColor: "var(--colour-3)",
  opacity: 0.8,
}