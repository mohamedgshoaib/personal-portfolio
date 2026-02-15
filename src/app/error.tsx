"use client";

import { ArrowLeftIcon, ArrowRightIcon, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { MyMark } from "@/components/my-mark";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
      <MyMark className="h-20 w-full text-brand md:h-28" />
      <h2 className="my-6 text-2xl font-medium tracking-tighter md:text-3xl">
        Something went wrong!
      </h2>
      <p className="mb-8 max-w-125 text-muted-foreground">
        Something went wrong. Please try again or head back home.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button onClick={() => router.back()} variant="outline">
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Go Back
        </Button>
        <Button onClick={() => reset()} variant="outline">
          <RefreshCcw className="mr-2 h-4 w-4" /> Try again
        </Button>
        <Button asChild>
          <Link href="/">
            Go to Home <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
