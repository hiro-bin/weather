import styled from "styled-components";
import TodayWeather from "../components/TodayWeather";
import TomorrowWeather from "../components/TomorrowWeather";
import Index from "../components/Index";
import WeekWeather from "../components/WeekWeather";
import { useEffect, useState } from "react";
import { fetchWeather } from "../api/weather";
import Loading from "../components/Loading";
import type { WeatherData } from "../types/weather";

function WeatherDetail() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWeather();

        if(!data) {
          throw new Error("날씨 데이터를 받아왔지만 내용이 비어있습니다.");
        }
        setWeatherData(data);
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  // TODO: 에러 페이지 만들기
  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!weatherData) return null;

  return (
    <WeatherDetailStyle>
      <TodayWeather weatherData={weatherData} />
      <TomorrowWeather weatherData={weatherData} />
      <Index />
      <WeekWeather weatherData={weatherData} />
    </WeatherDetailStyle>
  );
}

const WeatherDetailStyle = styled.div``;

export default WeatherDetail;