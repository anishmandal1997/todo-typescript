import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


export default function NavMenuBar() {
  
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Todo App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
