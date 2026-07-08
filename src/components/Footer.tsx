import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { streamingPlatforms, socialPlatforms, externalPlatforms } from '@/data/platforms';
import { safeLink, hasLink } from '@/data/links';

const navItems = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Lançamentos', href: '/#lancamentos' },
  { label: 'Vídeos', href: '/#videos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'EPK / Contrate', href: '/epk' },
  { label: 'Contato', href: '/#contato' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const platforms = [...socialPlatforms, ...streamingPlatforms, ...externalPlatforms].filter(
    (platform, index, list) => list.findIndex((p) => p.name === platform.name) === index,
  );

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo showTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-creme/60">
              Rico Samba — música brasileira autoral. Samba, bossa, choro e pagode moderno em
              canções sobre amor, saudade e recomeço.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-creme/50">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-creme/70 transition-colors hover:text-dourado"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-creme/50">
              Ouça e siga
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {platforms.map((platform) => {
                const active = hasLink(platform.url);
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={safeLink(platform.url)}
                    target={active ? '_blank' : undefined}
                    rel={active ? 'noopener noreferrer' : undefined}
                    aria-disabled={!active}
                    aria-label={platform.name}
                    title={platform.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-creme transition-all duration-300 ${
                      active
                        ? 'hover:-translate-y-0.5 hover:border-dourado/40 hover:text-dourado'
                        : 'cursor-default opacity-40'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-creme/50">
            © {year} Rico Samba. Todos os direitos reservados.
          </p>
          <p className="text-xs text-creme/40">
            Feito com <span className="text-dourado">♪</span> no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
