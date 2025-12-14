# Morning and Afternoon Weather Feature

## Description
This feature enhances the weather application by providing detailed morning and afternoon weather forecasts for tomorrow and the upcoming week. Previously, the application only displayed general daily weather information without distinguishing between different parts of the day.

## Changes Made

### Backend (`backend/src/routes/weatherRoutes.ts`)
1.  **API URL Modification:** The Open-Meteo API call was updated to include `temperature_2m` and `weather_code` in the `hourly` parameters. This allows fetching hourly temperature and weather conditions, which are crucial for determining morning and afternoon forecasts.
    ```typescript
    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=127.04&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&hourly=uv_index,temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=Asia/Seoul&past_days=1`;
    ```
2.  **Hourly Data Processing:** Logic was added to process the fetched hourly data. For each day, the average temperature and the most frequent weather code were calculated for two periods:
    *   **Morning:** 6 AM to 11 AM
    *   **Afternoon:** 12 PM to 5 PM
    This processed data is now included in the JSON response sent to the frontend under the `daily` key, along with the existing `current` weather data.
3.  **`dayjs` Integration:** The `dayjs` library was installed and imported to facilitate date and time manipulation during the hourly data processing.

### Frontend

#### `frontend/src/pages/WeatherDetail.tsx`
1.  **Prop Passing:** The `weatherData` object (which now includes the processed morning and afternoon forecasts) is passed as a prop to `TomorrowWeather` and `WeekWeather` components.
2.  **Interface Definition:** An interface `WeatherDetailProps` was defined to ensure type safety for the `weatherData` prop.

#### `frontend/src/components/TomorrowWeather.tsx`
1.  **Component Implementation:** This component was updated to receive `weatherData` as a prop. It extracts tomorrow's date, morning temperature, morning weather code, afternoon temperature, and afternoon weather code.
2.  **Display Logic:** It uses `getWeatherIcon` and `getWeatherDescription` utility functions to display the morning and afternoon weather conditions along with their respective temperatures.

#### `frontend/src/components/WeekWeather.tsx`
1.  **Component Implementation:** This component was updated to receive `weatherData` as a prop. It iterates through the `daily` array (starting from the day after tomorrow) to display the morning and afternoon weather for each day of the week.
2.  **Display Logic:** For each day, it presents the date, morning conditions (icon, description, temperature), and afternoon conditions (icon, description, temperature) using the utility functions.

## How to Verify
1.  Ensure the backend server is running (e.g., `npm start` in the `backend` directory).
2.  Ensure the frontend development server is running (e.g., `npm run dev` in the `frontend` directory).
3.  Navigate to the application in a web browser.
4.  Observe the "Tomorrow Weather" section and the "Week Weather" section to confirm that morning and afternoon weather forecasts (temperature, icon, description) are displayed correctly.
