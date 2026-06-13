import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lesson.wadahirono-baritone.net";

  // ✅ 固定ページ
  const staticPages = [
    "",
    "/lesson-concept",
    "/lesson-content",
    "/lesson-price",
    "/lesson-profile",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // ✅ ブログページ取得
  const posts = await client.fetch(`
    *[_type == "lessonBlog"]{
      slug,
      publishedAt,
      date
    }
  `);

  const blogPages = posts
    .filter((p: any) => p?.slug?.current)
    .map((p: any) => ({
      url: `${baseUrl}/blog/${p.slug.current}`,
      lastModified: new Date(p.publishedAt || p.date || Date.now()),
    }));

  return [...staticPages, ...blogPages];
}