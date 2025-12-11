const API_URL = `/api/weather`;

export const fetchWeather = async () => {
  const response = await fetch(API_URL);
  if(!response.ok) {
    throw new Error("날씨 정보를 가져오는 데 실패했습니다.");
  }
  const data = await response.json();
  return data;
}