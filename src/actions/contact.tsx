"use server";
import { Resend } from "resend";

export async function submit(_: any, data: FormData) {
  const name = data.get("name");
  const email = data.get("email");
  const company = data.get("company");
  const message = data.get("message");

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "developer@mettlestate.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    return "success";
  } catch {
    return "An unexpect error occured. Please refresh and try again";
  }
}
