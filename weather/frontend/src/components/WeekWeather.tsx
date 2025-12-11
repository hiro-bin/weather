import styled from "styled-components";
import type { WeatherDetailProps } from "../types/weather";
import { getWeatherDescription, getWeatherIcon } from "../utils/weatherUtils";

function WeekWeather({ weatherData }: WeatherDetailProps) {
  const weekData = weatherData.daily.slice(2);

  return (
    <WeekWeatherStyle>
        <h1>Week Weather</h1>
        {weekData.map((day: any) => (
            <div key={day.date} className="day-weather">
                <div className="date">{day.date}</div>
                <div className="weather-info">
                    <div className="morning">
                        <span>Morning: </span>
                        <span>{getWeatherIcon(day.morning.weather_code)}</span>
                        <span>{getWeatherDescription(day.morning.weather_code)}</span>
                        <span>{day.morning.temperature_2m}°C</span>
                    </div>
                    <div className="afternoon">
                        <span>Afternoon: </span>
                        <span>{getWeatherIcon(day.afternoon.weather_code)}</span>
                        <span>{getWeatherDescription(day.afternoon.weather_code)}</span>
                        <span>{day.afternoon.temperature_2m}°C</span>
                    </div>
                </div>
            </div>
        ))}
    </WeekWeatherStyle>
  );
}

const WeekWeatherStyle = styled.div``;

export default WeekWeather;