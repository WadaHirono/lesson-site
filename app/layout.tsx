import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>
        <div className="appRoot">
          {/* ✅ 上メニュー */}
          <header className="topNav">
            <div className="navInner">
              <div className="brand">Wada Vocal Lesson</div>

              <nav className="navLinks">
                <Link href="/">TOP</Link>
                <Link href="/concept">レッスンコンセプト</Link>
                <Link href="/lesson">レッスン内容</Link>
                <Link href="/profile">講師プロフィール</Link>
                <Link href="/price">レッスン料金</Link>
                <Link href="/contact">お問い合わせ</Link>
              </nav>
            </div>
          </header>

          {/* ✅ コンテンツ */}
          <main className="content">{children}</main>
        </div>

        {/* ✅ CSS */}
        <style>{`
          .appRoot {
            min-height: 100vh;
            position: relative;
            background: #eaf4ff;
          }

          /* ✅ 音符背景 */
          .appRoot::before {
            content: "";
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 0;

            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cg fill='%23000' fill-opacity='0.06'%3E%3Ctext x='20' y='100' font-size='80'%3E♪%3C/text%3E%3C/g%3E%3C/svg%3E");
            background-repeat: repeat;
          }

          /* ✅ メニュー */
          .topNav {
            position: sticky;
            top: 0;
            z-index: 10;
            backdrop-filter: blur(10px);
            background: rgba(255,255,255,0.7);
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }

          .navInner {
            max-width: 980px;
            margin: 0 auto;
            padding: 14px 18px;
            display: flex;
            justify-content: space-between;
          }

          .brand {
            font-weight: bold;
          }

          .navLinks {
            display: flex;
            gap: 15px;
          }

          .navLinks a {
            text-decoration: none;
            color: #333;
          }

          /* ✅ コンテンツ */
          .content {
            position: relative;
            z-index: 1;
            max-width: 980px;
            margin: 0 auto;
            padding: 40px;
          }
        `}</style>
      </body>
    </html>
  );
}