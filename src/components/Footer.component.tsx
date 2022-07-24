import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <ButtonSend>ENVIAR</ButtonSend>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: #DDE3E9;
  width: 560px;
  height: 101px;
  display: flex;
`;

const ButtonSend = styled.button`
  border: none;
  color: #fff;
  background-color: #2F3676;
  border-radius: 7px;
  width: 133px;
  height: 37px;
  font-weight: bold;
  font-size: 18px;
  align-self: end;
  margin: 32px 32px 32px 0;
  cursor: pointer;
`;

export default Footer;