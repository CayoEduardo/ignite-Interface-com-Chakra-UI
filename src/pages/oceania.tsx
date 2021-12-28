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
import { oceania } from "../utils/paises";

type Cidade = {
  imagePath: string;
  city: string;
  country: string;
  flag: string;
};

const Oceania = () => {
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
          src="/images/oceania.jpg"
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
              Oceania
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
              Oceania ou Oceânia é uma região geográfica composta por vários
              grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e
              Micronésia). O termo Oceania foi criado em 1831 pelo explorador
              francês Dumont d'Urville. O termo é usado hoje em vários idiomas
              para designar uma região geográfica e política que compreende o
              continente da Austrália e ilhas do Oceano Pacífico adjacentes.
            </Text>
            <br />
            <Text
              fontSize="1.5rem"
              fontWeight="regular"
              color="headingAndText.default"
            >
              Os limites da Oceania são definidos de várias maneiras. A maioria
              das definições reconhecem partes da Australásia como a Austrália,
              Nova Zelândia e Nova Guiné, e parte do Arquipélago Malaio como
              sendo partes da Oceania.
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
            {oceania?.map((cidade: Cidade) => (
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

export default Oceania;
