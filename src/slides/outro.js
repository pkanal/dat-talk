import React from "react";

import { Slide, SlideSet, Notes, Image, Code } from "spectacle";
import { Heading, Text } from "../components";

export const outroSlides = [
  <Slide>
    <Heading>What to do next</Heading>
    <Text>⬇️ Install Beaker Browser: https://beakerbrowser.com/install/</Text>
    <Text>👩‍👩‍👧‍👧 Join us in #dat</Text>
    <Text>⚛️ Build React apps: https://github.com/pkanal/cra-dat</Text>
    <Text>
      🍟 Create a Fritter account:
      dat://9900f9aad4d6e79e0beb1c46333852b99829e4dfcdfa9b690eeeab3c367c1b9a
    </Text>
  </Slide>,
  <Slide>
    <Heading fit>💖 Open Web 💖</Heading>
    <Notes>
      Everything we've talking about today is highly experimental, but its
      important that the internet was once experimental itself. Its hard to
      iterate on something that is responsible for so many of the worlds
      essential systems, we have to try though. Keeping the web open is
      beneficial for all of us
    </Notes>
  </Slide>,
  <Slide>
    <Heading>🤔 Questions?</Heading>
  </Slide>
];
