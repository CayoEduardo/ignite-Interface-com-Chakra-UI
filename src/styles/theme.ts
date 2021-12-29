import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    headingAndText: { default: "#47585B" },
    highlight: "#FFBA08",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Poppins",
      },
    },
  },
});
