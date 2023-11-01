import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      border="1px solid"
      borderColor="gray.200"
      borderRadius="8px"
      overflow="hidden"
      spacing={4}
      width="100%"
      boxShadow="sm"
      p={4}
    >
      <Image src={imageSrc} alt={title} width="100%" borderRadius="8px" />
      <VStack alignItems="start" spacing={2}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack justifyContent="flex-end" width="100%">
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );

};

export default Card;
