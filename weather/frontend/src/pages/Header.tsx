import styled from "styled-components";
import Location from "../components/Location";

function Header() {
  return (
    <HeaderStyle>
      <div>
        <h1>날씨 정보</h1>
      </div>
      <div>
        {/* 위치 정보 */}
        <Location />
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
