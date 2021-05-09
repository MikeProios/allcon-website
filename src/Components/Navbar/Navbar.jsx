//Basic dependencies
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

//Pictures and Icons
import companyLogo from "../../Utilities/Pictures/Logos/LOGO-HIGHRES2.png";
import MenuIcon from "@material-ui/icons/Menu";

//Styling
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  logo: {
    width: "12rem",
    height: "auto",
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 10,
  },
  appbar: {
    backgroundColor: "#f3f2f2",
    position: "fixed",
  },
  button: {
    marginTop: "23px",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  links: {
    textDecoration: "none",
  },
  buttongrid: {
    marginRight: "40px",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar classname={classes.toolbar}>
            <Grid justify={"space-between"} container>
              <Grid xs={1} item>
                <img className={classes.logo} src={companyLogo} alt="logo" />
              </Grid>
              <Grid className={classes.buttongrid} item>
                <Grid justify={"space-between"} container>
                  <Link className={classes.links} to="/home">
                    <Button className={classes.button}>Home</Button>
                  </Link>
                  <Link className={classes.links} to="/about">
                    <Button className={classes.button}>About</Button>
                  </Link>
                  <Link className={classes.links} to="/services">
                    <Button className={classes.button}>Services</Button>
                  </Link>
                  <Link className={classes.links} to="/projects">
                    <Button className={classes.button}>Projects</Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    </React.Fragment>
  );
}

export default Navbar;
