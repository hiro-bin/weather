interface CurrentWeather {
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  weather_code: number;
}

interface PeriodWeather {
  temperature_2m: number | null;
  weather_code: number | null;
}

export interface DailyWeather {
  date: string;
  weather_code: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  morning: PeriodWeather;
  afternoon: PeriodWeather;
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyWeather[];
}

export interface WeatherDetailProps {
  weatherData: WeatherData;
}
