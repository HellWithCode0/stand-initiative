"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";
import { Mark } from "./Mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onPointer(e: PointerEvent) {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const close = () => setOpen(false);

  const links = (
    <ul className="nav-list">
      {nav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="nav-link"
            aria-current={isCurrent(item.href) ? "page" : undefined}
            onClick={close}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="site-header" data-menu-open={open}>
      <div className="container header-row">
        <Link href="/" className="brand" onClick={close}>
          <Mark />
          <span className="brand-text">
            <span className="brand-name">STAND</span>
            <span className="brand-full">Sport Training and Assistance New Delhi</span>
          </span>
        </Link>

        <nav aria-label="Main" className="nav-desktop">
          {links}
        </nav>

        <div className="header-actions">
          <Link
            href="/donate"
            className="btn btn-primary btn-small"
            aria-current={pathname === "/donate" ? "page" : undefined}
            onClick={close}
          >
            Donate
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
            Menu
          </button>
        </div>
      </div>

      <div ref={panelRef} id="site-menu" className="nav-mobile" hidden={!open}>
        <nav aria-label="Main" className="container">
          {links}
        </nav>
      </div>
    </header>
  );
}
