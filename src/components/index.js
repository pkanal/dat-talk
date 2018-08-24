import styled from "react-emotion";
import { Heading as SpectacleHeading, Text as SpectacleText } from "spectacle";

const colors = {
  blue: "#000c9e",
  green: "#08c39d",
  pink: "#eb2c88",
  white: "white",
  purple: "#4e57ca"
};

export const Heading = styled(SpectacleHeading)`
  color: ${props => props.textColor || colors.blue};
`;

export const Text = styled(SpectacleText)`
  color: ${props => props.textColor || colors.blue};
  padding: 0.3em;
  text-align: left;
  margin-left: 2.5em;
`;

export const Color = styled("span")`
  color: ${props => colors[props.color] || colors.pink};
`;
