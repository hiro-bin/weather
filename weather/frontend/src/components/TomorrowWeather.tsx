import styled from "styled-components";
import type { WeatherDetailProps } from "../types/weather";
import {
  formatDate,
  getWeatherDescription,
  getWeatherIcon,
} from "../utils/weatherUtils";
import TempText from "./TempText";
import WeatherIcon from "./WeatherIcon";

function TomorrowWeather({ weatherData }: WeatherDetailProps) {
  const tomorrow = weatherData.daily[2];
  const tomorrowDate = tomorrow.date;
  const tomorrowMorningTemp = tomorrow.morning.temperature_2m;
  const tomorrowMorningWeatherCode = tomorrow.morning.weather_code;
  const tomorrowAfternoonTemp = tomorrow.afternoon.temperature_2m;
  const tomorrowAfternoonWeatherCode = tomorrow.afternoon.weather_code;

  return (
    <TomorrowWeatherStyle>
      <h1>내일</h1>
      <div className="date">{formatDate(tomorrowDate)}</div>
      <div className="weather-info">
        <div className="morning">
          <span>Morning: </span>
          {tomorrowMorningWeatherCode !== null ? (
            <>
              <WeatherIcon size="large">
                {getWeatherIcon(tomorrowMorningWeatherCode)}
              </WeatherIcon>
              <span>{getWeatherDescription(tomorrowMorningWeatherCode)}</span>
            </>
          ) : (
            <span>데이터가 존재하지 않습니다.</span>
          )}
          <TempText>{tomorrowMorningTemp}°C</TempText>
        </div>
        <div className="afternoon">
          <span>Afternoon: </span>
          {tomorrowAfternoonWeatherCode !== null ? (
            <>
              <WeatherIcon size="large">
                {getWeatherIcon(tomorrowAfternoonWeatherCode)}
              </WeatherIcon>
              <span>{getWeatherDescription(tomorrowAfternoonWeatherCode)}</span>
            </>
          ) : (
            <span>데이터가 존재하지 않습니다.</span>
          )}
          <TempText isMax>{tomorrowAfternoonTemp}°C</TempText>
        </div>
      </div>
    </TomorrowWeatherStyle>
  );
}

const TomorrowWeatherStyle = styled.div``;

export default TomorrowWeather;
