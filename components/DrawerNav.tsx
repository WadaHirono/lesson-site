"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = { href: string; label: string };

export default function DrawerNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/", label: "TOP" },
      { href: "/concept", label: "レッスンコンセプト" },
      { href: "/lesson", label: "レッスン内容" },
      { href: "/profile", label: "講師プロフィール" },
      { href: "/price", label: "レッスン料金" },

      // ✅ ✅ ✅ ここ追加
      { href: "/blog", label: "ブログ" },

      { href: "/contact", label: "レッスン問い合わせ" },
    ],
    []
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Escで閉じる
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // 開いてる間スクロール禁止
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* 左上 ≡ ボタン */}
      <button
        type="button"
        aria-label="メニューを開く"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="hamburgerBtn"
      >
        ≡
      </button>

      {/* 背景オーバーレイ */}
      <div
        className={`drawerOverlay ${open ? "isOpen" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* メニュー */}
      <aside className={`drawer ${open ? "isOpen" : ""}`} aria-hidden={!open}>
        <div className="drawerHeader">
          <div className="drawerTitle">Wada Vocal Lesson</div>
          <button
            type="button"
            aria-label="メニューを閉じる"
            onClick={() => setOpen(false)}
            className="closeBtn"
          >
            ✕
          </button>
        </div>

        <nav className="drawerNav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`drawerLink ${isActive(item.href) ? "active" : ""}`}
            >
              <span className="activeBar" />
              <span className="label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}