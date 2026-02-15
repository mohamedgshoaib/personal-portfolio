import { Resend } from "resend";

import { ContactEmailTemplate } from "@/components/emails/contact-template";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_EMAIL!],
      subject: `New contact from ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Contact Form Server Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
