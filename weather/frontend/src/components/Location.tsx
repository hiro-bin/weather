import styled from "styled-components";

function Location() {
  return (
    <LocationStyle>
      {/* TODO: 카카오 우편 서비스 API로 주소 받아서 위도, 경도 뽑아내기 */}
      <h1>성동구 마장동 *</h1>
    </LocationStyle>
  );
}

const LocationStyle = styled.div``;

export default Location;
