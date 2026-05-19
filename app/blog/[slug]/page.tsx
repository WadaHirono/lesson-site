import Link from "next/link";
import { client } from "@/lib/sanity";
import PortableContent from "@/components/PortableContent";

export const dynamic = "force-dynamic";

export default async function BlogDetailPage({
  params,
}: {
  params: any;
}) {
  // ✅ Promise/通常どちらでも対応
  const resolvedParams =
    typeof (params as any)?.then === "function" ? await params : params;

  // ✅ slug / id どっちで来ても拾う（演奏サイトで効いたやつ）
  const slug: string | undefined = resolvedParams?.slug ?? resolvedParams?.id;

  if (!slug) {
    return (
      <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
        <p>URLが正しくありません。</p>
        <p style={{ marginTop: "12px" }}>
          <Link href="/blog">← ブログ一覧に戻る</Link>
        </p>
      </main>
    );
  }

  // ✅ $slug を使うなら必ず { slug } を渡す（ここが超重要）
  const post = await client.fetch(
    `*[_type == "lessonBlog" && slug.current == $slug][0]{
      title,
      "publishedAt": coalesce(publishedAt, date),
      "body": coalesce(body, content, description)
    }`,
    { slug }
  );

  if (!post) {
    return (
      <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
        <p>記事が見つかりませんでした。</p>
        <p style={{ color: "#666" }}>URL: /blog/{slug}</p>
        <p style={{ marginTop: "12px" }}>
          <Link href="/blog">← ブログ一覧に戻る</Link>
        </p>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <p style={{ marginBottom: "16px" }}>
        <Link href="/blog">← ブログ一覧に戻る</Link>
      </p>

      <h1 style={{ marginBottom: "8px" }}>{post.title}</h1>

      {post.publishedAt && (
        <p style={{ color: "#666", marginTop: 0 }}>
          {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
        </p>
      )}

      <div style={{ marginTop: "22px" }}>
        {/* ✅ PortableText配列でも文字列でもPortableContent側が吸収 */}
        <PortableContent value={post.body} />
      </div>
    </main>
  );
}