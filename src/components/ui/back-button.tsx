"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  fallbackHref: string;
  label: string;
}

export function BackButton({ fallbackHref, label }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // If we have history in the current tab, use router.back()
    // to benefit from native scroll restoration.
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      // Fallback for new tabs/direct entries
      router.push(fallbackHref);
    }
  };

  return (
    <Button
      className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground transition-colors hover:text-foreground"
      variant="link"
      onClick={handleBack}
    >
      <ArrowLeftIcon className="size-4" />
      {label}
    </Button>
  );
}
