import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, email, service, message } = await request.json();

    // Validate input
    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    // Email options for admin
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "plans@tstc.com.au",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f7f7f9; padding: 32px; border-radius: 12px; max-width: 520px; margin: auto; box-shadow: 0 2px 12px rgba(0,0,0,0.07);">
          <h2 style="color: #1a202c; margin-bottom: 16px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #555;"><strong>Name:</strong></td><td style="padding: 8px 0; color: #222;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Phone:</strong></td><td style="padding: 8px 0; color: #222;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Email:</strong></td><td style="padding: 8px 0; color: #222;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Service:</strong></td><td style="padding: 8px 0; color: #222;">${service}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Message:</strong></td><td style="padding: 8px 0; color: #222;">${message}</td></tr>
          </table>
          <div style="margin-top: 32px; font-size: 13px; color: #888;">This message was sent via the T&S Traffic Solutions website contact form.</div>
        </div>
      `,
    };

    // Email options for user confirmation
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting T&S Traffic Solutions!",
      text: `Dear ${name},\n\nThank you for reaching out to T&S Traffic Solutions. We have received your enquiry and our team will get back to you soon.\n\nBest regards,\nT&S Traffic Solutions Team`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f7f7f9; padding: 32px; border-radius: 12px; max-width: 520px; margin: auto; box-shadow: 0 2px 12px rgba(0,0,0,0.07);">
          <h2 style="color: #1a202c; margin-bottom: 18px;">Thank you for contacting T&S Traffic Solutions!</h2>
          <p style="font-size: 16px; color: #222;">Dear ${name},</p>
          <p style="font-size: 15px; color: #444; margin: 18px 0 0 0;">Thank you for reaching out to <strong>T&S Traffic Solutions</strong>.<br>We have received your enquiry and our team will get back to you soon.</p>
          <div style="margin-top: 32px; font-size: 15px; color: #222;">Best regards,<br><span style="color: #1a202c; font-weight: 500;">T&S Traffic Solutions Team</span></div>
        </div>
      `,
    };

    // Send admin email
    await transporter.sendMail(mailOptions);
    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
