"use client";

import { useState } from "react";
import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/ui/icon";

interface CopyActionsProps {
  rawMarkdown: string;
}

export function CopyActions({ rawMarkdown }: CopyActionsProps) {
  const [copied, setCopied] = useState(false);

  const copyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(rawMarkdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy markdown:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={copyMarkdown}
      className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-muted-foreground border border-border bg-muted/30 hover:bg-muted hover:text-foreground hover:border-foreground/20 transition-all duration-200"
      aria-label={copied ? "Copied!" : "Copy as Markdown"}
    >
      <Icon
        icon={copied ? Tick01Icon : Copy01Icon}
        size={14}
        strokeWidth={2}
        className="transition-transform group-hover:scale-110"
      />
      {copied ? "Copied!" : "Copy as Markdown"}
    </button>
  );
}
