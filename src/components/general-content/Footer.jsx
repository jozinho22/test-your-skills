import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
  
  return (
    <Navbar className="CustomFooter" fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <small className="CopyRight" > 
                Copyright &copy; Jozinho 2020 
            </small>
    </Navbar>
  );
}

export default Footer;