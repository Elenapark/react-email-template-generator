import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import React, { CSSProperties } from "react";

const testTemplate = () => {
  return (
    <Html>
      <Head />
      <Preview>Here is my preview screen!</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={box}>
            <Heading style={heading}>상단 타이틀</Heading>
            <Text style={text}>나는 컨텐츠 1임</Text>
            <Text style={text}>나는 컨텐츠 2임</Text>
            <Hr style={hr} />
            <Text style={text}>나는 컨텐츠 3임</Text>
            <Text style={text}>나는 컨텐츠 4임</Text>
            <Text style={text}>나는 컨텐츠 5임</Text>
            <Text style={text}>나는 컨텐츠 6임</Text>
            <Button
              pX={10}
              pY={10}
              style={button}
              href="https://dashboard.stripe.com/login"
            >
              View your Stripe Dashboard
            </Button>
            <Hr style={hr} />

            <Text style={footer}>나는 푸터임</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default testTemplate;

const body: CSSProperties = {
  backgroundColor: "#FFA500",
  height: "100vh",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container: CSSProperties = {
  backgroundColor: "#f1f1f1",
  padding: "20px",
  borderRadius: "5px",
  margin: "100px auto",
};

const box = {
  padding: "0 48px",
};

const heading: CSSProperties = {
  color: "purple",
};

const hr: CSSProperties = {
  borderColor: "#e1e1e1",
  borderWidth: "2px",
  margin: "20px 0",
};

const text = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const footer: CSSProperties = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
