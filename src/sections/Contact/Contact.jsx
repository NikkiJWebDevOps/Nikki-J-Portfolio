import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // Simple phone number validation (10 digits)

    if (!firstName || !lastName) {
      newErrors.name = 'Full name is required';
    }
    if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!phonePattern.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number (10 digits)';
    }
    if (!message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  };

  const sendEmail = () => {
    // Your email sending logic here
    console.log(`Sending email to ${email} with message: ${message}`);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      {isSubmitted ? (
        <p className={styles.thankYouMessage}>
          Thank you for reaching out to me, please allow 48-72 hours to reach back out to you! Nik
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" hidden>First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName" hidden>Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" hidden>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" hidden>Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number (1234567890)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" hidden>Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
