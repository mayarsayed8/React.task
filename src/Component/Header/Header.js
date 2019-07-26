
import React from 'react';
import {Navbar,NavbarBrand,NavItem , NavLink} from 'reactstrap';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar  color="light" light expand="md">
          <NavbarBrand  href="/">
              <img src="https://res.cloudinary.com/appgain/image/upload/v1534373384/appgain/logo.png" />
          </NavbarBrand>
          
        </Navbar>
      </div>
    );
  }
}
