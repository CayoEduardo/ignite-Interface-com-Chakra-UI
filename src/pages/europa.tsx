import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  theme,
} from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";

type Cidade = {
  imagePath: string;
  city: string;
  country: string;
  flag: string;
};

const Europa = () => {
  const cidades = [
    {
      imagePath: "/images/londres.jpg",
      city: "Londres",
      country: "UK",
      flag: "UK",
    },
    {
      imagePath: "/images/paris.png",
      city: "Paris",
      country: "França",
      flag: "FR",
    },
    {
      imagePath: "/images/roma.png",
      city: "Roma",
      country: "Itália",
      flag: "ITA",
    },
    {
      imagePath: "/images/praga.png",
      city: "Praga",
      country: "Czéchia",
      flag: "CZH",
    },
    {
      imagePath: "/images/amsterdam.png",
      city: "Amsterdã",
      country: "Holanda ",
      flag: "NL",
    },
  ];

  return (
    <Flex
      flexDir="column"
      pb="4rem"
      minW={375}
      maxW={1440}
      mx="auto"
      border={`1px solid ${theme.colors.gray["200"]}`}
      minH="100vh"
    >
      <Header />
      {/* Overlay */}
      <Box maxW={1440} maxH={450} position="relative">
        <Image
          src="/images/europa.jpg"
          w="100%"
          h="auto"
          maxW={1440}
          maxH={450}
        />
        <Flex
          position="absolute"
          top="0"
          left="0"
          align="flex-end"
          justify="flex-start"
          w="100%"
          h="100%"
          p="16"
          bg="rgba(0,0,0,0.4)"
        >
          <Box>
            <Heading
              textAlign="center"
              fontSize="2.375rem"
              fontWeight="bold"
              color="white"
              ml="8"
            >
              Europa
            </Heading>
          </Box>
        </Flex>
      </Box>

      {/* Container */}
      <Box px={140}>
        {/* Infos */}
        <SimpleGrid columns={2} gap="4">
          <Box pt="80px">
            <Text
              fontSize="1.5rem"
              fontWeight="regular"
              color="headingAndText.default"
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Flex align="center" justify="space-around" pt="80px">
            <Box>
              <Text
                textAlign="center"
                fontSize="3rem"
                fontWeight="semibold"
                color="highlight"
              >
                50
              </Text>
              <Text textAlign="center" fontSize="1.5rem" fontWeight="semibold">
                países
              </Text>
            </Box>
            <Box>
              <Text
                textAlign="center"
                fontSize="3rem"
                fontWeight="semibold"
                color="highlight"
              >
                60
              </Text>
              <Text textAlign="center" fontSize="1.5rem" fontWeight="semibold">
                línguas
              </Text>
            </Box>
            <Box>
              <Text
                textAlign="center"
                fontSize="3rem"
                fontWeight="semibold"
                color="highlight"
              >
                27
              </Text>
              <Text textAlign="center" fontSize="1.5rem" fontWeight="semibold">
                cidades + 100
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>

        {/* Container cards Cidades */}
        <Box pt="80px">
          <Heading
            fontSize="2.25rem"
            fontWeight="medium"
            color="headingAndText.default"
          >
            Cidades + 100
          </Heading>
          <SimpleGrid columns={4} gap={8} mt="80px">
            {/* Card */}
            {cidades.map((cidade: Cidade) => (
              <Card
                key={cidade.city}
                imagePath={cidade.imagePath}
                city={cidade.city}
                country={cidade.country}
                flag={cidade.flag}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default Europa;
