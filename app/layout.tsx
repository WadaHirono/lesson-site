import "./globals.css";
import DrawerNav from "@/components/DrawerNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>
        <div className="appRoot">
          {/* 左上の≡とスライドメニュー */}
          <DrawerNav />

          {/* ページ本体 */}
          <main className="pageContent">{children}</main>
        </div>

        {/* このレイアウト用CSS（Tailwind不要・確実に動く） */}
        <style>{`
          .appRoot{
            min-height: 100vh;
            position: relative;
            background: #eaf4ff; /* 薄い青 */
            overflow-x: hidden;
          }

          /* 薄い黒音符（透かし） */
          .appRoot::before{
            content:"";
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cg fill='%23000' fill-opacity='0.06'%3E%3Ctext x='22' y='108' font-size='80'%3E%E2%99%AA%3C/text%3E%3C/g%3E%3C/svg%3E");
            background-repeat: repeat;
            background-size: 180px 180px;
          }

          .pageContent{
            position: relative;
            z-index: 1;
            max-width: 980px;
            margin: 0 auto;
            padding: 72px 18px 60px; /* 上に≡があるので少し余白 */
          }

          /* === DrawerNav styles === */
          .hamburgerBtn{
            position: fixed;
            top: 14px;
            left: 14px;
            z-index: 30;
            width: 44px;
            height: 44px;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 14px;
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            cursor: pointer;
            font-size: 22px;
            line-height: 1;
            display: grid;
            place-items: center;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          }
          .hamburgerBtn:hover{
            background: rgba(255,255,255,0.9);
          }

          .drawerOverlay{
            position: fixed;
            inset: 0;
            z-index: 20;
            background: rgba(0,0,0,0.25);
            opacity: 0;
            pointer-events: none;
            transition: opacity .18s ease;
          }
          .drawerOverlay.isOpen{
            opacity: 1;
            pointer-events: auto;
          }

          .drawer{
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: min(320px, 86vw);
            z-index: 25;
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border-right: 1px solid rgba(0,0,0,0.08);
            transform: translateX(-105%);
            transition: transform .22s ease;
            box-shadow: 12px 0 28px rgba(0,0,0,0.10);
            padding: 16px 14px;
            box-sizing: border-box;
          }
          .drawer.isOpen{
            transform: translateX(0);
          }

          .drawerHeader{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 6px 6px 12px;
            border-bottom: 1px solid rgba(0,0,0,0.06);
            margin-bottom: 10px;
          }
          .drawerTitle{
            font-weight: 800;
            letter-spacing: .03em;
            color: #1b2a41;
          }
          .closeBtn{
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: 1px solid rgba(0,0,0,0.08);
            background: rgba(255,255,255,0.75);
            cursor: pointer;
            display: grid;
            place-items: center;
          }

          .drawerNav{
            display: grid;
            gap: 8px;
            padding: 6px;
          }

          .drawerLink{
            position: relative;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 10px;
            border-radius: 14px;
            text-decoration: none;
            color: #1b2a41;
            border: 1px solid rgba(0,0,0,0.06);
            background: rgba(255,255,255,0.55);
            transition: background .15s ease, border-color .15s ease;
          }
          .drawerLink:hover{
            background: rgba(255,255,255,0.85);
            border-color: rgba(0,0,0,0.10);
          }

          /* 現在ページのマーク（理想の「マーキング」） */
          .drawerLink .activeBar{
            width: 6px;
            height: 18px;
            border-radius: 999px;
            background: transparent;
            flex: 0 0 auto;
          }
          .drawerLink.active{
            background: rgba(27,42,65,0.10);
            border-color: rgba(27,42,65,0.22);
          }
          .drawerLink.active .activeBar{
            background: rgba(27,42,65,0.85);
          }
          .drawerLink .label{
            font-size: 14px;
            font-weight: 650;
          }
        `}</style>
      </body>
    </html>
  );
}