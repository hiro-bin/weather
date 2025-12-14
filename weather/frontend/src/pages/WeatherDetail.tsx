import styled from "styled-components";
import TodayWeather from "../components/TodayWeather";
import TomorrowWeather from "../components/TomorrowWeather";
import Index from "../components/Index";
import WeekWeather from "../components/WeekWeather";
import type { WeatherData } from "../types/weather";

interface Props {
  weatherData: WeatherData;
}

function WeatherDetail({ weatherData }: Props) {
  return (
    <WeatherDetailStyle>
      <TopRowContainer>
        <TodayWeather weatherData={weatherData} />
        <TomorrowWeather weatherData={weatherData} />
        <Index />
      </TopRowContainer>
      <BottomRowContainer>
        <WeekWeather weatherData={weatherData} />
      </BottomRowContainer>
    </WeatherDetailStyle>
  );
}

const WeatherDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;

  > * {
    flex: 1;
  }
`;

const BottomRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default WeatherDetail;
