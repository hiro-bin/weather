// frontend/src/styled.d.ts
import 'styled-components';
import { Theme } from './styles/theme'; // theme.ts 파일 경로에 따라 조정 필요

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
