import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";

type ImageOverlayProps = {
  imagePath: string;
  title: string;
  subtitle?: string;
};

const ImageOverlay = ({
  imagePath,
  title,
  subtitle = "",
}: ImageOverlayProps) => {
  return (
    <Box
      maxW={1240}
      maxH={450}
      position="relative"
      _hover={{ cursor: "pointer" }}
    >
      <Image src={imagePath} w="100%" h="auto" maxW={1240} maxH={450} />
      <Flex
        position="absolute"
        top="0"
        left="0"
        align="center"
        justify="center"
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.4)"
      >
        <Box>
          <Heading
            textAlign="center"
            fontSize="2.375rem"
            fontWeight="bold"
            color="white"
          >
            {title}
          </Heading>
          <Text
            textAlign="center"
            fontSize="1.5rem"
            fontWeight="bold"
            color="white"
          >
            {subtitle}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ImageOverlay;
