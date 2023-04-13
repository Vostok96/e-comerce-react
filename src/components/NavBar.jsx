import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PurchasesSidebar from './PurchasesSidebar';


const NavBar = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleClose = () => {
        setShow(false)
    }
    
    const sideBarAction = () => {
        const token = localStorage.getItem('token')

        if(token){
            setShow(true)
        }else{

        }
    }

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to= '/'>Product App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to= '/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
                <Nav.Link
                onClick={()=> sideBarAction()}
                >Purchases (sidebar)</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <PurchasesSidebar
        show={show}
        handleClose={handleClose}
        />
      </>
    );
};

export default NavBar;