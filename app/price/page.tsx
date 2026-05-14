import { client } from "@/lib/sanity";

type LessonPrice = {
  _id: string;
  menu?: string;
  price?: string;
};

export default async function PricePage() {
  const prices: LessonPrice[] = await client.fetch(
    `*[_type == "lessonPrice"] | order(menu asc){ _id, menu, price }`
  );

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>レッスン料金</h1>

      {prices.length === 0 ? (
        <p style={{ color: "#666" }}>
          Sanity側で「レッスン料金（lessonPrice）」を追加して公開（Publish）してください。
        </p>
      ) : (
        <div style={{ display: "grid", gap: 12, maxWidth: 560 }}>
          {prices.map((p) => (
            <div
              key={p._id}
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                padding: "14px 16px",
                background: "#fff",
              }}
            >
              <div style={{ fontWeight: 700 }}>{p.menu || "（メニュー未入力）"}</div>
              <div style={{ marginTop: 4, color: "#666" }}>
                {p.price || "（料金未入力）"}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}