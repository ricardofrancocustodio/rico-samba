'use client';

import { useState, type FormEvent } from 'react';
import { socialLinks, hasLink, whatsappLink } from '@/data/links';
import { showFormats } from '@/data/epk';
import { EmailIcon, WhatsappIcon, ArrowRightIcon } from '@/components/icons';

const eventTypes = [
  'Show / evento',
  'Evento corporativo',
  'Casamento / recepção',
  'Bar / restaurante',
  'Evento cultural',
  'Imprensa',
  'Outro',
];

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-creme placeholder:text-creme/40 transition-colors focus:border-dourado/60 focus:outline-none focus:ring-1 focus:ring-dourado/40';

const labelClass = 'mb-1.5 block text-xs font-medium text-creme/60';

export function ProContactForm() {
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [format, setFormat] = useState(showFormats[0].title);
  const wa = whatsappLink('Olá! Gostaria de falar sobre uma apresentação de Rico Samba.');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const body = [
      `Nome: ${get('name')}`,
      `Empresa / evento: ${get('company')}`,
      `Cidade: ${get('city')}`,
      get('date') ? `Data desejada: ${get('date')}` : null,
      `Tipo de evento: ${eventType}`,
      `Formato desejado: ${format}`,
      '',
      get('message'),
    ]
      .filter(Boolean)
      .join('\n');

    const to = hasLink(socialLinks.emailPro)
      ? socialLinks.emailPro
      : socialLinks.email;

    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      `[Contratação] ${eventType} — ${get('name')}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
      <div>
        <h3 className="font-display text-2xl font-semibold text-creme">
          Contratação e imprensa
        </h3>
        <p className="mt-3 max-w-md text-creme/70">
          Fale diretamente com a produção de Rico Samba para shows, eventos, parcerias e imprensa.
        </p>

        <div className="mt-6 space-y-3">
          {(hasLink(socialLinks.emailPro) || hasLink(socialLinks.email)) && (
            <a
              href={`mailto:${hasLink(socialLinks.emailPro) ? socialLinks.emailPro : socialLinks.email}`}
              className="group flex items-center gap-4 text-creme/80 transition-colors hover:text-dourado"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <EmailIcon className="h-5 w-5" />
              </span>
              <span className="font-medium">
                {hasLink(socialLinks.emailPro) ? socialLinks.emailPro : socialLinks.email}
              </span>
            </a>
          )}

          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-creme/80 transition-colors hover:text-dourado"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <WhatsappIcon className="h-5 w-5" />
              </span>
              <span className="font-medium">WhatsApp comercial</span>
            </a>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pro-name" className={labelClass}>Nome</label>
            <input id="pro-name" name="name" required autoComplete="name" className={inputClass} placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="pro-company" className={labelClass}>Empresa / evento</label>
            <input id="pro-company" name="company" className={inputClass} placeholder="Nome do evento ou empresa" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pro-city" className={labelClass}>Cidade</label>
            <input id="pro-city" name="city" required className={inputClass} placeholder="Cidade / estado" />
          </div>
          <div>
            <label htmlFor="pro-date" className={labelClass}>
              Data desejada <span className="text-creme/40">(opcional)</span>
            </label>
            <input id="pro-date" name="date" type="date" className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pro-type" className={labelClass}>Tipo de evento</label>
            <select
              id="pro-type"
              name="type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className={`${inputClass} appearance-none`}
            >
              {eventTypes.map((option) => (
                <option key={option} value={option} className="bg-grafite text-creme">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pro-format" className={labelClass}>Formato desejado</label>
            <select
              id="pro-format"
              name="format"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className={`${inputClass} appearance-none`}
            >
              {showFormats.map((option) => (
                <option key={option.title} value={option.title} className="bg-grafite text-creme">
                  {option.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="pro-message" className={labelClass}>Mensagem</label>
          <textarea
            id="pro-message"
            name="message"
            required
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Conte sobre o evento, público esperado, estrutura disponível..."
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Solicitar proposta
          <ArrowRightIcon className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-creme/40">
          Ao enviar, seu aplicativo de e-mail será aberto com a mensagem pronta.
        </p>
      </form>
    </div>
  );
}
