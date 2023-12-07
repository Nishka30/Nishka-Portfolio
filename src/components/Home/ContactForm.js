// ContactForm.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiFillMail } from 'react-icons/ai';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9czdmf', 'template_zyscuho', 'pslmbZRMPFLaFr0Hy')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });

    // Clear form fields after submission

  };

  return (
    <form style={styles.form} action="https://formsubmit.co/shrimalinishka@gmail.com" method="post">
      <label>
-
        <input
          type="text"
          required=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          style={styles.input}
        />
      </label>
      <label>
-
        <input
          type="email"
          required=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          style={styles.input}
        />

      </label>
      <label>
-
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Your Message"
          style={styles.input}
        />
      </label>
      <button type="submit" id="form-submit" style={styles.button}><b>Submit</b></button>
      <br/>
      <h1>or</h1>
      <a
                  href="mailto:shrimalinishka@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(256, 256, 256, 0.2)',
    color: '#ffffff',
  },
  input: {
    fontSize: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    border: '0px solid #ffffff',
    borderRadius: '5px',
    color: '#380054',

    width: '157%',
    marginLeft:'-60px',
  
  },
  button: {
    fontSize: '15px',
    padding: '10px',
    backgroundColor: '#380054',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '13px',
    marginBottom: '13px',
    width: '92%',
  },
};

export default ContactForm;
