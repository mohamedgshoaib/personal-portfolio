import { cn } from "@/lib/utils";

import type { Post } from "../types/post";
import { PostItem } from "./post-item";

export function PostList({
  posts,
  className,
}: {
  posts: Post[];
  className?: string;
}) {
  return (
    <div className={cn("relative pt-4", className)}>
      <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
        <div className="border-r border-edge" />
        <div className="border-l border-edge" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {posts.map((post, index) => (
          <PostItem
            key={post.slug}
            post={post}
            shouldPreloadImage={index <= 4}
          />
        ))}

        {posts.length === 0 && (
          <div className="screen-line-before screen-line-after p-4">
            <p className="text-sm">No posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
