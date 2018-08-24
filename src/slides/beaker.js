import React from "react";

import { Slide, SlideSet, Notes, Image, Code } from "spectacle";
import { Heading, Text } from "../components";

const images = {
  beakerLogo: require("../assets/beaker-logo.png")
};

export const beakerSlides = [
  <Slide bgColor="purple">
    <Image src={images.beakerLogo} />
    <Notes>
      Beaker is an experimental browser for exploring and building the
      peer-to-peer Web. You can browse http, it also supports dat links
    </Notes>
  </Slide>,
  <Slide>
    <Heading fit>Beaker Browser</Heading>
    <Text>🕵️‍ Allows you to browse dat:// websites</Text>
    <Text>🌿 Seed files of dat:// sites that you visit</Text>
    <Text>🍴Fork existing webpages built with a Dat Archive</Text>
    <Text>👩‍💻 Access DatArchive APIs</Text>
    <Notes>
      dat:// websites work just like any other webpage. They’re a collection of
      HTML, CSS, and JavaScript files that come together to form a webpage. Just
      like with http:// websites, you can click links, download images, and use
      developer tools to interact with the page. Switch to geocities demo
    </Notes>
  </Slide>,
  <Slide>
    <Heading>Demo time!</Heading>
  </Slide>,
  <Slide>
    <Heading>Keep your sites online</Heading>
    <Text>#️⃣ Hashbase</Text>
    <Text>🏡 Homebase</Text>
    <Notes>
      Publishing with Dat means that peers will contribute bandwidth, but only
      if they're online and sharing your files. If nobody's hosting your files,
      then they won't be accessible. Thats where Hashbase comes in. They act as
      a "super peer" that makes sure your content is always available. Homebase
      is for if you want to do the work of becoming a “super peer”, some ops
      involved
    </Notes>
  </Slide>,
  <Slide>
    <Heading>Fritter</Heading>
    <Text>Example of how to build peer-to-peer web apps</Text>
    <Notes>
      Demo fritter: load a profile, talk about how its private unless people
      know your dat url, your profile goes offline if you go offline etc
    </Notes>
  </Slide>
];
