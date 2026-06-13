"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = { href: string; label: string };

export default function DrawerNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ✅ 実際のフォルダ構成に合わせる（重要）
  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/", label: "TOP" },
      { href: "/concept", label: "レッスンコンセプト" },
      { href: "/lesson", label: "レッスン内容" },
      { href: "/profile", label: "講師プロフィール" },
      { href: "/price", label: "レッスン料金" },
      { href: "/blog", label: "ブログ" },
      { href: "/contact", label: "レッスン問い合わせ" },
    ],
    []
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // ✅ Escキーで閉じる
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // ✅ スクロールロック
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ✅ ハンバーガー */}
      <button
        type="button"
        aria-label="メニューを開く"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="hamburgerBtn"
      >
        ≡
      </button>

      {/* ✅ 背景 */}
      <div
        className={`drawerOverlay ${open ? "isOpen" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* ✅ メニュー本体 */}
      <aside
        className={`drawer ${open ? "isOpen" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawerHeader">
          <div className="drawerTitle">Wada Vocal Lesson</div>

          <button
            type="button"
            aria-label="閉じる"
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
              className={`drawerLink ${isActive(item.href) ? "active" : ""}`}
              onClick={() => setOpen(false)} // ✅ 確実に閉じる
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