import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex maxW={1440} h={100} align="center" justify="center">
      <Image src="/images/Logo.png" alt="Logo" />
    </Flex>
  );
};

export default Header;
