import styled from "styled-components";
import Header from "./pages/Header";
import WeatherDetail from "./pages/WeatherDetail";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "./api/weather";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeather,
  });

  const renderContent = () => {
    if (isLoading) return <Loading />;

    if (isError) return <Error />;

    if (weatherData) return <WeatherDetail weatherData={weatherData} />;

    return null;
  };

  return (
    <AppStyle>
      <Header />
      {renderContent()}
    </AppStyle>
  );
}

const AppStyle = styled.div``;

export default App;
