import { client } from "@/lib/sanity";

type LessonProfile = {
  name?: string;
  bio?: string;
};

export default async function ProfilePage() {
  const profile: LessonProfile | null = await client.fetch(
    `*[_type == "lessonProfile"][0]{ name, bio }`
  );

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>
        {profile?.name || "講師プロフィール"}
      </h1>
      <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.9, color: "#333" }}>
        {profile?.bio || "Sanity側で講師プロフィールを作成して公開（Publish）してください。"}
      </p>
    </main>
  );
}