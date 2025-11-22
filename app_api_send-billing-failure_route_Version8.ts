import { Resend } from "resend";
import { BillingFailureEmail } from "@/emails/BillingFailureEmail";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const html = await render(
    BillingFailureEmail({
      customerName: "Valued Customer",
      amount: "$99.99",
      failureReason: "Card declined",
      attachmentFilename: "invoice.pdf",
    })
  );

  const { data } = await resend.emails.send({
    from: "Acme Billing Team <onboarding@resend.dev>",
    to: "jaquelineromero@protonmail.com", 
    subject: "Oops! Payment didn't go through",
    html,
    attachments: [
      {
        path: "https://limewire.com/d/26b1y#xWyJKs46zP",
        filename: "Billing failure example.pdf",
      },
    ],
  });

  return Response.json({ data: data.id });
}