import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";
import { portfolioData } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.mohamedgshoaib.me";

  // Static routes
  const staticRoutes = ["", "/blog", "/projects", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog dynamic routes
  const blogSlugs = getAllPostSlugs();
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Project dynamic routes
  const projectSlugs = portfolioData.projects.featured.map((p) => p.id);
  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
