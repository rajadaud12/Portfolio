import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    // Setup Nodemailer transport using your email provider's SMTP server
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or any other email service
      auth: {
        user: process.env.EMAIL, // Add your email in environment variables
        pass: process.env.EMAIL_PASSWORD // Add your email password in environment variables
      }
    });

    const mailOptions = {
      from: process.env.EMAIL, // Sender address
      to: process.env.RECIPIENT_EMAIL, // Recipient email
      subject: 'New Contact Form Submission',
      text: `You have a new message from ${firstName} ${lastName} (${email}):\n\n${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
