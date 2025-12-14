import type { DefaultTheme } from "styled-components";

export type HeadingSize = "large" | "medium" | "small";
export type LayoutWidth = "large" | "medium" | "small";
export type IconSize = "large" | "small";

// export type MediaQuery = "mobile" | "tablet" | "desktop"; TODO: 시간 되면 하기

export interface Theme {
  colors: {
    minTemp: string;
    maxTemp: string;
  };
  fontSizes: {
    icon: {
      [key in IconSize]: string;
    };
  };
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
  };
  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
}

export const theme: DefaultTheme = {
  colors: {
    minTemp: "#0052A4",
    maxTemp: "#D43737",
  },
  fontSizes: {
    icon: {
      large: "6rem",
      small: "4rem",
    },
  },
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
  layout: {
    width: {
      large: "1200px",
      medium: "992px",
      small: "768px",
    },
  },
};

export default theme;
