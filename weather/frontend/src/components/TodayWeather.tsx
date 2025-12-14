import styled from "styled-components";
import type { WeatherDetailProps } from "../types/weather";
import {
  formatDate,
  getWeatherDescription,
  getWeatherIcon,
} from "../utils/weatherUtils";
import TempText from "./TempText";
import WeatherIcon from "./WeatherIcon";
import TempChange from "./TempChange";

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
      <h1>오늘</h1>
      <p>{`현재 ${formatDate(todayDate)}`}</p>
      <WeatherIcon size="large">{`${getWeatherIcon(todayWeatherCode)}`}</WeatherIcon>
      <p>{`${getWeatherDescription(todayWeatherCode)}`}</p>
      <p>{`${todayCurrentTemp}`}</p>
      <p>
        어제보다 <TempChange change={tempChange}></TempChange>
      </p>
      <TempText>{`최저 ${todayMinTemp}`}</TempText>
      <TempText isMax>{`최고 ${todayMaxTemp}`}</TempText>
      <p>{`습도 ${todayHumidity}%`}</p>
    </TodayWeatherStyle>
  );
}

const TodayWeatherStyle = styled.div``;

export default TodayWeather;
