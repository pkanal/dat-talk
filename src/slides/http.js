import React from "react";

import { Slide, SlideSet, Notes, Image } from "spectacle";
import { Heading, Text } from "../components";

const images = {
  httpSpec: require("../assets/http-spec.png"),
  httpClientServer: require("../assets/http-client-server.png"),
  clientServer: require("../assets/client-server.png")
};

export const httpSlides = [
  <Slide>
    <Heading>HTTP</Heading>
    <Image width="50%" src={images.httpSpec} />
    <Notes>
      We communicate with servers through the HTTP protocol. defined a long time
      ago hasn't changed very much this is where our client/server thinking came
      from design goals: file transfer functionality, ability to request an
      index search of a hypertext archive, format negotiation, and an ability to
      refer the client to another server. The internet started out as academic
      curiosity, and we're still using HTTP for everything
    </Notes>
  </Slide>,
  <Slide>
    <Image src={images.httpClientServer} />
    <Notes>
      The client/server model was baked into how the internet was designed. The
      internet itself was experimental and this was the first iteration of how
      file sharing should work and it hasnt changed much. Its affected all of us
      in extremely major ways and now people are looking into how we might to
      things differently
    </Notes>
  </Slide>,
  <Slide>
    <Image src={images.clientServer} />
    <Notes>
      Cloud services force people to store data in places out of their control
    </Notes>
  </Slide>
];
