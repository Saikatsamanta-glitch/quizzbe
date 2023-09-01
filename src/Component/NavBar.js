import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import Lottie from 'react-lottie';
import brandImg from '../Resource/animation_llxxiddo.json'
function NavScrollExample() {
        const defaultOptions = {
                loop: true,
                autoplay: true,
                animationData: brandImg,
                rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                }
        };
        return (
                <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                        <Container fluid className='d-flex justify-content-between'>
                                <Link to="/" className='d-flex align-items-center text-decoration-none text-white'>
                                        <Lottie options={defaultOptions} height={70} width={70} />
                                        <h2>Byte Buddy</h2>
                                </Link>


                                <Navbar.Toggle aria-controls="navbarScroll" />


                                <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-end'>
                                <button className="glow-on-hover " type="button">Job support 🚀</button>
                                <NavDropdown title="Find Tutors " id="navbarScrollingDropdown" className='glow-on-hover dflex'>
                                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action4">
                                                                Another action
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action5">
                                                                Something else here
                                                        </NavDropdown.Item>
                                                </NavDropdown>
                                </Navbar.Collapse>
                        </Container>
                </Navbar>
        );
}

export default NavScrollExample;

