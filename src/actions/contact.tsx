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
      from: "Mettlestate <developer@mettlestate.com>",
      to: "info@networkx.co.za",
      cc: "developer@mettlestate.com",
      subject: "New NetworkX Group Contact",
      html: `
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>${company}</td>
            </tr>
            <tr>
              <td>Message</td>
              <td>${message}</td>
            </tr>
          </tbody>
        </table>
      `,
    });

    return "success";
  } catch {
    return "An unexpect error occured. Please refresh and try again";
  }
}
