import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { ArrowRightIcon, DownloadIcon } from '@/components/icons';

export function AgendaSection() {
  return (
    <section id="agenda" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="card-surface relative overflow-hidden px-8 py-14 text-center sm:px-14">
            <div className="absolute inset-0 -z-10 bg-radial-warm" />
            <p className="section-label justify-center">Agenda</p>
            <h2 className="heading-2">Shows e apresentações</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-creme/70">
              Em breve, datas e apresentações de Rico Samba. Contratantes, produtores e imprensa
              encontram materiais oficiais, formatos de show e rider técnico no press kit.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/epk" className="btn-primary">
                <DownloadIcon className="h-4 w-4" />
                EPK / Contrate Rico Samba
              </Link>
              <a href="#contato" className="btn-secondary">
                Fazer um convite
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

