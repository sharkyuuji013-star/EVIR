import nodemailer from "nodemailer";

export async function GET() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return Response.json({ error: "ENV vars missing", user: !!user, pass: !!pass });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
    connectionTimeout: 10000,
  });

  try {
    await transporter.verify();
    return Response.json({ success: true, message: "SMTP connection verified!", user });
  } catch (err) {
    return Response.json({ error: err.message, code: err.code });
  }
}
