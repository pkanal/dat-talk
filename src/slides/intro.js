import React from "react";

import { Slide, SlideSet, Notes, Image, S } from "spectacle";
import { Heading, Text, Color } from "../components";

const images = {
  geocitiesLogo: require("../assets/geocities-logo.png"),
  geocitiesExample: require("../assets/geocities-example-1.jpg"),
  socialMedia: require("../assets/social-media.jpg")
};

export const introSlides = [
  <Slide bgColor="blue">
    <Heading textColor="white" fit>
      Dont <span class="pink">@</span> me, <span class="pink">dat://</span> me
    </Heading>
    <Text textColor="white">
      Apps for the 👩‍💻 <span class="pink">peer-to-peer</span> 🤹‍ web
    </Text>
  </Slide>,
  <Slide>
    <Heading>🌎 The Web 🌎</Heading>
    <Text>☎️ Communication</Text>
    <Text>👩‍👩‍👧‍👧 Collaboration</Text>
    <Text>🎨 Creativity</Text>
    <Notes>
      The Web enabled communication, collaboration, and creativity at a once
      unimaginable scale. It created a space where you could express yourself
      however you wanted and it would propagate to the whole world.
    </Notes>
  </Slide>,
  <Slide>
    <Image src={images.geocitiesLogo} />
    <Notes>
      Let’s think back a bit, show of hands, how many people here had a
      geocities site?
    </Notes>
  </Slide>,
  <Slide>
    <Image src={images.geocitiesExample} />
    <Notes>
      The ultimate personal expression. As time has gone on, the web has become
      a sort of landscape of isolated platforms
    </Notes>
  </Slide>,
  <Slide>
    <Image src={images.socialMedia} />
    <Notes>
      Now, our online experiences are dictated by corporations. The web’s value
      comes from the people who use it but our experiences are controlled by
      companies.
    </Notes>
  </Slide>,
  <Slide>
    <Heading fit>
      👑 This makes <Color>servers</Color> a{" "}
      <Color>centralized authority</Color> 👑
    </Heading>
    <Notes>
      Remember when Geocities was taken down? All of those amazing sites were
      gone, you were able to access them one day and then they were just gone.
      The Internet Archive did a project to archive these sites, and it was
      quite a big effort they ultimately archived ~600GB of data.
    </Notes>
  </Slide>
];
