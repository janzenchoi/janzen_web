
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
    backgroundColor: "var(--colour-1)",
    padding: "0.4rem 0.8rem 0.8rem 0.8rem",
    margin: "0.8",
    borderRadius: "8px",
    border: "1px solid var(--colour-3)",
  };

  // Style for title
  const titleStyle = {
    width: "100%",
    fontWeight: 400,
    fontSize: "1.4rem",
    color: "var(--colour-6)",
    paddingLeft: "0.4rem",
  };
  const dividerStyle = {
    width: "100%",
    height: "1px",
    margin: "0.4rem 0 0.8rem 0",
    backgroundColor: "var(--colour-4)",
    opacity: 0.8,
  };

  // Return body object
  return (
    <div style={containerStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={dividerStyle}/>
        {children}
    </div>
  );
}