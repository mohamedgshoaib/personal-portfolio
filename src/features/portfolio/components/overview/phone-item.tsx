"use client";

import { PhoneIcon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { useIsClient } from "@/hooks/use-is-client";
import { decodePhoneNumber, formatPhoneNumber } from "@/utils/string";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

type PhoneItemProps = {
  phoneNumber: string;
};

export function PhoneItem({ phoneNumber }: PhoneItemProps) {
  const isClient = useIsClient();
  const phoneNumberDecoded = decodePhoneNumber(phoneNumber);
  const phoneNumberFormatted = formatPhoneNumber(phoneNumberDecoded);

  return (
    <IntroItem className="group">
      <IntroItemIcon>
        <PhoneIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <span className="inline-flex items-center gap-2">
          <IntroItemLink
            href={isClient ? `tel:${phoneNumberDecoded}` : "#"}
            aria-label={
              isClient ? `Call ${phoneNumberFormatted}` : "Phone number"
            }
          >
            {isClient ? phoneNumberFormatted : "[Phone protected]"}
          </IntroItemLink>

          {isClient && (
            <CopyButton
              className="opacity-0 transition-opacity group-hover:opacity-60 hover:opacity-100"
              value={phoneNumberDecoded}
            />
          )}
        </span>
      </IntroItemContent>
    </IntroItem>
  );
}
