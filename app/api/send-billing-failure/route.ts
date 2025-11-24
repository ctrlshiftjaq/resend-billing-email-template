import { resend } from '../../../lib/resend';
import { BillingFailureEmail } from '../../../emails/BillingFailureEmail';
import { render } from '@react-email/render';

export async function GET() {
  try {
    // Render the React Email component to HTML
    const emailHtml = render(
      BillingFailureEmail({
        customerName: 'Ada Lovelace',
        amount: '$99.99',
        failureReason: 'Card declined'
      })
    );

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Acme Billing Team <onboarding@resend.dev>',
      to: ['jaquelineromero@protonmail.com'],
      subject: "Oops! Payment didn't go through",
      html: emailHtml,
      attachments: [
        {
          filename: 'Billingfailure.pdf',
          path: 'https://raw.githubusercontent.com/ctrlshiftjaq/resend-billing-email-template/main/attachments/Billingfailure.pdf',
        },
      ],
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
