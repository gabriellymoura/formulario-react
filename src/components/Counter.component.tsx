import styled from "styled-components";

const Counter = () => {
    return (
        <Container>
            <Title>Quantos stickers de cada?</Title>
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

export default Counter;