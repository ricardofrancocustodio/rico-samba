'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { MenuIcon, CloseIcon, PlayIcon } from '@/components/icons';
import { socialLinks, safeLink, hasLink } from '@/data/links';

const navItems = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Lançamentos', href: '/#lancamentos' },
  { label: 'Vídeos', href: '/#videos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'EPK / Contrate', href: '/epk' },
  { label: 'Contato', href: '/#contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const listenHref = hasLink(socialLinks.smartLink)
    ? safeLink(socialLinks.smartLink)
    : '/#ouvir';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-grafite/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Link href="/#inicio" aria-label="Rico Samba — início" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="link-underline text-sm font-medium text-creme/80 transition-colors hover:text-creme"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={listenHref}
            target={hasLink(socialLinks.smartLink) ? '_blank' : undefined}
            rel={hasLink(socialLinks.smartLink) ? 'noopener noreferrer' : undefined}
            className="btn-primary"
          >
            <PlayIcon className="h-4 w-4" />
            Ouvir agora
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="text-creme lg:hidden"
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-grafite/95 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative flex h-full flex-col px-6 pt-6">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="text-creme"
            >
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>

          <ul className="mt-14 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-4 font-display text-2xl text-creme/90 transition-colors hover:text-dourado"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={listenHref}
            target={hasLink(socialLinks.smartLink) ? '_blank' : undefined}
            rel={hasLink(socialLinks.smartLink) ? 'noopener noreferrer' : undefined}
            onClick={() => setOpen(false)}
            className="btn-primary mt-auto mb-10 w-full"
          >
            <PlayIcon className="h-4 w-4" />
            Ouvir agora
          </a>
        </div>
      </div>
    </header>
  );
}
