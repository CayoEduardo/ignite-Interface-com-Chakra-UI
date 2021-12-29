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
      <Box py="52px" px={{ base: 2, md: 0 }}>
        <Text
          fontSize={{ base: "1.50rem", lg: "2.25rem" }}
          fontWeight="medium"
          color="headingAndText.default"
          textAlign="center"
        >
          Vamos nessa?
        </Text>
        <Text
          fontSize={{ base: "1.50rem", lg: "2.25rem" }}
          fontWeight="medium"
          color="headingAndText.default"
          textAlign="center"
        >
          Então escolha seu continente
        </Text>
      </Box>

      <Box px={{ base: "0px", md: "100px" }}>
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
          <SwiperSlide onClick={() => router.push("/asia")}>
            <ImageOverlaySlide imagePath="/images/asia.jpg" title="Asia" />
          </SwiperSlide>
          <SwiperSlide onClick={() => router.push("/africa")}>
            <ImageOverlaySlide imagePath="/images/africa.jpg" title="Africa" />
          </SwiperSlide>
          <SwiperSlide onClick={() => router.push("/oceania")}>
            <ImageOverlaySlide
              imagePath="/images/oceania.jpg"
              title="Oceania"
            />
          </SwiperSlide>
          <SwiperSlide onClick={() => router.push("/america")}>
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
