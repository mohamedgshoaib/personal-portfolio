import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  pixelBasedPreset,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const SITE_URL = "https://www.mohamedgshoaib.me";

export function ContactEmailTemplate({
  name,
  email,
  message,
}: Readonly<ContactEmailTemplateProps>) {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                zinc: {
                  100: "#f4f4f5",
                  200: "#e4e4e7",
                  400: "#a1a1aa",
                  500: "#71717a",
                  600: "#52525b",
                  800: "#27272a",
                  950: "#09090b",
                },
              },
            },
          },
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans text-zinc-950">
          <Preview>New message from {name}</Preview>
          <Container className="mx-auto my-[40px] max-w-[465px] border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${SITE_URL}/assets/apple-touch-icon.png`}
                width="40"
                height="40"
                alt="Mohamed Gamal"
                className="mx-auto my-0"
              />
            </Section>

            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              New Contact from <strong>{name}</strong>
            </Heading>

            <Text className="text-[14px] leading-[24px] text-black">
              Hello Mohamed,
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              <strong>{name}</strong> (
              <Link
                href={`mailto:${email}`}
                className="text-blue-600 no-underline"
              >
                {email}
              </Link>
              ) has sent you a message via your portfolio.
            </Text>

            <Section className="my-[32px] rounded bg-zinc-100 p-6">
              <Text className="m-0 text-[14px] leading-[24px] whitespace-pre-wrap text-zinc-800">
                {message}
              </Text>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This message was sent from{" "}
              <Link href={SITE_URL} className="text-blue-600 no-underline">
                mohamedgshoaib.me
              </Link>
              . Reply directly to this email to respond to {name}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
