import styled from "styled-components";
import Header from './pages/Header';
import WeatherDetail from './pages/WeatherDetail';

function App() {

  return (
    <AppStyle>
      {/* 헤더 */}
        <Header />
      {/* 오늘 날씨/내일 날씨/지수 정보 */}
      {/* 주간 날씨 정보 */}
        <WeatherDetail />
    </AppStyle>
  )
}

const AppStyle = styled.div``;

export default App
