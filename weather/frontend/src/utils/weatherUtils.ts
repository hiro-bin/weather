import dayjs from "dayjs";

export const getWeatherDescription = (code: number): string => {
  switch (true) {
    case code === 0:
      return "맑음";
    case code >= 1 && code <= 48:
      return "흐림";
    case (code >= 51 && code <= 67) || (code >= 80 && code <= 99):
      return "비";
    case (code >= 71 && code <= 77) || (code >= 85 && code <= 86):
      return "눈";
    default:
      return "알 수 없음";
  }
};

export const getWeatherIcon = (code: number): string => {
  switch (true) {
    case code === 0:
      return "☀️";
    case code >= 1 && code <= 48:
      return "☁️";
    case (code >= 51 && code <= 67) || (code >= 80 && code <= 99):
      return "🌧️";
    case (code >= 71 && code <= 77) || (code >= 85 && code <= 86):
      return "🌨️";
    default:
      return "❓";
  }
};

export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("MM.DD");
};
