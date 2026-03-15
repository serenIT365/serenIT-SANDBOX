import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  const { name, email, company, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "SERENIT Contact Form <info@serenit.org>",
    to: ["info@serenit.org"],
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    res.status(500).json({ error: "Failed to send message. Please try again." });
    return;
  }

  const response = SubmitContactResponse.parse({
    success: true,
    message: "Thank you for reaching out! We'll get back to you shortly.",
  });

  res.json(response);
});

export default router;
