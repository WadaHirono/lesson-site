import { client } from "@/lib/sanity";

type LessonTop = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default async function Home() {
  const data: LessonTop | null = await client.fetch(
    `*[_type == "lessonTop"][0]{
      title,
      description,
      "imageUrl": image.asset->url
    }`
  );

  return (
    <main style={{ padding: "40px" }}>
      <div
        style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* 左：小さい画像 */}
        {data?.imageUrl && (
          <img
            src={data.imageUrl}
            alt="top image"
            style={{
              width: "220px",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        )}

        {/* 右：テキスト */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <h1 style={{ fontSize: "26px", margin: 0 }}>
            {data?.title || "タイトル未設定"}
          </h1>

          <p style={{ lineHeight: "1.8", marginTop: "12px" }}>
            {data?.description || "説明文がまだ入力されていません"}
          </p>

          {/* デバッグ表示（データが0件のときだけ見える） */}
          {!data && (
            <p style={{ color: "#b00", marginTop: "14px" }}>
              lessonTop のデータが見つかりませんでした。Sanity Studioで
              「lessonTop」を1件作成してPublish済みか確認してください。
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
``