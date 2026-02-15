import { MapPinIcon } from "lucide-react";

import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";

import { Panel, PanelContent } from "../panel";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-4">
        <div
          className={cn(
            "relative grid gap-x-4 gap-y-2.5 sm:grid-cols-2",
            "before:absolute before:-top-4 before:-right-8 before:w-[calc(50%+var(--spacing)*14)] before:border-t before:border-dashed before:border-edge/80 max-sm:before:content-none"
          )}
        >
          <EmailItem email={USER.email} />

          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                aria-label={`Location: ${USER.address}`}
              >
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <PhoneItem phoneNumber={USER.phoneNumber} />

          <CurrentLocalTimeItem timeZone={USER.timeZone} />
        </div>
      </PanelContent>

      <div className="absolute top-0 left-[calc(50%-var(--spacing)*2-1px)] -z-1 h-full border-r border-edge/80 max-sm:hidden" />
    </Panel>
  );
}
