import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import NavMenuBar from "./components/NavMenuBar";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <NavMenuBar />
      <Container>
        <Stack className="col-md-5 mx-auto">
          <TodoContainer />
        </Stack>
      </Container>
    </>
  );
}

export default App;
