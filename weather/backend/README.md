# Backend Development Plan

이 문서는 날씨 애플리케이션의 백엔드 서버 개발 계획을 정의합니다.

## 1. 기술 스택 (Technology Stack)

- **언어 (Language):** TypeScript
- **프레임워크 (Framework):** Node.js, Express
- **패키지 매니저 (Package Manager):** npm

## 2. 개발 목표

프론트엔드에서 직접 외부 API를 호출하는 대신, 백엔드를 중간 다리(proxy)로 사용하여 **보안, 성능, 확장성**을 개선합니다. 백엔드는 프론트엔드가 필요로 하는 최종 데이터 형태로 가공하여 제공하는 BFF(Backend for Frontend) 역할을 수행합니다.

## 3. 개발 순서

### 1단계: 프로젝트 초기 설정
- **npm 초기화:** `npm init -y` 명령으로 `package.json` 생성
- **필수 라이브러리 설치:**
  - `express`: Express 프레임워크
  - `typescript`, `@types/node`, `@types/express`, `ts-node`, `nodemon`: TypeScript 개발 환경 구성
  - `axios`: 외부 API(Open-Meteo) 호출용 HTTP 클라이언트
  - `cors`: 프론트엔드와의 교차 출처 리소스 공유(CORS) 문제 해결
  - `node-cache`: 인메모리 캐시 구현용
- **`tsconfig.json` 설정:** TypeScript 컴파일 옵션 정의 (예: `outDir`, `rootDir`)
- **기본 폴더 구조 생성:**
  ```
  /src
  ├── index.ts        # 서버 시작점
  ├── routes/         # API 라우팅 로직
  ├── services/       # 비즈니스 로직 (API 호출, 데이터 처리)
  └── utils/          # 유틸리티 함수
  ```

### 2단계: 기본 Express 서버 구축
- `src/index.ts`에서 Express 앱을 생성하고 특정 포트(예: 3001)에서 실행되도록 설정합니다.
- 서버가 정상적으로 실행되는지 확인할 수 있는 간단한 "Health Check" API 엔드포인트(`GET /`)를 추가합니다.

### 3단계: 날씨 API 엔드포인트 생성 (`/api/weather`)
- `routes` 폴더에 날씨 관련 라우터를 만듭니다.
- `GET /api/weather` 엔드포인트를 정의합니다.
- 이 엔드포인트는 프론트엔드로부터 위치 정보(예: `?location=마장동`)를 쿼리 파라미터로 받습니다.

### 4단계: 외부 API 호출 서비스 구현
- **Geocoding 서비스:** `services` 폴더에 위치 이름(예: "마장동")을 받아 Open-Meteo Geocoding API를 호출하고 위도/경도를 반환하는 함수를 만듭니다.
- **Weather 서비스:** Geocoding 서비스에서 얻은 위도/경도를 사용하여 Open-Meteo Forecast API를 호출하고 날씨 원본 데이터를 가져오는 함수를 만듭니다.

### 5단계: 데이터 가공 및 캐싱(Caching) 로직 구현
- **데이터 가공:** Weather 서비스에서 받은 원본 데이터를 프론트엔드의 각 컴포넌트(`TodayWeatherProps` 등)가 요구하는 최종 데이터 형태로 가공하는 로직을 구현합니다.
- **인메모리 캐시 구현:** 동일한 지역에 대한 반복적인 API 호출을 방지하기 위해 `node-cache`를 사용하여 날씨 데이터를 일정 시간(예: 10분) 동안 메모리에 저장하는 캐싱 로직을 추가합니다.

### 6단계: 전체 로직 통합 및 CORS 설정
- `GET /api/weather` 엔드포인트에서 다음 순서로 모든 로직을 통합합니다.
  1. 요청된 위치의 캐시가 있는지 확인합니다.
  2. 캐시가 있으면 캐시된 데이터를 즉시 반환합니다.
  3. 캐시가 없으면 Geocoding 서비스와 Weather 서비스를 차례로 호출합니다.
  4. 가져온 데이터를 가공하고, 그 결과를 캐시에 저장합니다.
  5. 최종 데이터를 프론트엔드에 응답으로 전달합니다.
- `cors` 미들웨어를 사용하여 프론트엔드 개발 서버(예: `http://localhost:5173`)에서 오는 요청을 허용하도록 설정합니다.

---
이 계획에 따라 단계적으로 개발을 진행하면 체계적으로 백엔드 서버를 구축할 수 있습니다.
