import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const ContactComponent = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");

  /**
   * Opens a new Gmail compose window with the provided email address, subject, and body pre-filled.
   *
   * @param emailAddress - The email address to send the email to.
   * @param fullName - The full name of the person submitting the contact form.
   * @param contactNo - The contact number of the person submitting the contact form.
   */
  const openGmailWithEmail = (
    emailAddress: string,
    fullName: string,
    contactNo: string
  ) => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nContact No: ${contactNo}`
    );
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Contact No:", contactNo);

    openGmailWithEmail(email, fullName, contactNo);
  };

  return (
    <Box
      id="/contact"
      sx={{ backgroundColor: "black", height: "100%", padding: "5%" }}
    >
      <Typography
        display="flex"
        variant="h4"
        component="h1"
        justifyContent="center"
        gutterBottom
        sx={{ color: "orange" }}
      >
        Contact Form
      </Typography>
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
            onChange={(e) => setContactNo(e.target.value)}
            required
            sx={{
              fieldset: {
                borderColor: orange,
              },
              focused: {
                borderColor: green[100],
              },
              input: {
                color: "red",
              },
              "&:hover": {
                borderColor: "red",
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
    </Box>
  );
};

export default ContactComponent;
