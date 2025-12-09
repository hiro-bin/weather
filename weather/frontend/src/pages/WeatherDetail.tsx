import styled from "styled-components";
import TodayWeather from "../components/TodayWeather";
import TomorrowWeather from "../components/TomorrowWeather";
import Index from "../components/Index";
import WeekWeather from "../components/WeekWeather";

function WeatherDetail() {
  return (
    <WeatherDetailStyle>
      <TodayWeather />
      <TomorrowWeather />
      <Index />
      <WeekWeather />
    </WeatherDetailStyle>
  );
}

const WeatherDetailStyle = styled.div``;

export default WeatherDetail;