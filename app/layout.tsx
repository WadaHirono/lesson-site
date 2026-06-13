import "./globals.css";
import DrawerNav from "@/components/DrawerNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lesson.wadahirono-baritone.net"),

  title: {
    default: "和田広野 ボーカルレッスン｜声楽・歌唱指導",
    template: "%s｜和田広野 ボーカルレッスン",
  },

  description:
    "和田広野によるボーカルレッスンサイト。レッスンコンセプト、内容、料金、講師プロフィールをご案内しています。",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "和田広野 ボーカルレッスン",
    description:
      "声楽・歌唱指導のレッスンサイト。初心者から経験者まで対応。",
    url: "https://lesson.wadahirono-baritone.net",
    siteName: "和田広野 ボーカルレッスン",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "和田広野 ボーカルレッスン",
    description:
      "ボーカルレッスン・声楽指導のためのサイト。レッスン内容や料金をご案内。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>
        <div className="appRoot">
          <DrawerNav />
          <main className="pageContent">{children}</main>
        </div>

        <style>{`
          .appRoot{
            min-height: 100vh;
            position: relative;
            background: #eaf4ff;
            overflow-x: hidden;
          }

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
            padding: 72px 18px 60px;
          }

          /* ✅ ハンバーガーボタン */
          .hamburgerBtn{
            position: fixed;
            top: 14px;
            left: 14px;
            z-index: 40;
            width: 44px;
            height: 44px;
            border-radius: 14px;
            border: 1px solid rgba(0,0,0,0.1);
            background: rgba(255,255,255,0.85);
            cursor: pointer;
            font-size: 22px;
          }

          /* ✅ オーバーレイ */
          .drawerOverlay{
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.3);
            opacity: 0;
            pointer-events: none;
            transition: 0.2s;
            z-index: 30;
          }

          .drawerOverlay.isOpen{
            opacity: 1;
            pointer-events: auto;
          }

          /* ✅ ドロワー本体 */
          .drawer{
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: min(300px, 85vw);
            background: #fff;
            transform: translateX(-100%);
            transition: 0.25s ease;
            z-index: 35;
            padding: 16px;
            box-shadow: 10px 0 30px rgba(0,0,0,0.1);
          }

          .drawer.isOpen{
            transform: translateX(0);
          }

          .drawerHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }

          .drawerTitle{
            font-weight: bold;
            color: #1b2a41;
          }

          .closeBtn{
            background: #eee;
            border: none;
            border-radius: 8px;
            width: 32px;
            height: 32px;
            cursor: pointer;
          }

          .drawerNav{
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .drawerLink{
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 10px;
            color: #1b2a41;
            text-decoration: none;
          }

          .drawerLink:hover{
            background: #f0f4fa;
          }

          .drawerLink.active{
            background: #e4efff;
            font-weight: bold;
          }

          .activeBar{
            width: 5px;
            height: 16px;
            margin-right: 8px;
            background: transparent;
          }

          .drawerLink.active .activeBar{
            background: #1b2a41;
          }

          /* ✅ スマホ */
          @media (max-width: 768px){
            .pageContent{
              padding: 64px 14px 40px;
            }
          }
        `}</style>
      </body>
    </html>
  );
}