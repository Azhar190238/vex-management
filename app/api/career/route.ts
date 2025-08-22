import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const familyName = formData.get("familyName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const email = formData.get("email") as string;
    const streetAddress = formData.get("streetAddress") as string;
    const suburb = formData.get("suburb") as string;
    const message = formData.get("message") as string;
    const canDriveManual = formData.get("canDriveManual") as string;
    const hasOwnVehicle = formData.get("hasOwnVehicle") as string;
    const qualifications = formData.getAll("qualifications[]") as string[];
    const files = formData.getAll("files") as File[];

    // Validate input
    if (
      !firstName ||
      !familyName ||
      !phoneNumber ||
      !email ||
      !streetAddress ||
      !suburb ||
      !canDriveManual ||
      !hasOwnVehicle
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Prepare attachments
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

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
      to: "hr@tstc.com.au",
      subject: `New Career Application from ${firstName} ${familyName}`,
      text: `First Name: ${firstName}\nFamily Name: ${familyName}\nPhone: ${phoneNumber}\nEmail: ${email}\nStreet Address: ${streetAddress}\nSuburb: ${suburb}\nMessage: ${message}\nCan Drive Manual: ${canDriveManual}\nHas Own Vehicle: ${hasOwnVehicle}\nQualifications: ${qualifications.join(", ")}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f7f7f9; padding: 32px; border-radius: 12px; max-width: 520px; margin: auto; box-shadow: 0 2px 12px rgba(0,0,0,0.07);">
          <h2 style="color: #1a202c; margin-bottom: 16px;">New Career Application</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #555;"><strong>First Name:</strong></td><td style="padding: 8px 0; color: #222;">${firstName}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Family Name:</strong></td><td style="padding: 8px 0; color: #222;">${familyName}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Phone:</strong></td><td style="padding: 8px 0; color: #222;">${phoneNumber}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Email:</strong></td><td style="padding: 8px 0; color: #222;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Street Address:</strong></td><td style="padding: 8px 0; color: #222;">${streetAddress}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Suburb:</strong></td><td style="padding: 8px 0; color: #222;">${suburb}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Message:</strong></td><td style="padding: 8px 0; color: #222;">${message}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Can Drive Manual:</strong></td><td style="padding: 8px 0; color: #222;">${canDriveManual}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Has Own Vehicle:</strong></td><td style="padding: 8px 0; color: #222;">${hasOwnVehicle}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Qualifications:</strong></td><td style="padding: 8px 0; color: #222;">${qualifications.join(", ")}</td></tr>
          </table>
          <div style="margin-top: 32px; font-size: 13px; color: #888;">This application was sent via the T&S Traffic Solutions website career form.</div>
        </div>
      `,
      attachments,
    };

    // Email options for user confirmation
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for applying to T&S Traffic Solutions!",
      text: `Dear ${firstName},\n\nThank you for submitting your application to T&S Traffic Solutions. We have received your details and our team will review it soon.\n\nBest regards,\nT&S Traffic Solutions Team`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f7f7f9; padding: 32px; border-radius: 12px; max-width: 520px; margin: auto; box-shadow: 0 2px 12px rgba(0,0,0,0.07);">
          <h2 style="color: #1a202c; margin-bottom: 18px;">Thank you for applying to T&S Traffic Solutions!</h2>
          <p style="font-size: 16px; color: #222;">Dear ${firstName},</p>
          <p style="font-size: 15px; color: #444; margin: 18px 0 0 0;">Thank you for submitting your application to <strong>T&S Traffic Solutions</strong>.<br>We have received your details and our team will review it soon.</p>
          <div style="margin-top: 32px; font-size: 15px; color: #222;">Best regards,<br><span style="color: #1a202c; font-weight: 500;">T&S Traffic Solutions Team</span></div>
        </div>
      `,
    };

    // Send admin email
    await transporter.sendMail(mailOptions);
    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send application" },
      { status: 500 }
    );
  }
}