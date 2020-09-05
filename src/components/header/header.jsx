import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import classes from "./header.module.css";

const Header = () => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar className={classes.pribg}>
          <Typography variant="h6">DisMov</Typography>
          <div>
            <Button color="inherit">Movies</Button>
            <Button color="inherit">TV</Button>
            <Button color="inherit">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
