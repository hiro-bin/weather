import styled from "styled-components";
import type { DailyWeather, WeatherDetailProps } from "../types/weather";
import DailyWeatherCard from "./DailyWeatherCard";

function WeekWeather({ weatherData }: WeatherDetailProps) {
  const weekData = weatherData.daily.slice(2);

  return (
    <WeekWeatherStyle>
      <h1>Week Weather</h1>
      <div className="week-container">
        {weekData.map((day: DailyWeather) => (
          <DailyWeatherCard
            key={day.date}
            date={day.date}
            morningWeatherCode={day.morning.weather_code}
            afternoonWeatherCode={day.afternoon.weather_code}
            minTemp={day.temperature_2m_min}
            maxTemp={day.temperature_2m_max}
            iconSize="small"
          />
        ))}
      </div>
    </WeekWeatherStyle>
  );
}

const WeekWeatherStyle = styled.div`
  text-align: center;
  .week-container {
    display: flex;
    flex-direction: row;
  }
`;

export default WeekWeather;
