import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ProfilePic from '../images/ProfilePic.png';

const greeting = "Hello, I am Özge !";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" src={ProfilePic} />
      <Heading as="h1" size="xl">{greeting}</Heading>
      <Heading as="h2" size="md">{bio1}</Heading>
      <Heading as="h3" size="sm">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
