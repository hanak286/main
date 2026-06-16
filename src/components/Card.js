import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      color="black"
      _dark={{ bg: "gray.700", color: "white" }}
      align="stretch"
      spacing={0}
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "xl" }}
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      <VStack align="start" p={6} spacing={4} flex={1}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack pt={2}>
          <Text fontWeight="bold" color="teal.500">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} color="#319795" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
