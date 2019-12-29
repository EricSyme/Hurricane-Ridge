import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container"> 
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mx-auto" href="/"><img src='assets/images/HRWSClogo.png' height="50" width="50" alt='Hurricane Ridge Ski and Snowboard Area' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="justify-content-center bluebackground">
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link textStroke"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link textStroke" to='/projects'><span className="fa fa-modx fa-lg"></span> Day Rates/Passes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link textStroke" to='/certificates'><span className="fa fa-mortar-board fa-lg"></span> Conditions/Cameras</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link textStroke"  to='/biography'><span className="fa fa-list fa-lg"></span> Special Events/Calendar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link textStroke" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;