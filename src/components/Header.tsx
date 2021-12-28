import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Flex maxW={1440} h={100} align="center" justify="center">
      <Image
        _hover={{ cursor: "pointer" }}
        src="/images/Logo.png"
        alt="Logo"
        onClick={() => router.push("/")}
      />
    </Flex>
  );
};

export default Header;
