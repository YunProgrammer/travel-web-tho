import React, { useContext } from 'react';
import logo from '../../images/pngegg (4).png';
import '../HomePage/HomePage.css';
import '../NavBar/navBarStyle.css';
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import { Form, FormControl, Nav, Navbar, Container} from 'react-bootstrap';
import { userStatusContext } from '../../App';
import CustomizedDialogs from '../ContactPage/ContactDialog';


const NavBar = () => {   
    const[userStatus, setUserStatus] = useContext(userStatusContext);

    //signOut operation starts from here
    const signOut = () => {
        firebase
        .auth()
        .signOut()
        .then(function() {
            // Sign-out successful.
        })
        .catch(function(error) {
        // An error happened.
        });

        //deleting authorized property
        const updateUserStatus = {...userStatus};      
        delete updateUserStatus.authorized;
        setUserStatus(updateUserStatus);
    }
    //signOut operation ends from here.....

    const NavLinksClassVersion = "ml-sm-2 ml-3 mr-sm-2 mr-3 navLinks font-weight-bold text-warning";
    
    return (
        <div>
            <Container className="fixed-top">
            <Navbar className="myNavStyle">
            <Navbar.Brand><Link to="/"><img src={logo} alt="" className="logo" title="Go home page"/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="ml-sm-1 ml-md-auto">
                <FormControl variant="outline-secondary" aria-label="Small" type="text" placeholder="Search here..." className="mr-sm-1 border rounded-pill mySearchStyle" />                
                </Form>

                <button className="ml-sm-2 ml-3 mr-sm-2 mr-3  rounded-pill myBtn">Search</button>
                <Nav>
                {/* <Nav.Link><Link to="/" className={NavLinksClassVersion} title="Go home page">Home</Link></Nav.Link> */}
                <Nav.Link><Link to="/booking/0" className={NavLinksClassVersion} title="Go for booking">Booking</Link></Nav.Link>
                <Nav.Link><Link to="/packages" className={NavLinksClassVersion} title="View our packages">Packages</Link></Nav.Link>
                {/* <Nav.Link><Link to="/packages2" className={NavLinksClassVersion} title="View our packages">Packages 2</Link></Nav.Link> */}

                <Nav.Link><Link to="/" className={NavLinksClassVersion} title="View our blogs">Blogs</Link></Nav.Link>
                <Nav.Link><Link to="/testimonials" className={NavLinksClassVersion} title="Our Testimonials">Testimonials</Link></Nav.Link>
                {/* <Nav.Link><Link to="/contacts" className={NavLinksClassVersion} title="Contact Us">Contacts</Link></Nav.Link> */}
                <CustomizedDialogs/>


                {
                    userStatus.authorized 
                    ?   <button className="ml-sm-2 ml-3 mr-sm-2 mr-3 myBtn" onClick={signOut}>Logout</button>
                    :   <Link to="/login"> <button className="ml-sm-2 ml-3 mr-sm-2 mr-3 myBtn">Login</button></Link>
                
                }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <hr/>
            </Container>
        </div>
    );
};

export default NavBar;