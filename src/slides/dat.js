import React from "react";

import { Slide, SlideSet, Notes, Image, Code } from "spectacle";
import { Heading, Text, Color } from "../components";

const images = {
  torrenting: require("../assets/torrenting.png"),
  datLogo: require("../assets/dat-logo.svg")
};

export const datSlides = [
  <Slide bgColor="green">
    <Heading textColor="white">Decentralized Networks</Heading>
    <Notes>
      Works as the client and the server. Every user participates equally and
      shares files. Torrenting is one of the most common applications of
      distributed networks
    </Notes>
  </Slide>,
  <Slide bgColor="black">
    <Image src={images.torrenting} />
    <Notes>
      BitTorrent is a file sharing protocol, one of the most common protocols
      for transferring large files
    </Notes>
  </Slide>,
  <Slide>
    <Heading>BitTorrent</Heading>
    <Text>🚫 Anonymity</Text>
    <Text>🚫 Security</Text>
    <Notes>IP addresses etc.</Notes>
  </Slide>,
  <Slide>
    <Heading>Dat</Heading>
    <Image src={images.datLogo} />
    <Notes>
      Dat is free software built for the public by Code for Science & Society, a
      nonprofit. It has been very difficult to avoid centralized servers without
      major sacrifices. Best parts of git, BitTorrent and dropbox
    </Notes>
  </Slide>,
  <Slide>
    <Heading>Key Concepts</Heading>
    <Text>🗻 In-place archiving</Text>
    <Text>🔗 Distributed network</Text>
    <Text>📝 Version history</Text>
    <Text>🕵️‍ Privacy</Text>
    <Notes>
      - any folder on your computer can become a dat archive, it has a secret
      file added to it and thats all, youre not moving your files anywhere -
      sends data on a distributed network, instantly syncs up - version control
      is built into the metadata of the file as soon as you make it a dat
      archive - your data is accessible/shareable through a 64 hex character
      link which acts as a sort of password so hang on to those carefully
    </Notes>
  </Slide>,
  <Slide>
    <Heading fit>How is Dat being used?</Heading>
    <Text>🔬 Archiving and distributing scientific data</Text>
    <Text>🗺 Offline editable maps</Text>
    <Text>😺 Sharing cute cat pictures with your friends</Text>
    <Text>👯 Browsing peer-to-peer websites</Text>
    <Notes>
      Researchers, analysts, libraries, and universities are already using Dat
      to archive and distribute scientific data. OpenStreetMap is a free,
      editable map of the world created by volunteers. This is especially
      helpful in mapping out areas without internet connections like the Waorani
      villages in the Ecuadorain Amazon. You can use dat for file sharing in
      general. You can also use to to browse and develop peer-to-peer web apps
    </Notes>
  </Slide>
];
