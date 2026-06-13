import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lesson.wadahirono-baritone.net";

  const staticPages = [
    "",
    "/concept",
    "/lesson",
    "/profile",
    "/price",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const blogPosts = await client.fetch(`
    *[_type == "lessonBlog"]{
      slug,
      publishedAt,
      date
    }
  `);

  const blogPages = blogPosts
    .filter((post: any) => post?.slug?.current)
    .map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt || post.date || Date.now()),
    }));

  return [...staticPages, ...blogPages];
}