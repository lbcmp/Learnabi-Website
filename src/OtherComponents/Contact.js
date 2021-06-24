import React, { Component } from "react";
import Footer from "./Footer";
import { firestore } from "../components/firebase/firebase";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  firstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  lastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  subjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  messageChange = (event) => {
    this.setState({ message: event.target.value });
  };
  reset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.message.length > 20) {
      const snapShot = firestore.doc(
        `learnabiContactUs/form:email:${this.state.email}`
      );
      snapShot.get().then((doc) => {
        if (!doc.exists) {
          snapShot.set({
            first:
              this.state.firstName.charAt(0).toUpperCase() +
              this.state.firstName.slice(1),
            last:
              this.state.lastName.charAt(0).toUpperCase() +
              this.state.lastName.slice(1),
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
          });
          alert("The form has been submitted successfully");
          this.reset();
        } else {
          alert(
            "Duplicates are not allowed. We respond in two business days. Thank you for your patience"
          );
          this.reset();
        }
      });
    } else {
      alert("Message is too short");
    }
  };

  render() {
    return (
      <>
        <div id="contact-background">
          <section>
            <div id="contact-title-div">
              <h1>Contact Us</h1>
              <i className="fas fa-envelope-open-text"></i>
            </div>

            <div id="form-div">
              <form onSubmit={this.formSubmitHandler}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.firstNameChange}
                  required
                ></input>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.lastNameChange}
                ></input>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.emailChange}
                  required
                ></input>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={this.state.subject}
                  onChange={this.subjectChange}
                ></input>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Enter a maximum of 1000 characters"
                  maxlength="1000"
                  value={this.state.message}
                  onChange={this.messageChange}
                ></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          </section>
        </div>

        <Footer />
      </>
    );
  }
}

export default Contact;
