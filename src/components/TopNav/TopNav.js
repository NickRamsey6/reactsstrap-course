import React, { useState } from 'react';
import './TopNav.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


// class TopNav extends React.Component {
   const TopNav = (props) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);

        return(<div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Flying Car Dealership</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/"><i className="fas fa-home"></i> Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret><i className="fas fa-space-shuttle"> </i>
                Flying Cars
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href='/find-a-dealer'><i className="fas fa-map-marker-alt"></i> Find a Dealer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/build-and-price'><i className="fas fa-cog"></i> Build and Price</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>);
    }

export default TopNav;