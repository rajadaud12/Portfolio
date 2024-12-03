// api/contact.js

import { IncomingMessage, ServerResponse } from 'http';
import * as emailjs from 'emailjs-com';

export default async function handler(req = IncomingMessage, res = ServerResponse) {
  if (req.method === 'POST') {
    try {
      // Retrieve form data from the request body
      const { firstName, lastName, email, message } = req.body;

      // Initialize EmailJS with your User ID (replace with your actual key)
      const userID = 'tv-OcNHlbcpz5kOHeCeDM'; // Replace with your EmailJS user ID
      const serviceID = 'service_azaq1hi'; // Replace with your EmailJS service ID
      const templateID = 'template_elc7ftf'; // Replace with your EmailJS template ID

      // Send email via EmailJS
      await emailjs.send(serviceID, templateID, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message,
      }, userID);

      // Respond with success
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
