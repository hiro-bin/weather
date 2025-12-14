import styled from "styled-components";
import type { DailyWeather, WeatherDetailProps } from "../types/weather";
import {
  getWeatherDescription,
  getWeatherIcon,
  formatDate,
} from "../utils/weatherUtils";
import TempText from "./TempText";
import WeatherIcon from "./WeatherIcon";

function WeekWeather({ weatherData }: WeatherDetailProps) {
  const weekData = weatherData.daily.slice(2);

  return (
    <WeekWeatherStyle>
      <h1>Week Weather</h1>
      {weekData.map((day: DailyWeather) => (
        <div key={day.date} className="day-weather">
          <div className="date">{formatDate(day.date)}</div>
          <div className="weather-info">
            <div className="morning">
              <span>Morning: </span>
              {day.morning.weather_code !== null ? (
                <>
                  <WeatherIcon size="small">
                    {getWeatherIcon(day.morning.weather_code)}
                  </WeatherIcon>
                  <span>{getWeatherDescription(day.morning.weather_code)}</span>
                </>
              ) : (
                <span>데이터가 존재하지 않습니다.</span>
              )}
              <TempText>{day.morning.temperature_2m}°C</TempText>
            </div>
            <div className="afternoon">
              <span>Afternoon: </span>
              {day.afternoon.weather_code !== null ? (
                <>
                  <WeatherIcon size="small">
                    {getWeatherIcon(day.afternoon.weather_code)}
                  </WeatherIcon>
                  <span>
                    {getWeatherDescription(day.afternoon.weather_code)}
                  </span>
                </>
              ) : (
                <span>데이터가 존재하지 않습니다.</span>
              )}
              <TempText isMax>{day.afternoon.temperature_2m}°C</TempText>
            </div>
          </div>
        </div>
      ))}
    </WeekWeatherStyle>
  );
}

const WeekWeatherStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export default WeekWeather;
