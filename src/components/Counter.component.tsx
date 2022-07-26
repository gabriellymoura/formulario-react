import styled from "styled-components";

const Counter = () => {
  return (
    <Container>
      <Title>Quantos stickers de cada?</Title>
      <CounterWrapper>
        <ButtonCounter>-</ButtonCounter>
        <DisplayCounter>100</DisplayCounter>
        <ButtonCounter>+</ButtonCounter>
      </CounterWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 18px;
  color: #071723;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ButtonCounter = styled.button`
  all: unset;
  background-color: #2f3676;
  color: white;
  border-radius: 10px;
  width: 42px;
  height: 42px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #191847;
  }

  :disabled {
    background-color: #c5cfd6;
  }
`;

const DisplayCounter = styled.div`
  width: 60px;
  height: 42px;
  background-color: #dde3e9;
  border: 1px #2f3676 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #071723;
  font-weight: bold;
  border-radius: 10px;
  margin: 0 8px;
`;

const CounterWrapper = styled.div`
  display: flex;
`;

export default Counter;
