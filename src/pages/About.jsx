import React from "react";

const About = () => {
  return (
    <main style={{ textAlign: "center", alignItems: "center" }}>
      <h1 style={{ fontSize: 2.5 + "rem" }}>
        About DiscoverFood: Unveiling the Culinary Odyssey Behind Every Recipe
      </h1>
      <p
        style={{
          fontSize: 1.2 + "rem",
          maxWidth: 900 + "px",
          letterSpacing: 1 + "px",
          lineHeight: 2 + "rem",
        }}
      >
        Welcome to DiscoverFood, your ultimate culinary companion! Unleash your inner chef by
        exploring an extensive collection of delectable recipes from around the world. With a
        user-friendly interface, our website empowers you to effortlessly search for your favorite
        dishes or discover new ones. Whether you have a specific craving, dietary preference, or
        ingredient on hand, use our intuitive <b>filters</b> or simply type into the{" "}
        <b>search bar</b> to find the perfect recipe. Dive deeper into each dish by clicking for
        detailed instructions, ingredients, and nutrition information. Elevate your cooking
        experience with DiscoverFood, where every meal is a delightful adventure!
      </p>
      <img
        src='./src/assets/logo.png'
        alt='Logo'
        style={{
          height: 15 + "rem",
          borderWidth: 4 + "px",
          borderColor: "#29b380",
          borderStyle: "solid",
        }}
      />
    </main>
  );
};

export default About;
