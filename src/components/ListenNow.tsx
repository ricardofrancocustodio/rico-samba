import { Reveal } from '@/components/Reveal';
import { streamingPlatforms } from '@/data/platforms';
import { hasLink, safeLink } from '@/data/links';

export function ListenNow() {
  return (
    <section id="ouvir" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="section-label">Ouça agora</p>
          <h2 className="heading-2">Ouça Rico Samba</h2>
          <p className="mt-4 text-lg text-creme/70">
            Escolha sua plataforma preferida e acompanhe os lançamentos onde você já ouve música.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {streamingPlatforms.map((platform, i) => {
            const active = hasLink(platform.url);
            const Icon = platform.icon;
            return (
              <Reveal key={platform.name} delay={i * 60}>
                <a
                  href={safeLink(platform.url)}
                  target={active ? '_blank' : undefined}
                  rel={active ? 'noopener noreferrer' : undefined}
                  aria-disabled={!active}
                  className={`group card-surface flex items-center gap-4 px-5 py-5 transition-all duration-300 ${
                    active
                      ? 'hover:-translate-y-1 hover:border-dourado/40 hover:shadow-soft'
                      : 'cursor-default opacity-60'
                  }`}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-creme transition-colors duration-300 group-hover:text-[var(--brand)]"
                    style={{ ['--brand' as string]: platform.brand }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-medium text-creme">{platform.name}</span>
                    <span className="text-xs text-creme/50">
                      {active ? 'Ouvir agora' : 'Em breve'}
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
