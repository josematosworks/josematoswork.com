export const prerender = false;
import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const post: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return new Response(JSON.stringify({ error: "Invalid form data" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const sendResend = await resend.emails.send({
    from: "Personal Website <noreply@josematoswork.com>",
    to: "developer@josematoswork.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
  });

  if (sendResend.data) {
    return new Response(
      JSON.stringify({
        message: `Message successfully sent!`,
      }),
      {
        status: 200,
        statusText: "OK",
      },
    );
  } else {
    return new Response(
      JSON.stringify({
        message: `Message failed to send: ${sendResend.error}`,
      }),
      {
        status: 500,
        statusText: `Internal Server Error: ${sendResend.error}`,
      },
    );
  }
};
