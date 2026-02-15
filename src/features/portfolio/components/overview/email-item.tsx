"use client";

import { MailIcon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

type EmailItemProps = {
  email: string;
};

export function EmailItem({ email }: EmailItemProps) {
  const isClient = useIsClient();
  const emailDecoded = decodeEmail(email);

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <span className="inline-flex items-center gap-2">
          <IntroItemLink
            href={isClient ? `mailto:${emailDecoded}` : "#"}
            aria-label={
              isClient ? `Send email to ${emailDecoded}` : "Email address"
            }
          >
            {isClient ? emailDecoded : "[Email protected]"}
          </IntroItemLink>

          {isClient && (
            <CopyButton
              className="opacity-0 transition-opacity group-hover:opacity-60 hover:opacity-100"
              value={emailDecoded}
            />
          )}
        </span>
      </IntroItemContent>
    </IntroItem>
  );
}
