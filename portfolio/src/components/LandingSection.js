import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import My_pic from "../images/My_pic.jpg"
import "./App.css"

const greeting = "Hello, I am Muhammad Ali!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="xl" src={My_pic} id="MyPhoto"/>
      <Heading as="h1" color="white" textAlign="center">
        {greeting}
      </Heading>
      <Heading as="h3" color="white" textAlign="center">
        {bio1}
      </Heading>
      <Heading as="h3" color="white" textAlign="center">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
