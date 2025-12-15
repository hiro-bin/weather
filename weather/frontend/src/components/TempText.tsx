import styled from "styled-components";

interface TempTextProps {
  isMax?: boolean;
  children: React.ReactNode;
}

const TempText = styled.span<TempTextProps>`
  color: ${({ isMax, theme }) =>
    isMax ? theme.colors.maxTemp : theme.colors.minTemp};
`;

export default TempText;
