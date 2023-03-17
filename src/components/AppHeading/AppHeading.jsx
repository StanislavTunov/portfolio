import * as React from "react";

import { NavLink, Outlet } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Container = styled(Box)(() => ({
  backgroundColor: "#a9a9a9",
  color: "black",
  textAlign: "left",
  height: "fit-content",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const LinkText = styled(Typography)(() => ({
  color: "black",
  margin: "0 20px",
}));

function AppHeading() {
  return (
    <>
      <Container>
        <NavLink to="/">
          <LinkText variant="h4">Portfolio</LinkText>
        </NavLink>
        <NavLink to="/frondend">
          <LinkText variant="h4">Front-end разработване с JavaScript</LinkText>
        </NavLink>
        <Container>
          <NavLink to="/aboutvr">
            <LinkText variant="h4">Vratsa Websites</LinkText>
          </NavLink>
          <Container>
            <NavLink to="/about">
              <LinkText variant="h4">Martin Petrov</LinkText>
            </NavLink>
          </Container>

          {/* <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  variant="contained"
                  {...bindTrigger(popupState)}
                  sx={{
                    ":hover": { bgcolor: "white", color: "black" },
                    backgroundColor: "wheat",
                    fontSize: "20px",
                  }}
                >
                  Contact Me
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    <NavLink to="/contactme">
                      <LinkText variant="h7">Contact me</LinkText>
                    </NavLink>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState> */}
        </Container>
      </Container>
      <Outlet />
    </>
  );
}

export default AppHeading;
