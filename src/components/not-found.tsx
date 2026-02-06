"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MyMark } from "./my-mark";

export function NotFound({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center px-4 text-center",
        className
      )}
    >
      <MyMark className="h-20 w-full text-border md:h-28" />

      <h1 className="my-6 text-6xl font-medium tracking-tighter tabular-nums md:text-8xl">
        404
      </h1>
      <p className="mb-8 max-w-125 text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been removed, renamed, or doesn&apos;t exist.
      </p>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Go Back
        </Button>
        <Button variant="default" asChild>
          <Link href="/">
            Go to Home
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
