import { Router } from "express";
import axios from 'axios';
import dayjs from 'dayjs';

const router = Router();
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=127.04&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&hourly=uv_index,temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=Asia/Seoul&past_days=1`;

const getPeriodWeather = (
  startHour: number,
  endHour: number,
  startOfDay: dayjs.Dayjs,
  hourlyData: { time: string[], temperature_2m: number[], weather_code: number[] }
) => {
  const temps: number[] = [];
  const weatherCodes: number[] = [];

  for (let i = startHour; i <= endHour; i++) {
    const hourlyIndex = startOfDay.add(i, 'hour').diff(dayjs(hourlyData.time[0]), 'hour');
    if (hourlyData.temperature_2m[hourlyIndex] !== undefined) {
      temps.push(hourlyData.temperature_2m[hourlyIndex]);
      weatherCodes.push(hourlyData.weather_code[hourlyIndex]);
    }
  }

  const avgTemp = temps.length > 0 ? temps.reduce((a, b) => a + b, 0) / temps.length : null;
  const weatherCode = weatherCodes.length > 0 ? weatherCodes.sort((a, b) =>
    weatherCodes.filter(v => v === a).length - weatherCodes.filter(v => v === b).length
  ).pop() : null;

  return {
    temperature_2m: avgTemp !== null ? parseFloat(avgTemp.toFixed(1)) : null,
    weather_code: weatherCode,
  };
};

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL);

    const hourlyData = response.data.hourly;
    const dailyData = response.data.daily;
    const processedDailyData = dailyData.time.map((date: string, index: number) => {
      const dayjsDate = dayjs(date);
      const startOfDay = dayjsDate.startOf('day');

      const morning = getPeriodWeather(6, 11, startOfDay, hourlyData);
      const afternoon = getPeriodWeather(12, 17, startOfDay, hourlyData);

      return {
        date: date,
        weather_code: dailyData.weather_code[index],
        temperature_2m_max: dailyData.temperature_2m_max[index],
        temperature_2m_min: dailyData.temperature_2m_min[index],
        morning,
        afternoon,
      };
    });

    console.log('--- Open-Meteo API Response ---');
    console.log(JSON.stringify(response.data, null, 2));
    console.log('-----------------------------');

    res.json({
      current: response.data.current,
      daily: processedDailyData,
    });
  } catch (err) {
    console.error('Error fetching weather data:', err);
    res.status(500).json({ message: '날씨 정보를 가져오는 데 실패했습니다.' });
  }
});

export default router;