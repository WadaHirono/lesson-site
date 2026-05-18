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

          {/* ✅ 説明文（改行対応） */}
          <p
            style={{
              lineHeight: "1.8",
              marginTop: "12px",
              whiteSpace: "pre-wrap",
            }}
          >
            {data?.description || "説明文がまだ入力されていません"}
          </p>

          {/* ✅ 演奏サイトボタン（追加） */}
          <div style={{ marginTop: "20px" }}>
            <a
              href="https://www.wadahirono-baritone.net/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 20px",
                background: "#1b2a41",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              🎵 演奏活動はこちら
            </a>
          </div>

          {/* デバッグ表示 */}
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