import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Toolbar from "@mui/material/Toolbar";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Navbar(props) {
  return (
    <Box>
      <CssBaseline />
      <AppBar className="NavbarContainer">
        <Toolbar>
          <Box className="logo">
            <LocalPostOfficeIcon />
          </Box>
          <Box component="div" className={"systemName"}>
            <p>MOBI TASK</p>
          </Box>
          <div className="inputMeContianer">
            <Link to="/input"> Input Me</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
