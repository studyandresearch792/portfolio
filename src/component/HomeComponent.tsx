import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ImageSlider from "../utils/ImageSlider";
import { useState } from "react";
import { orange, green } from "@mui/material/colors";

const HomeComponent = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("+977");

  const [open, setOpen] = useState(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "maincv.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    clearState();
  };

  const clearState = () => {
    setOpen(false);
    setFullName("");
    setEmail("");
    setContactNo("");
  };

  const openGmailWithEmail = (
    emailAddress: string,
    fullName: string,
    contactNo: string
  ) => {
    const subject = encodeURIComponent("Internship");
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nContact No: +977  ${contactNo}\n From:${email}`
    );
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ghimiremilan622@gmail.com&su=${subject}&body=${body}`;

    window.open(mailtoLink, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Contact No:", contactNo);
    clearState();
    openGmailWithEmail(email, fullName, contactNo);
  };

  return (
    <>
      <Box
        position={"absolute"}
        sx={{
          height: "100%",
          width: "40%",
          backgroundColor: "orange",
          alignItems: "center",
        }}
      >
        <ImageSlider />
      </Box>

      <Box
        position={"absolute"}
        sx={{
          display: "flex-col",
          flexWrap: "wrap",
          top: "30%",
          right: "1%",
          backgroundColor: "black",
        }}
      >
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
          Hi,I am
          <br />
          <span className="text-orange-400">Milan Ghimire</span>
          <br />
          <span>React Js and Android Developer</span>
        </Typography>

        <Button
          sx={{
            marginTop: "40px",
            border: "2px solid orange",
            ":hover": {
              backgroundColor: "white",
              border: "white",
              color: "black",
            },
          }}
          onClick={() => {
            handleClickOpen();
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: "semi-bold",
              color: "goldenrod",
              ":hover": { color: "black", fontWeight: "bold" },
            }}
          >
            Contact Me
          </Typography>
        </Button>

        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            sx={{
              m: 0,
              p: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="customized-dialog-title"
          >
            Contact Form
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>

          <Container
            maxWidth="sm"
            sx={{ backgroundColor: "white", padding: 4, borderRadius: 2 }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Contact No"
                type="tel"
                variant="outlined"
                fullWidth
                margin="normal"
                value={contactNo}
                onChange={(e) =>
                  setContactNo(e.target.value.replace(/\D/g, ""))
                }
                required
                sx={{
                  fieldset: {
                    borderColor: orange,
                  },
                  focused: {
                    borderColor: green[100],
                  },
                  input: {
                    color: "black",
                  },
                  "&:hover": {
                    borderColor: "black",
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: "2%", marginTop: "2%" }}
              >
                Submit
              </Button>
            </form>
          </Container>
        </Dialog>

        <Button
          sx={{
            marginTop: "40px",
            marginLeft: "20px",
            border: "2px solid orange",
            ":hover": {
              backgroundColor: "white",
              border: "white",
              textcolor: "black",
            },
          }}
          onClick={() => {
            handleDownload();
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: "semi-bold",
              color: "goldenrod",
              ":hover": { color: "black", fontWeight: "bold" },
            }}
          >
            Download Resume
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default HomeComponent;
