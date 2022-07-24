import { useState } from "react";
import styled from "styled-components";

const Counter = () => {

  const [count, setCount] = useState<number>(0);

  const decrementarContador = () => {
    setCount(count - 1)
  };

  const incrementarContador = () => {
    setCount(count + 1)
  };
  
  return (
    <Container>
      <Title>Quantos stickers de cada?</Title>
      <CounterWrapper>
        <ButtonCounter onClick={decrementarContador}>-</ButtonCounter>
        <DisplayCounter> 
          { count }
        </DisplayCounter>
        <ButtonCounter onClick={incrementarContador}>+</ButtonCounter>
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
  background-color: #2F3676;
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
    background-color: #C5CFD6;
  }
`;

const DisplayCounter = styled.div`
  width: 60px;
  height: 42px;
  background-color: #DDE3E9;
  border: 1px #2F3676 solid;
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