import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Flex
      w="100%"
      h={380}
      flexDir="column"
      // p="8"
      px={{ base: "0", md: "20" }}
      backgroundImage={`url('/images/Banner.png')`}
      backgroundSize="cover"
      justify="center"
    >
      <Flex
        flexDir="column"
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "flex-start", md: "center" }}
      >
        <Box>
          <Heading
            fontSize={{ base: "2rem" }}
            fontWeight="medium"
            color="white"
          >
            5 Continentes,
          </Heading>
          <Heading
            fontSize={{ base: "2rem" }}
            fontWeight="medium"
            color="white"
          >
            infinitas possibilidades.
          </Heading>
        </Box>
        <Text
          mt="5"
          textAlign="left"
          w={{ base: "35ch" }}
          fontSize={{ base: "1rem", sm: "1.25rem", lg: "1.25rem" }}
          fontWeight="regular"
          color="white"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Banner;
