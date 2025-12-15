import styled from "styled-components";
import type { WeatherDetailProps } from "../types/weather";
import DailyWeatherCard from "./DailyWeatherCard";

function TomorrowWeather({ weatherData }: WeatherDetailProps) {
  const tomorrow = weatherData.daily[2];

  return (
    <TomorrowWeatherStyle>
      <h1>내일</h1>
      <DailyWeatherCard
        date={tomorrow.date}
        morningWeatherCode={tomorrow.morning.weather_code}
        afternoonWeatherCode={tomorrow.afternoon.weather_code}
        minTemp={tomorrow.temperature_2m_min}
        maxTemp={tomorrow.temperature_2m_max}
        iconSize="large"
      />
    </TomorrowWeatherStyle>
  );
}

const TomorrowWeatherStyle = styled.div`
  text-align: center;
`;

export default TomorrowWeather;
