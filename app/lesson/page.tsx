import { client } from "@/lib/sanity";

type LessonContent = {
  title?: string;
  body?: string;
};

export default async function LessonContentPage() {
  const data: LessonContent | null = await client.fetch(
    `*[_type == "lessonContent"][0]{ title, body }`
  );

  return (
    <main>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>
        {data?.title || "レッスン内容"}
      </h1>

      <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.9 }}>
        {data?.body || "（Sanityで本文を入力してください）"}
      </p>
    </main>
  );
}