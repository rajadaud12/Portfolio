import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import './ContactSection.css'
const ContactSection = () => {
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <div className="contact-header">
              <span className="subtitle">Contact Us</span>
              <h2>Let's bring your vision to life</h2>
              <p>Get in touch with us to start your next project. We're here to transform your ideas into reality.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className={`form-group ${focusedField === 'firstName' ? 'focused' : ''}`}>
                  <label>First Name</label>
                  <input 
                    type="text" 
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <div className="input-border"></div>
                </div>
                <div className={`form-group ${focusedField === 'lastName' ? 'focused' : ''}`}>
                  <label>Last Name</label>
                  <input 
                    type="text"
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField(null)}
                  />
                  <div className="input-border"></div>
                </div>
              </div>

              <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                <label>Email</label>
                <input 
                  type="email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
                <div className="input-border"></div>
              </div>

              <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
                <label>Message</label>
                <textarea 
                  rows="4"
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
                <div className="input-border"></div>
              </div>

              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <ArrowRight className="button-icon" size={20} />
              </button>
            </form>
          </div>

          <div className="contact-details">
            <div className="contact-info-header">
              <h3>Connect With Us</h3>
              <p>Reach out through any of these channels</p>
            </div>

            <div className="detail-items">
              <div className="detail-item">
                <div className="icon-wrapper">
                  <Phone size={20} />
                </div>
                <div className="content">
                  <span className="label">Call us at</span>
                  <a href="tel:+40321654876" className="value">(+40) 321 654 876</a>
                </div>
              </div>

              <div className="detail-item">
                <div className="icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="content">
                  <span className="label">Email us at</span>
                  <a href="mailto:contact@example.com" className="value">contact@example.com</a>
                </div>
              </div>

              <div className="detail-item">
                <div className="icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="content">
                  <span className="label">Visit us at</span>
                  <span className="value">Code Corner, Tech Town 13579</span>
                </div>
              </div>
            </div>

            <div className="availability">
              <div className="status-indicator"></div>
              <p>We're available Monday to Friday, 9am to 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;