import "./globals.css";
import DrawerNav from "@/components/DrawerNav";
import type { Metadata } from "next";

// ✅ SEO追加（最重要）
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
          {/* ナビ */}
          <DrawerNav />

          {/* ページ本体 */}
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

          .hamburgerBtn{
            position: fixed;
            top: 14px;
            left: 14px;
            z-index: 30;
            width: 44px;
            height: 44px;
            border-radius: 14px;
            background: rgba(255,255,255,0.75);
          }

          /* ✅ スマホ改善（少し追加） */
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