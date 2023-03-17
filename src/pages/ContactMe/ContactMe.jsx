import { useRef, useState, createContext } from "react";
import emailjs from "@emailjs/browser";
import { styled, Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Container = styled(Box)(() => ({
  width: "60%",
  maxWidth: "1080px",
  margin: "auto",
}));

function ContactMe() {
  const form = useRef();
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [contactData, setContactData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setContactData({
      ...contactData,
      [target.name]: target.value,
      [target.email]: target.value,
      [target.message]: target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sswjt6a",
        "template_r870gft",
        e.target,
        "zUMqalXTXg3yZoIPx"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setContactData({ ...initialFormState });
  };
  return (
    <>
      <Container>
        <UserContextProvider>
          <Typography variant="h4">Contact me</Typography>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              fullWidth
              maxLength="30"
              placeholder="Name"
              helperText={"Type in your name"}
              type="text"
              name="name"
              inputProps={{
                style: {
                  fontSize: "22px",
                },
              }}
              variant="outlined"
              value={contactData.name}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              placeholder="Email"
              helperText={"Type in your email"}
              type="email"
              name="email"
              inputProps={{
                style: {
                  fontSize: "22px",
                },
              }}
              variant="outlined"
              onChange={handleChange}
              value={contactData.email}
              required
            />

            <TextField
              fullWidth
              placeholder="Message"
              helperText={"Type in your message"}
              type="text"
              name="message"
              inputProps={{
                style: {
                  fontSize: "22px",
                },
              }}
              variant="outlined"
              value={contactData.message}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              value="Send"
              sx={{
                ":hover": { bgcolor: "white", color: "black" },
                backgroundColor: "#d3d3d3",
                fontSize: "15px",
              }}
              variant="outlined"
            >
              Submit
            </Button>
          </form>
        </UserContextProvider>
      </Container>
    </>
  );
}

const UserContext = createContext({ name: "", email: "", message: "" });
const UserContextProvider = ({ children }) => {
  const [contactData, setContactData] = useState();
  return (
    <UserContext.Provider value={{ contactData, setContactData }}>
      <Container>{children}</Container>
    </UserContext.Provider>
  );
};
export default ContactMe;
