import type { Metadata } from "next";

import { BackButton } from "@/components/ui/back-button";
import { PostList } from "@/features/blog/components/post-list";
import { getAllPosts } from "@/features/blog/data/posts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-svh">
      <div className="flex items-center justify-between p-2 pl-4">
        <BackButton fallbackHref="/" label="Home" />
      </div>

      <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blog</h1>
      </div>

      <div className="p-4">
        <p className="text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <PostList
        posts={allPosts}
        className="screen-line-before screen-line-after pt-4"
      />

      <div className="h-4" />
    </div>
  );
}
