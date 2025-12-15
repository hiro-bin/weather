import styled from "styled-components";
import { formatDate, getWeatherDescription, getWeatherIcon } from "../utils/weatherUtils";
import TempText from "./TempText";
import WeatherIcon from "./WeatherIcon";

interface DailyWeatherCardProps {
  date: string;
  morningWeatherCode: number | null;
  afternoonWeatherCode: number | null;
  minTemp: number;
  maxTemp: number;
  iconSize: "small" | "large";
}

function DailyWeatherCard({
  date,
  morningWeatherCode,
  afternoonWeatherCode,
  minTemp,
  maxTemp,
  iconSize,
}: DailyWeatherCardProps) {
  return (
    <DailyWeatherCardStyle>
      <div className="date">{formatDate(date)}</div>
      <div className="weather-info">
        <div className="morning">
          {morningWeatherCode !== null ? (
            <>
              <WeatherIcon size={iconSize}>
                {getWeatherIcon(morningWeatherCode)}
              </WeatherIcon>
              <span>{getWeatherDescription(morningWeatherCode)}</span>
            </>
          ) : (
            <span>데이터가 존재하지 않습니다.</span>
          )}
          <p><TempText>{minTemp}°C</TempText></p>
        </div>
        <div className="afternoon">
          {afternoonWeatherCode !== null ? (
            <>
              <WeatherIcon size={iconSize}>
                {getWeatherIcon(afternoonWeatherCode)}
              </WeatherIcon>
              <span>{getWeatherDescription(afternoonWeatherCode)}</span>
            </>
          ) : (
            <span>데이터가 존재하지 않습니다.</span>
          )}
          <p><TempText isMax>{maxTemp}°C</TempText></p>
        </div>
      </div>
    </DailyWeatherCardStyle>
  );
}

const DailyWeatherCardStyle = styled.div`
  .weather-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .morning, .afternoon {
    flex: 1;
    text-align: center;
  }
`;

export default DailyWeatherCard;
