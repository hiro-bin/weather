import styled from "styled-components";
import type { WeatherDetailProps } from "../types/weather";
import { getWeatherDescription, getWeatherIcon } from "../utils/weatherUtils";

function TodayWeather({ weatherData }: WeatherDetailProps) {
  const todayWeatherCode = weatherData.current.weather_code;
  const todayCurrentTemp = weatherData.current.temperature_2m;
  const todayHumidity = weatherData.current.relative_humidity_2m;

  const todayDailyData = weatherData.daily[1];
  const yesterdayDailyData = weatherData.daily[0];

  const todayDate = todayDailyData.date;
  const todayMinTemp = todayDailyData.temperature_2m_min;
  const todayMaxTemp = todayDailyData.temperature_2m_max;
  
  const yesterdayMaxTemp = yesterdayDailyData.temperature_2m_max;
  const tempChange = parseInt((todayMaxTemp - yesterdayMaxTemp).toFixed(0));

  return (
    <TodayWeatherStyle>
      <h1>TodayWeather</h1>
      <p>{`date:${todayDate}`}</p>
      <p>{`weatherIcon:${getWeatherIcon(todayWeatherCode)}`}</p>
      <p>{`weatherDescription:${getWeatherDescription(todayWeatherCode)}`}</p>
      <p>{`currentTemp:${todayCurrentTemp}`}</p>
      <p>{`tempChange:${tempChange}`}</p>
      <p>{`minTemp:${todayMinTemp}`}</p>
      <p>{`maxTemp:${todayMaxTemp}`}</p>
      <p>{`humidity:${todayHumidity}`}</p>
    </TodayWeatherStyle>
  );
}

const TodayWeatherStyle = styled.div``;

export default TodayWeather;