import styled, { css } from "styled-components";

const Stickers = () => {
  return (
    <Container>
      <Title>Quais stickers?</Title>
      <Item>
        <Check checked={true}></Check>
        <input type="checkbox" />
        React
      </Item>
      <Item>
        <Check checked={false}></Check>
        <input type="checkbox" />
        Vue
      </Item>
      <Item>
        <Check checked={false}></Check>
        <input type="checkbox" />
        Angular
      </Item>
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

const Item = styled.label`
  cursor: pointer;
  display: block;
  position: relative;
  padding-left: 36px;
  margin-bottom: 8px;
  font-size: 14px;
  input {
    position: absolute;
    opacity: 0;
    cursor: 0;
  }

  > span {
  }
`;

const Check = styled.span<{ checked: boolean }>`
  left: 0;
  top: 0;
  height: 24px;
  width: 24px;
  background: #2f3676;
  position: absolute;
  border-radius: 5px;

  :after {
    content: "";
    position: absolute;
    display: none;
    top: 3px;
    left: 8px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    ${({ checked }) =>
      checked &&
      css`
        display: block;
      `}
  }
  :hover {
    background-color: #191847;
  }
  :disabled {
    background-color: #c5cfd6;
  }
`;

export default Stickers;
