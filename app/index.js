import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

//Make sure this code is not included in production
if (process.env.NODE_ENV !== "prod" && module.hot) {
  var hotEmitter = require("webpack/hot/emitter");
  hotEmitter.on("webpackHotUpdate", function(currentHash) {
    document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`)
      link.href = nextStyleHref
    })
  });
}

class ContactForm extends React.Component {

  constructor() {
    super();
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail() {
    return fetch('/contact', {
      method: 'POST',
      body: JSON.stringify({
        from: this.from.value,
        message: this.message.value
      })
    });

  }

  render() {
    return (
      <div className="contact-form">
        <fieldset className="contact-group">
          <legend className="contact-legend">Get in touch</legend>
          <div className="contact-element">
            <label htmlFor="from">From: </label>
            <input name="from" ref={(el) => { this.from = el; }} type="text" placeholder="Your email address" />
          </div>
          <div className="contact-element">
            <label htmlFor="message">Message: </label>
            <textarea name="message" ref={(el) => { this.message = el; }} placeholder="Enter your message"></textarea>
          </div>
          <div className="contact-element">
            <button onClick={this.sendEmail}>Send Message</button>
          </div>
        </fieldset>
      </div>
    );
  }

}

/*
  * But we want to use our new `contact` here!
  */
ReactDOM.render(
  <ContactForm />,
  document.getElementById('contact-form')
)
