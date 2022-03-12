export default {
  colors: {
    primary: {
      50: "#ffe2e2",
      100: "#ffb2b2",
      200: "#ff8080",
      300: "#fe4e4e",
      400: "#fe1f1c",
      500: "#e50a03",
      600: "#b20301",
      700: "#800000",
      800: "#4e0000",
      900: "#1f0000",
    },

    secondary: {
      50: "#fbf0f2",
      100: "#dcd8d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#282626",
      900: "#150a0d",
    },
  },

  fonts: {
    Title: "Sickness",
    roboto: "RobotoMono_500Medium",
  },

  components: {
    Button: {
      defaultProps: {
        _text: {
          fontFamily: "Title",
          color: "#e50a03",
          fontSize: 30,
        },
        colorScheme: "secondary",
        bg: "secondary.200",
        rounded: "20",
        py: 3,
        px: 2,
      },
    },
    Text: {
      variants: {
        textBody: ({ colorScheme }: any) => {
          return {
            fontSize: 12,
            fontFamily: "roboto",
            color: "primary.400",
            textAlign: "justify",
          };
        },
      },
    },
    Divider: {
      baseStyle: {
        bg: "primary.800",
      },
    },
  },
};
