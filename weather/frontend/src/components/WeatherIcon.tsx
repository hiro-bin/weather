import styled from "styled-components";
import type { IconSize } from "../styles/theme";

interface WeatherIconProps {
  size: IconSize;
  children: React.ReactNode;
}

const WeatherIcon = styled.div<WeatherIconProps>`
  font-size: ${({ theme, size }) => theme.fontSizes.icon[size]};
  margin: 1rem 0;
`;

export default WeatherIcon;
