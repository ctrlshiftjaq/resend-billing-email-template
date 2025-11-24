import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface BillingFailureEmailProps {
  customerName?: string;
  amount?: string;
  failureReason?: string;
}

export const BillingFailureEmail = ({
  customerName = 'Ada Lovelace',
  amount = '$99.99',
  failureReason = 'Card declined',
}: BillingFailureEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Payment failed - {failureReason}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Payment failed</Heading>
          <Text style={text}>Hi {customerName},</Text>
          <Text style={text}>
            We tried to charge you {amount} but the payment failed: {failureReason}.
          </Text>
          <Text style={text}>
            The invoice for the failed payment is attached.
          </Text>
          <Text style={text}>
            Please update your payment information to continue enjoying our services.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Acme Billing Team</Text>
          <Container style={linkContainer}>
            <Text style={linkText}>
              View the project on{' '}
              <Link href="https://github.com/ctrlshiftjaq/resend-billing-failure-template" style={link}>
                GitHub
              </Link>
            </Text>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};

export default BillingFailureEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, sans-serif',
  color: '#242222',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const h1 = {
  color: '#242222',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 15px',
};

const text = {
  color: '#242222',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '0 0 10px',
};

const hr = {
  borderColor: '#e6e6e6',
  margin: '20px 0',
};

const footer = {
  color: '#666666',
  fontSize: '12px',
  lineHeight: '24px',
};

const linkContainer = {
  textAlign: 'center' as const,
  marginTop: '20px',
};

const linkText = {
  fontSize: '14px',
  lineHeight: '24px',
};

const link = {
  color: '#0070f3',
  textDecoration: 'underline',
};
