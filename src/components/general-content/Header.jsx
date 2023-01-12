import React from 'react';
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiMailSendLine } from 'react-icons/ri';
import { GiKeyring } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import ThemeContext from '../context/ThemeContext';

import './Header.css';

const Header = () => {

    function ThemeChoice() {
        
        const {theme, updateTheme} = React.useContext(ThemeContext);
    
        const handleChange = (event) => {
            updateTheme(event); 
        }

        return (
            <DropdownButton 
                id="dropdown-item-button"
                onSelect={handleChange}
                title={theme}
                className="CustomDropdownButton" >
                <Dropdown.Item className="Brazil" eventKey="Brazil" as="button" >Brazil</Dropdown.Item>
                <Dropdown.Item className="Darcula" eventKey="Darcula" as="button" >Darcula</Dropdown.Item>
            </DropdownButton>
        );
    }
    

    return (
        <Navbar className="CustomHeader" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>

            </Navbar.Brand>
            <Navbar className="m-auto">
                <ThemeChoice className="ThemeChoice" />
            </Navbar>
        </Navbar>
        );
    }
    
export default Header;