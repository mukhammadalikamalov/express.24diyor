import AppBar from "@mui/material/AppBar";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid"; // Import Grid
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TranslateIcon from "@mui/icons-material/Translate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600, // Increase width
  height: 600, // Increase height
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProfileClick = () => {
    // Add functionality for the Profile button here
    console.log("Profile button clicked");
  };

  const handleEnglishClick = () => {
    // Add functionality for the English button here
    console.log("English button clicked");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#fff", boxShadow: 2, color: "#000" }}>
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={2}>
              <img
                style={{ width: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5xwqoVUsUDErUWcjlGijv6Klq5K8aJZTFQ&usqp=CAU"
                alt=""
              />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <input
                  style={{
                    width: "35%",
                    height: "6vh",
                    borderRadius: "10px",
                    border: "1px solid gray",
                    textAlign: "center",
                    marginLeft: "5%",
                  }}
                  type="text"
                  placeholder="taom,tovar,oshxona"
                />
                <button
                  style={{
                    height: "6vh",
                    width: "10%",
                    borderRadius: "10px",
                    color: "black",
                    backgroundColor: "yellow",
                    border: "none",
                    fontSize: "18px",
                  }}
                >
                  Topish
                </button>
                <Button
                  style={{
                    width: "330px",
                    height: "6vh",
                    backgroundColor: "#f5f5dc",
                    color: "black",
                    borderRadius: "10px",
                  }}
                  onClick={handleOpen}
                >
                  Toshkent, Yunusobod
                </Button>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/photos"}>Photos</NavLink>
                <NavLink to={"/product"}>Products</NavLink>
                <NavLink to={"/album"}>Album</NavLink>
                <NavLink to={"/restaraunts"}>Restaraunts</NavLink>

              </Box>
            </Grid>
            <Grid item xs={2} />
          </Grid>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open} style={{ height: "70%", width: "50%", borderRadius: "20px", borderColor: "gray" }}>
              <Box sx={{ ...style }}>
                <h1>Yetkazish Manzili</h1>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    height: "6vh",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    boxSizing: "border-box",
                    color: "gray",
                  }}
                />

                <iframe
                  title="Google Maps"
                  width="100%"
                  height="60%"
                  borderRadius="10px"
                  frameBorder="0"
                  src="https://maps.google.com/maps?q=37.773972,-122.431297&z=15&output=embed"
                  style={{ marginTop: "10px" }}
                />
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "yellow",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  Tasdiqlash
                </button>
              </Box>
            </Fade>
          </Modal>

          {/* Profile and English buttons */}
          <IconButton color="inherit" onClick={handleProfileClick}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleEnglishClick}>
            <TranslateIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, marginTop: "10px", padding: "20px" }}></Box>
    </Box>
  );
}
