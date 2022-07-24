import styled from "styled-components";

const Comments = () => {
    return (
        <Container>
            <Title>Observações</Title>
            <CommentsArea></CommentsArea>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #071723;
`;

const CommentsArea = styled.textarea`
    all: unset;
    border: 1px #2F3676 solid;
    border-radius: 4px;
    width: auto;
    height: 125px;
    padding: 1rem;
    background-color: #DDE3E9;
`;

export default Comments;