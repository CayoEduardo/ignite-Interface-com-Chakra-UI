import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Header from "../components/Header";
import {
  Flex,
  Image,
  Heading,
  Box,
  Text,
  theme,
  Divider,
} from "@chakra-ui/react";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageOverlaySlide from "../components/ImageOverlay";

const Home: NextPage = () => {
  const router = useRouter();

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

      {/* Box com avião */}
      <Banner />

      {/* Icones */}
      <TravelTypes />

      <Divider
        mt="80px"
        w="90px"
        color="black"
        bg="black"
        alignSelf="center"
        h="4px"
      />

      {/* Vamos nessa? */}
      <Box px="300px" py="52px">
        <Text
          fontSize="2.25rem"
          fontWeight="medium"
          color="headingAndText.default"
          textAlign="center"
        >
          Vamos nessa?
        </Text>
        <Text
          fontSize="2.25rem"
          fontWeight="medium"
          color="headingAndText.default"
          textAlign="center"
        >
          Então escolha seu continente
        </Text>
      </Box>

      <Box px="100px">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          allowSlideNext
          allowSlidePrev
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide onClick={() => router.push("/europa")}>
            <ImageOverlaySlide imagePath="/images/europa.jpg" title="Europa" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageOverlaySlide imagePath="/images/asia.jpg" title="Asia" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageOverlaySlide imagePath="/images/africa.jpg" title="Africa" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageOverlaySlide
              imagePath="/images/oceania.jpg"
              title="Oceania"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageOverlaySlide
              imagePath="/images/americas.jpg"
              title="Américas"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
};

export default Home;
