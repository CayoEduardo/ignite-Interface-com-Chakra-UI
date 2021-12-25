import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Flex
      w="100%"
      h={370}
      flexDir="column"
      p="8"
      px="20"
      backgroundImage={`url('/images/Banner.png')`}
      backgroundSize="cover"
      justify="center"
    >
      <Box>
        <Box>
          <Heading fontSize="2.25rem" fontWeight="medium" color="white">
            5 Continentes,
          </Heading>
          <Heading fontSize="2.25rem" fontWeight="medium" color="white">
            infinitas possibilidades.
          </Heading>
        </Box>
        <Text
          mt="5"
          w="40ch"
          fontSize="1.25rem"
          fontWeight="regular"
          color="white"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
    </Flex>
  );
};

export default Banner;
