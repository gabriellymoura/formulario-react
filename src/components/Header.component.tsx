import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <span>
        Formulário para compra de <strong>Pacote de Stickers</strong>
      </span>
    </Container>
  );
};

const Container = styled.div`
  background: #2f3676;
`;

export default Header;
