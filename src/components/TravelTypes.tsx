import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const TravelTypes = () => {
  return (
    <Flex mt="20" h={145} px={180} justify="space-between" align="center">
      <Flex flexDir="column" align="center" justify="space-between">
        <Image w={85} h={85} src="/images/cocktail.png" />
        <Text
          fontSize="1.5rem"
          mt={2}
          fontWeight="semibold"
          color="headingAndText.default"
        >
          vida noturna
        </Text>
      </Flex>
      <Flex flexDir="column" align="center" justify="space-between">
        <Image w={85} h={85} src="/images/surf.png" />
        <Text
          fontSize="1.5rem"
          mt={2}
          fontWeight="semibold"
          color="headingAndText.default"
        >
          praia
        </Text>
      </Flex>
      <Flex flexDir="column" align="center" justify="space-between">
        <Image w={85} h={85} src="/images/building.png" />
        <Text
          fontSize="1.5rem"
          mt={2}
          fontWeight="semibold"
          color="headingAndText.default"
        >
          moderno
        </Text>
      </Flex>
      <Flex flexDir="column" align="center" justify="space-between">
        <Image w={85} h={85} src="/images/museum.png" />
        <Text
          fontSize="1.5rem"
          mt={2}
          fontWeight="semibold"
          color="headingAndText.default"
        >
          clássico
        </Text>
      </Flex>
      <Flex flexDir="column" align="center" justify="space-between">
        <Image w={85} h={85} src="/images/earth.png" />
        <Text
          fontSize="1.5rem"
          mt={2}
          fontWeight="semibold"
          color="headingAndText.default"
        >
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
};

export default TravelTypes;
