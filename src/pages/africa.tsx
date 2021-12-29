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
import { africa } from "../utils/paises";

type Cidade = {
  imagePath: string;
  city: string;
  country: string;
  flag: string;
};

const Africa = () => {
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
          src="/images/africa.jpg"
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
              Africa
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
              A África é o terceiro continente mais extenso (depois da Ásia e da
              América) com cerca de 30 milhões de quilômetros quadrados,
              cobrindo 20,3% da área total da terra firme do planeta. É o
              segundo continente mais populoso da Terra (atrás da Ásia) com
              cerca de um bilhão de pessoas (estimativa para 2005[1]),
              representando cerca de um sétimo da população mundial, e 54 países
              independentes.
            </Text>
            <br />
            <Text
              fontSize="1.5rem"
              fontWeight="regular"
              color="headingAndText.default"
            >
              Apresenta grande diversidade étnica, cultural, social e política.
              Dos trinta países mais pobres do mundo (com mais problemas de
              subnutrição, analfabetismo, baixa expectativa de vida), pelo menos
              21 são africanos.
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
                3
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
            {africa?.map((cidade: Cidade) => (
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

export default Africa;
