import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

import 'dotenv/config';``

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending emails
  app.post('/api/send-email', async (req, res) => {
    const { name, phone, email, type, message, source } = req.body;

    // Validate request
    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email configuration
    // IMPORTANT: Users must provide these environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.VITE_EMAIL_USER, // Your Gmail address
        pass: process.env.VITE_EMAIL_PASS, // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.VITE_EMAIL_USER,
      to: 'raj.chakane@gmail.com',
      subject: `New Enquiry from ${source || 'ShivKiran Propertiees'}`,
      text: `
        New Enquiry Details:
        -------------------
        Name: ${name}
        Phone: ${phone}
        Email: ${email || 'Not provided'}
        Property Type: ${type || 'Not specified'}
        Message: ${message}
        Source: ${source || 'Website Form'}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #059669;">New Enquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>Property Type:</strong> ${type || 'Not specified'}</p>
          <p><strong>Message:</strong><br/>${message}</p>
          <hr/>
          <p style="font-size: 12px; color: #666;">Source: ${source || 'Website Form'}</p>
        </div>
      `,
    };

    try {
      if (!process.env.VITE_EMAIL_USER || !process.env.VITE_EMAIL_PASS) {
        console.warn('EMAIL_USER or EMAIL_PASS not set. Email not sent.');
        return res.status(200).json({ 
          success: true, 
          message: 'Enquiry received (Simulation: Email credentials not configured)',
          simulated: true 
        });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
