import styled from "styled-components";
import type { WeatherDetailProps } from "../types/weather";
import { getWeatherDescription, getWeatherIcon } from "../utils/weatherUtils";

function TomorrowWeather({ weatherData }: WeatherDetailProps) {
  const tomorrow = weatherData.daily[2];
  const tomorrowDate = tomorrow.date;
  const tomorrowMorningTemp = tomorrow.morning.temperature_2m;
  const tomorrowMorningWeatherCode = tomorrow.morning.weather_code;
  const tomorrowAfternoonTemp = tomorrow.afternoon.temperature_2m;
  const tomorrowAfternoonWeatherCode = tomorrow.afternoon.weather_code;

  return (
    <TomorrowWeatherStyle>
      <h1>TomorrowWeather</h1>
      <div className="date">{tomorrowDate}</div>
      <div className="weather-info">
        <div className="morning">
          <span>Morning: </span>
          {tomorrowMorningWeatherCode !== null ? (
            <>
              <span>{getWeatherIcon(tomorrowMorningWeatherCode)}</span>
              <span>{getWeatherDescription(tomorrowMorningWeatherCode)}</span>
            </>
          ) : (
            <span>데이터가 존재하지 않습니다.</span>
          )}
          <span>{tomorrowMorningTemp}°C</span>
        </div>
        <div className="afternoon">
          <span>Afternoon: </span>
          {tomorrowAfternoonWeatherCode !== null ? (
            <>
              <span>{getWeatherIcon(tomorrowAfternoonWeatherCode)}</span>
              <span>{getWeatherDescription(tomorrowAfternoonWeatherCode)}</span>
            </>
          ) : (
            <span>데이터가 존재하지 않습니다.</span>
          )}
          <span>{tomorrowAfternoonTemp}°C</span>
        </div>
      </div>
    </TomorrowWeatherStyle>
  );
}

const TomorrowWeatherStyle = styled.div``;

export default TomorrowWeather;