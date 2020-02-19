import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";
class ContactPage extends React.Component {
  state = {
    value: "",
    emailValue: ""
  };
  handleEmailChange = e => {
    this.setState({
      emailValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: "",
      emailValue: ""
    });
    alert("Wiadomość została wysłana!");
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <input
            type="email"
            placeholder="Adres e-mail"
            value={this.state.emailValue}
            onChange={this.handleEmailChange}
          />
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value}
          message="Nie wysłałeś formularza! Czy na pewno chcesz opuścić tę stronę?"
        />
      </div>
    );
  }
}

export default ContactPage;
