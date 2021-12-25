import React from "react";
import { Box, Image, Text, Flex, theme } from "@chakra-ui/react";

type CardProps = {
  imagePath: string;
  city: string;
  country: string;
  flag: string;
};

const Card = ({ imagePath, city, country, flag = "UK" }: CardProps) => {
  const getFlag = (flag: string) => {
    switch (flag) {
      case "UK":
        return "/images/england.png";
      case "FR":
        return "/images/france.png";
      case "ITA":
        return "/images/italy.png";
      case "CZH":
        return "/images/czechia.png";
      case "NL":
        return "/images/netherlands.png";

      default:
        return "/images/england.png";
    }
  };

  return (
    <Box
      w={256}
      h={280}
      borderTopRadius={8}
      border={`1px solid ${theme.colors.yellow["300"]}`}
    >
      <Box w="100%" h={170}>
        <Image src={imagePath} />
      </Box>
      <Flex p="24px">
        <Box flex={1}>
          <Text fontSize="1.25rem" fontWeight="semibold">
            {city}
          </Text>
          <Text fontSize="1rem" fontWeight="medium">
            {country}
          </Text>
        </Box>
        <Flex flex={1} justify="flex-end" align="flex-end">
          <Image src={getFlag(flag)} w="30px" h="30px" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
