import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { isAuthCookieAvailable } from '../utils/cookie';
import { toast } from 'react-toastify';

const NavBar = () => {
  const handleEdit = () => {
    if(isAuthCookieAvailable()){
        toast.success("Proile Successfully Updated")
    } else {
        toast.error("Unauthorized")
    }
}
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="mx-auto">
          <div></div>
        </Navbar.Brand>

        {/* Navbar toggle button for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white " />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav items in the center */}
          <Nav className="mx-auto">
          <h3 className='text-white'>Logo</h3>
          </Nav>

          {/* Edit Profile button on the right */}
          <Nav className="ml-auto">
            <Button variant="primary" onClick={handleEdit}>Edit Profile</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
