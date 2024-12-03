// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Process the form data here (e.g., save to a database, send an email)
      const { firstName, lastName, email, message } = req.body;

      // Simulate a delay or save data (for now just returning success)
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
