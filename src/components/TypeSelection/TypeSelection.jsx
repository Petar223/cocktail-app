import React from "react";
import CustomButton from "../../shared-components/CustomButton/CustomButton";

function TypeSelection() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    padding: "32px",
    color: "white",
  };

  const taglineStyle = {
    width: "25%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "felx-start",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    textAlign: "left",
    lineHeight: "1.2",
    margin: "0",
    background: "rgba(10, 10, 10, 0.5)",
    color: "white",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const taglineLargerStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    padding: "0 0 32px 0",
  };

  const buttonContainerStyle = {
    display: "flex",
    padding: "32px 0 0 0",
  };

  return (
    <div style={containerStyle}>
      <div style={taglineStyle}>
        <div>
          <div style={taglineLargerStyle}>Alcoholic Cocktails</div>
          <div>
            <img
              style={imageStyle}
              src="/images/alcoholic.jpg"
              alt="Alcoholic Cocktail"
            />
          </div>
          <div style={buttonContainerStyle}>
            <CustomButton to="/type/alcoholic">Explore</CustomButton>
          </div>
        </div>
      </div>

      <div style={taglineStyle}>
        <div>
          <div style={taglineLargerStyle}>Non-Alcoholic Cocktails</div>
          <div>
            <img
              style={imageStyle}
              src="/images/none-alcoholic.jpg"
              alt="Non-Alcoholic Cocktail"
            />
          </div>
          <div style={buttonContainerStyle}>
            <CustomButton to="/type/non-alcoholic">Explore</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeSelection;
