import { Reveal } from '@/components/Reveal';

const traits = ['Samba', 'Bossa', 'Choro', 'Pagode moderno', 'MPB'];

export function AboutSection() {
  return (
    <section id="sobre" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/artist/rico-samba-sobre.svg"
                alt="Rico Samba em ambiente musical"
                className="w-full rounded-2xl shadow-soft ring-1 ring-white/10"
              />
              <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl border border-dourado/30" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="section-label">Sobre</p>
            <h2 className="heading-2">Um jeito próprio de sambar</h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-creme/75">
              <p>
                Rico Samba é um projeto de música brasileira autoral que mistura samba, bossa,
                choro, pagode moderno e MPB em canções sobre amor, saudade, encontros e despedidas.
              </p>
              <p>
                Com letras diretas e sentimentais, Rico Samba transforma histórias de
                relacionamento em música para cantar, lembrar e compartilhar.
              </p>
              <p className="text-creme/60">
                O projeto nasce da vontade de criar um samba atual, romântico e brasileiro, com
                violão, percussão, melodias marcantes e uma verdade simples: todo mundo tem um jeito
                próprio de sambar.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {traits.map((trait) => (
                <li
                  key={trait}
                  className="rounded-full border border-dourado/25 bg-dourado/5 px-4 py-1.5 text-sm font-medium text-dourado"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
