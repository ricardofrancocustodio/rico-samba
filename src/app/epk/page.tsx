import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { CopyButton } from '@/components/CopyButton';
import { ProContactForm } from '@/components/ProContactForm';
import { StageMap } from '@/components/StageMap';
import {
  shortBio,
  longBio,
  releases,
  showFormats,
  riders,
  downloads,
  pressPhotos,
} from '@/data/epk';
import { songs } from '@/data/songs';
import { allPlatforms } from '@/data/platforms';
import { hasLink, safeLink } from '@/data/links';
import {
  DownloadIcon,
  PlayIcon,
  YoutubeIcon,
  LetrasIcon,
  ArrowRightIcon,
} from '@/components/icons';

export const metadata: Metadata = {
  title: 'EPK / Contrate Rico Samba — Press Kit',
  description:
    'Press kit oficial de Rico Samba: bio, releases, fotos, logos, formatos de show, rider técnico e contato para contratação e imprensa.',
  alternates: { canonical: 'https://ricosamba.com.br/epk' },
  openGraph: {
    title: 'EPK / Contrate Rico Samba',
    description:
      'Bio, releases, fotos, formatos de show, rider técnico e contato profissional.',
    url: 'https://ricosamba.com.br/epk',
  },
};

const ratioClass: Record<string, string> = {
  landscape: 'aspect-video',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
};

export default function EpkPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
          <div className="absolute inset-0 -z-10 bg-radial-warm" />
          <div className="container-x">
            <Reveal>
              <nav className="mb-6 flex items-center gap-2 text-sm text-creme/50" aria-label="Trilha de navegação">
                <Link href="/" className="transition-colors hover:text-dourado">
                  Início
                </Link>
                <span>/</span>
                <span className="text-creme/80">EPK / Contrate</span>
              </nav>
              <p className="section-label">Press Kit oficial</p>
              <h1 className="font-display text-4xl font-bold leading-tight text-creme sm:text-6xl">
                EPK / Contrate <span className="text-gold-gradient">Rico Samba</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-creme/75">
                Materiais oficiais para contratantes, produtores e imprensa: biografia, releases,
                fotos, formatos de show, rider técnico e contato profissional.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contratar" className="btn-primary">
                  Contratar show
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a href="#downloads" className="btn-secondary">
                  <DownloadIcon className="h-4 w-4" />
                  Downloads oficiais
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 sm:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="card-surface h-full p-7 sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="font-display text-2xl font-semibold text-creme">Bio curta</h2>
                  <CopyButton text={shortBio} />
                </div>
                <p className="text-lg leading-relaxed text-creme/75">{shortBio}</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card-surface h-full p-7 sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="font-display text-2xl font-semibold text-creme">Bio completa</h2>
                  <CopyButton text={longBio.join('\n\n')} />
                </div>
                <div className="space-y-4 leading-relaxed text-creme/70">
                  {longBio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Presença digital */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">Presença digital</p>
              <h2 className="heading-2">Onde encontrar Rico Samba</h2>
              <p className="mt-4 text-creme/70">
                Presença oficial nas principais plataformas de música, vídeo, letras e redes sociais.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {allPlatforms.map((platform, i) => {
                const active = hasLink(platform.url);
                const Icon = platform.icon;
                return (
                  <Reveal key={platform.name} delay={(i % 4) * 50}>
                    <a
                      href={safeLink(platform.url)}
                      target={active ? '_blank' : undefined}
                      rel={active ? 'noopener noreferrer' : undefined}
                      aria-disabled={!active}
                      className={`group card-surface flex items-center gap-3 px-4 py-4 transition-all duration-300 ${
                        active
                          ? 'hover:-translate-y-1 hover:border-dourado/40'
                          : 'cursor-default opacity-55'
                      }`}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-creme transition-colors group-hover:text-[var(--brand)]"
                        style={{ ['--brand' as string]: platform.brand }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-creme">{platform.name}</span>
                        <span className="text-[11px] text-creme/50">
                          {active ? 'Perfil oficial' : 'Em breve'}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfólio musical */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">Portfólio musical</p>
              <h2 className="heading-2">Repertório autoral</h2>
              <p className="mt-4 text-creme/70">
                Músicas lançadas e em campanha, com acesso direto às plataformas, lyric videos e letras.
              </p>
            </Reveal>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/5">
              <ul className="divide-y divide-white/5">
                {songs.map((song) => (
                  <li
                    key={song.slug}
                    className="flex flex-col gap-4 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={song.cover}
                        alt={`Capa de ${song.title}`}
                        loading="lazy"
                        className="h-16 w-16 shrink-0 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-display text-lg font-semibold text-creme">
                          {song.title}
                        </h3>
                        <p className="text-sm text-creme/60">{song.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <PortfolioLink url={song.spotifyUrl} label="Spotify" icon={<PlayIcon className="h-3.5 w-3.5" />} />
                      <PortfolioLink url={song.youtubeUrl} label="YouTube" icon={<YoutubeIcon className="h-3.5 w-3.5" />} />
                      <PortfolioLink url={song.lyricVideoUrl} label="Lyric video" icon={<YoutubeIcon className="h-3.5 w-3.5" />} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Propostas de show */}
        <section id="contratar" className="scroll-mt-20 py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">Propostas de show</p>
              <h2 className="heading-2">Formatos de apresentação</h2>
              <p className="mt-4 text-creme/70">
                Formatos flexíveis que se adaptam ao seu evento, do intimista ao animado.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {showFormats.map((format, i) => (
                <Reveal key={format.title} delay={(i % 2) * 90}>
                  <article className="card-surface h-full p-7">
                    <h3 className="font-display text-xl font-semibold text-dourado">
                      {format.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-creme/75">{format.description}</p>
                    <p className="mt-4 text-sm text-creme/55">
                      <span className="font-semibold text-creme/70">Ideal para:</span> {format.ideal}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Rider técnico + mapa de palco */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">Rider técnico</p>
              <h2 className="heading-2">Estrutura para apresentação</h2>
              <p className="mt-4 text-creme/70">
                Requisitos básicos por formato. Uma versão detalhada em PDF pode ser enviada sob
                demanda.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {riders.map((rider, i) => (
                <Reveal key={rider.title} delay={i * 90}>
                  <article className="card-surface h-full p-7">
                    <h3 className="font-display text-xl font-semibold text-creme">{rider.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {rider.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-creme/75">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dourado" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-6">
              <div className="card-surface p-7">
                <h3 className="font-display text-xl font-semibold text-creme">Mapa de palco</h3>
                <p className="mt-2 text-sm text-creme/60">
                  Disposição sugerida para o formato com banda reduzida.
                </p>
                <div className="mt-6">
                  <StageMap />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Fotos oficiais */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">Fotos oficiais</p>
              <h2 className="heading-2">Imagens para divulgação</h2>
              <p className="mt-4 text-creme/70">
                Fotos horizontais, verticais e quadradas. Solicite os arquivos em alta resolução na
                área de downloads.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pressPhotos.map((photo, i) => (
                <Reveal key={photo.src} delay={(i % 3) * 80}>
                  <figure className="card-surface overflow-hidden">
                    <div className={`${ratioClass[photo.ratio]} overflow-hidden`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-xs text-creme/55">{photo.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Releases */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">Releases</p>
              <h2 className="heading-2">Textos prontos para imprensa</h2>
              <p className="mt-4 text-creme/70">
                Copie e utilize livremente em matérias, agendas culturais e divulgação.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {releases.map((release, i) => (
                <Reveal key={release.id} delay={(i % 2) * 90}>
                  <article className="card-surface flex h-full flex-col p-7">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold text-dourado">
                        {release.title}
                      </h3>
                      <CopyButton text={release.text} />
                    </div>
                    <p className="leading-relaxed text-creme/75">{release.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Na mídia */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal>
              <div className="card-surface flex flex-col items-center gap-3 px-8 py-14 text-center">
                <LetrasIcon className="h-8 w-8 text-dourado" />
                <p className="section-label justify-center">Na mídia</p>
                <h2 className="heading-2">Clipping em construção</h2>
                <p className="mx-auto mt-2 max-w-xl text-creme/70">
                  Matérias, entrevistas, podcasts, playlists e menções serão reunidos aqui conforme o
                  projeto cresce. Para pautas e entrevistas, entre em contato.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Downloads */}
        <section id="downloads" className="scroll-mt-20 py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">Downloads</p>
              <h2 className="heading-2">Arquivos oficiais</h2>
              <p className="mt-4 text-creme/70">
                Materiais para download. Itens marcados como “em breve” serão disponibilizados em
                seguida.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {downloads.map((item, i) => {
                const available = hasLink(item.href);
                return (
                  <Reveal key={item.label} delay={(i % 3) * 70}>
                    <a
                      href={available ? item.href : undefined}
                      download={available || undefined}
                      aria-disabled={!available}
                      className={`group card-surface flex items-center gap-4 p-5 transition-all duration-300 ${
                        available
                          ? 'hover:-translate-y-1 hover:border-dourado/40'
                          : 'cursor-default opacity-55'
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-dourado">
                        <DownloadIcon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-medium text-creme">{item.label}</span>
                        <span className="text-xs text-creme/55">
                          {available ? item.description : 'Em breve'}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contato profissional */}
        <section id="contratar-form" className="scroll-mt-20 py-16 sm:py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="section-label">Contato profissional</p>
              <h2 className="heading-2">Solicite uma proposta</h2>
              <p className="mt-4 text-creme/70">
                Preencha os dados do evento e a produção retornará com disponibilidade e valores.
              </p>
            </Reveal>

            <Reveal className="mt-10" delay={100}>
              <ProContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PortfolioLink({
  url,
  label,
  icon,
}: {
  url: string;
  label: string;
  icon: React.ReactNode;
}) {
  const active = hasLink(url);
  return (
    <a
      href={safeLink(url)}
      target={active ? '_blank' : undefined}
      rel={active ? 'noopener noreferrer' : undefined}
      aria-disabled={!active}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? 'border-dourado/50 text-dourado hover:bg-dourado/10'
          : 'cursor-default border-white/10 text-creme/40'
      }`}
    >
      {icon}
      {label}
    </a>
  );
}
