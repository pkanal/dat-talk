// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { introSlides } from "./slides/intro";
import { httpSlides } from "./slides/http";
import { datSlides } from "./slides/dat";
import { beakerSlides } from "./slides/beaker";
import { outroSlides } from "./slides/outro";

// Require CSS
require("normalize.css");
require("./assets/base-styles.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    blue: "#000c9e",
    green: "#08c39d",
    pink: "#eb2c88",
    white: "white",
    purple: "#4e57ca",
    black: "black"
  },
  {
    primary: {
      name: "Lato",
      googleFont: true,
      styles: [400, 700]
    },
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme} progress="none">
        {introSlides}
        {httpSlides}
        {datSlides}
        {beakerSlides}
        {outroSlides}
      </Deck>
    );
  }
}
