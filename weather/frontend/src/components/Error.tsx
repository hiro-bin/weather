import styled from "styled-components";

function Error() {
  return (
    <ErrorStyle>
        <h1>Error</h1>
        <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
    </ErrorStyle>
  );
}

const ErrorStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
    }
`;

export default Error;
