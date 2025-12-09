import './App.css'
import Header from './pages/Header'
import WeatherDetail from './pages/WeatherDetail'

function App() {

  return (
    <>
      {/* 헤더 */}
        <Header />
      {/* 오늘 날씨/내일 날씨/지수 정보 */}
      {/* 주간 날씨 정보 */}
        <WeatherDetail />
    </>
  )
}

export default App
