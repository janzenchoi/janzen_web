
/**
 * Card for the body
 * @param {string} title card title
 * @param {boolean} mobileMode whether to use mobile or desktop view
 * @param {*} children card items
 * @returns card object
 */
export const Card = ({ mobileMode, title, children }) => {

  // Container style for the card
  const containerStyle = {
    padding: "1rem 1rem 1rem 1rem",
    backgroundColor: "var(--colour-0)",
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
    boxShadow: "0 0px 3px var(--colour-3)",
  };

  // Style for title
  const titleStyle = {
    width: "100%",
    fontWeight: 600,
    fontSize: "1.4rem",
    color: "var(--colour-6)",
    paddingBottom: "1rem",
  };

  // Return body object
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      {children}
    </div>
  );
}

/**
 * Divider style
 */
export const dividerStyle = {
  width: "100%",
}

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