import styled from "styled-components";

interface TempChangeProps {
  change: number;
}

interface StyleProps {
  isPositive: boolean;
  isNegative: boolean;
}

const TempChange: React.FC<TempChangeProps> = ({ change }) => {
  if (change === 0) {
    return (
      <TempChangeStyle isPositive={false} isNegative={false}>
        0
      </TempChangeStyle>
    );
  }

  const isPositive = change > 0;
  const arrow = isPositive ? "↑" : "↓";
  const absChange = Math.abs(change);

  return (
    <TempChangeStyle isPositive={isPositive} isNegative={!isPositive}>
      {arrow}
      {absChange}°
    </TempChangeStyle>
  );
};

const TempChangeStyle = styled.span<StyleProps>`
  font-weight: bold;
  color: ${({ theme, isPositive, isNegative }) => {
    if (isPositive) return theme.colors.maxTemp;
    if (isNegative) return theme.colors.minTemp;
    return "inherit";
  }};
`;

export default TempChange;
