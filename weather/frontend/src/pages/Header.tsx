import styled from "styled-components";
import Location from "../components/Location";

function Header() {
  return (
    <HeaderStyle>
      <div>
        <div>날씨 정보</div>
        {/* 위치 정보 */}
        <Location />
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div``;

export default Header;