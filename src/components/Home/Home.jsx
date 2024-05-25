import React from "react";
import CustomButton from "../../shared-components/CustomButton/CustomButton";

const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "32px",
    color: "white",
    // margin: "50px 0",
  };

  const heroSectionStyle = {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    textAlign: "center",
  };

  const heroTaglineStyle = {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "felx-start",
    fontSize: "2.5em",
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

  const heroTaglineDescriptionStyle = {
    fontSize: "0.5em",
    marginTop: "10px",
    maxWidth: "600px",
    lineHeight: "1.5",
    textAlign: "left",
    margin: "32px 0",
  };

  const heroTaglineLargerStyle = {
    fontSize: "2em", // Larger font size for "Perfect Cocktail"
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div style={containerStyle}>
      <section style={heroSectionStyle}>
        <div style={heroTaglineStyle}>
          <div>Discover Your</div>
          <div style={heroTaglineLargerStyle}>Perfect Cocktail</div>
          <div style={heroTaglineDescriptionStyle}>
            Find the best cocktails tailored to your taste. Explore a wide
            variety of recipes and create your perfect drink.
          </div>
          <CustomButton to="/browse">Get Started</CustomButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
