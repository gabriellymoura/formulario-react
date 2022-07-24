import styled from "styled-components";
import Comments from "./components/Comments.component";
import Counter from "./components/Counter.component";
import Header from "./components/Header.component";
import Stickers from "./components/Stickers.component"

function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Stickers />
        <Counter />
        <Comments />
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding: 32px;
`
export default App;
