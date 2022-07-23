import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Text>
        Formulário para compra de <TextBold>Pacote de Stickers</TextBold>
      </Text>
      <Image src="src\assets\icon-shape.svg"></Image>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background: #2f3676;
  justify-content: space-between;
  border-bottom-left-radius: 88px;
  border-bottom-right-radius: 176px;
  
`;

const Text = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 100;
  margin: 23px 0 60px 31px;
  width: 219px;
  line-height: 35px;
`;

const TextBold = styled.p`
  font-weight: bold;
`;

const Image = styled.img`
  width: 168px;
  margin: 7px 50px 0 0;
`;

export default Header;
