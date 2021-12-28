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
import { america } from "../utils/paises";

type Cidade = {
  imagePath: string;
  city: string;
  country: string;
  flag: string;
};

const America = () => {
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
          src="/images/americas.jpg"
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
              América
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
              América é o continente localizado no hemisfério ocidental e que se
              estende, no sentido norte-sul, desde o oceano Ártico até o cabo
              Horn, ao longo de cerca de 15 mil quilômetros.
            </Text>
            <br />
            <Text
              fontSize="1.5rem"
              fontWeight="regular"
              color="headingAndText.default"
            >
              ambém é conhecida pela expressão "Novo Mundo", neste caso em
              oposição à Eurafrásia, considerada o "Velho Mundo", e à Oceania,
              chamada de "Novíssimo Mundo". A maioria dos estudiosos aponta o
              nome do navegador italiano Américo Vespúcio como origem
              etimológica do topônimo "América", cujo gentílico é "americano"
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
            {america?.map((cidade: Cidade) => (
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

export default America;
