import React, { Component } from "react";
import "./Navbar.css";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="Navbar">
        <div className="Hamburger_Button">
          <div className="menu-button" onClick={this.handleToggle}>
            <div className="Hamburger" />
            <div className="Hamburger" />
            <div className="Hamburger" />
          </div>
        </div>
        <div>
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            openSecondary={true}
            onRequestChange={open => this.setState({ open })}
            containerClassName="drawer"
          >
            <a href="#home">
              <MenuItem onClick={this.handleClose} className="menu-item">
                Home
              </MenuItem>
            </a>
            <a href="#about">
              <MenuItem onClick={this.handleClose} className="menu-item">
                About
              </MenuItem>
            </a>
            <a href="#projects">
              <MenuItem onClick={this.handleClose} className="menu-item">
                Projects
              </MenuItem>
            </a>
            <a href="#skills">
              <MenuItem onClick={this.handleClose} className="menu-item">
                Skills
              </MenuItem>
            </a>
            <a href="#contact">
              <MenuItem onClick={this.handleClose} className="menu-item">
                Contact
              </MenuItem>
            </a>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Navbar;
