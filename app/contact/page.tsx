export default function ContactPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>レッスン申込・その他問い合わせ</h1>

      <p>以下のフォームよりお申し込みください。</p>

      <a
        href="https://forms.office.com/r/JBM7wb4Ff4"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          background: "#1b2a41",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "500"
        }}
      >
        問い合わせフォームを開く
      </a>
    </main>
  );
}