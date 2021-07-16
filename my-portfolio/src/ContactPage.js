import React, { useState } from "react";
import "./ContactPage.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({

  inputRoot: {
    
    fontSize: 30,
    color: "white",
    fontFamily:"Open Sans",
    fontWeight:300
  },
  //change change border color, change placeholder color
  labelFocused: {},
}));

const ContactPage = () => {
  const classes = useStyles();
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/ContactPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="Contactformcont">
      <form name="Contactform" onSubmit={handleSubmit} className="Contactform">
        <div className="message">Send a message to me here!</div>
        <div className="nameandemailcont">
          <div className="namecont">
            {/* <label htmlFor="name">Name:</label> */}
            {/*<input name="name" type="text" id="name" required /> */}
            <TextField
              id="name"
              placeholder="Name"
              type="text"
              name="name"
              required
              // style={{ margin: 7 }}
              fullWidth
              InputProps={{ classes: { root: classes.inputRoot } }}
              // InputLabelProps={{
              //   classes: {
              //     root: classes.labelRoot,
              //     focused: classes.labelFocused,
              //   },
              // }}
              margin="normal"
              // InputLabelProps={{
              //   shrink: true,
              // }}
            />
          </div>
          <div className="emailcont">
            {/* <label htmlFor="email">Email:</label> */}
            {/* <input name="email" type="email" id="email" required /> */}
            <TextField
              id="email"
              placeholder="Email"
              type="email"
              name="email"
              InputProps={{ classes: { root: classes.inputRoot } }}
              // InputLabelProps={{
              //   classes: {
              //     root: classes.labelRoot,
              //     focused: classes.labelFocused,
              //   },
              // }}
              required
              // style={{ margin: 7 }}
              fullWidth
              margin="normal"
              // InputLabelProps={{
              //   shrink: true,
              // }}
            />
          </div>
        </div>

        <div className="messagecont">
          {/* <label htmlFor="message">Message:</label>
          <textarea classname="mes" name="message" id="message" required /> */}
          <TextField
          
            name="message"
            id="message"
            placeholder="Type Message Here!"
            multiline
            InputProps={{ classes: { root: classes.inputRoot } }}
            // InputLabelProps={{
            //   classes: {
            //     root: classes.labelRoot,
            //     focused: classes.labelFocused,
            //   },
            // }}

            rows={4}
            className={classes.textField}
            variant="outlined"
            required
          />
        </div>

        {/* <button type="submit">{status}</button>
         */}
        <div className="submit">
          <Button type="submit" 
          style={{
            borderRadius:25,
            backgroundColor: "#999AC6",
            // padding: "18px 36px",
            fontSize: "15px",
            fontFamily:"Open Sans"
        }}
          variant="contained" color="primary" endIcon={<KeyboardArrowRightIcon />}>
            {status}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
