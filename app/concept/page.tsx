import { client } from "@/lib/sanity";

type LessonConcept = {
  title?: string;
  content?: string;
};

export default async function ConceptPage() {
  const concept: LessonConcept | null = await client.fetch(
    `*[_type == "lessonConcept"][0]{ title, content }`
  );

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>
        {concept?.title || "レッスンコンセプト"}
      </h1>
      <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.9, color: "#333" }}>
        {concept?.content || "Sanity側でレッスンコンセプトを作成して公開（Publish）してください。"}
      </p>
    </main>
  );
}