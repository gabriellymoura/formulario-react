import { useState } from "react";
import styled, { css } from "styled-components";

const Footer = () => {
  const [isClicked, setIsCliked] = useState<boolean>(false);

  const handleClick = () => {
    setIsCliked(!isClicked);
  };

  return (
    <Container isClicked={isClicked}>
      {isClicked ? <span>Formulário enviado com sucesso!</span> : null}
      <ButtonSend onClick={handleClick} disabled={isClicked}>
        ENVIAR
      </ButtonSend>
    </Container>
  );
};

const Container = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  row-gap: 16px;
  background-color: #dde3e9;
  width: auto;
  height: 101px;

  > span {
    color: #00c57c;
    font-size: 18px;
    font-weight: bold;
    margin: 40px 0;
    ${({ isClicked }) =>
      isClicked &&
      css`
        margin: 40px;
      `}
  }
`;

const ButtonSend = styled.button`
  border: none;
  color: #fff;
  background-color: #2f3676;
  border-radius: 7px;
  width: 133px;
  height: 37px;
  font-weight: bold;
  font-size: 18px;
  margin: 32px 32px 32px 0;
  cursor: pointer;

  :hover {
    background-color: #191847;
  }
  :disabled {
    background-color: #c5cfd6;
    color: #555555;
    border: 2px solid #555555;
    margin: 32px 32px 32px 0;
  }
`;

export default Footer;
