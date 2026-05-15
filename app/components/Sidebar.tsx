import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "rgba(255,255,255,0.8)",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2>メニュー</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
        <li><Link href="/">トップ</Link></li>
        <li><Link href="/concept">レッスンコンセプト</Link></li>
        <li><Link href="/profile">講師プロフィール</Link></li>
        <li><Link href="/price">レッスン料金</Link></li>
        <li><Link href="/contact">レッスン問い合わせ</Link></li>
      </ul>
    </div>
  );
}