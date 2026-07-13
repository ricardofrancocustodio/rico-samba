'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { socialLinks, hasLink, whatsappLink } from '@/data/links';
import { showFormatIds } from '@/data/epk';
import { EmailIcon, WhatsappIcon, ArrowRightIcon } from '@/components/icons';

const eventTypeKeys = [
  'show',
  'corporate',
  'wedding',
  'bar',
  'cultural',
  'press',
  'other',
] as const;

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-creme placeholder:text-creme/40 transition-colors focus:border-dourado/60 focus:outline-none focus:ring-1 focus:ring-dourado/40';

const labelClass = 'mb-1.5 block text-xs font-medium text-creme/60';

export function ProContactForm() {
  const t = useTranslations('proForm');
  const tf = useTranslations('epk.showFormats');

  const [eventType, setEventType] = useState<string>(eventTypeKeys[0]);
  const [formatId, setFormatId] = useState<string>(showFormatIds[0]);
  const wa = whatsappLink(t('whatsappMessage'));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const eventTypeLabel = t(`eventTypes.${eventType}`);
    const formatLabel = tf(`${formatId}.title`);

    const body = [
      `${t('mailName')}: ${get('name')}`,
      `${t('mailCompany')}: ${get('company')}`,
      `${t('mailCity')}: ${get('city')}`,
      get('date') ? `${t('mailDate')}: ${get('date')}` : null,
      `${t('mailEventType')}: ${eventTypeLabel}`,
      `${t('mailFormat')}: ${formatLabel}`,
      '',
      get('message'),
    ]
      .filter(Boolean)
      .join('\n');

    const to = hasLink(socialLinks.emailPro)
      ? socialLinks.emailPro
      : socialLinks.email;

    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      `${t('mailSubjectPrefix')} ${eventTypeLabel} — ${get('name')}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
      <div>
        <h3 className="font-display text-2xl font-semibold text-creme">
          {t('heading')}
        </h3>
        <p className="mt-3 max-w-md text-creme/70">
          {t('subtitle')}
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
              <span className="font-medium">{t('whatsappLabel')}</span>
            </a>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pro-name" className={labelClass}>{t('name')}</label>
            <input id="pro-name" name="name" required autoComplete="name" className={inputClass} placeholder={t('namePlaceholder')} />
          </div>
          <div>
            <label htmlFor="pro-company" className={labelClass}>{t('company')}</label>
            <input id="pro-company" name="company" className={inputClass} placeholder={t('companyPlaceholder')} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pro-city" className={labelClass}>{t('city')}</label>
            <input id="pro-city" name="city" required className={inputClass} placeholder={t('cityPlaceholder')} />
          </div>
          <div>
            <label htmlFor="pro-date" className={labelClass}>
              {t('date')} <span className="text-creme/40">{t('optional')}</span>
            </label>
            <input id="pro-date" name="date" type="date" className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pro-type" className={labelClass}>{t('eventType')}</label>
            <select
              id="pro-type"
              name="type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className={`${inputClass} appearance-none`}
            >
              {eventTypeKeys.map((key) => (
                <option key={key} value={key} className="bg-grafite text-creme">
                  {t(`eventTypes.${key}`)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pro-format" className={labelClass}>{t('format')}</label>
            <select
              id="pro-format"
              name="format"
              value={formatId}
              onChange={(e) => setFormatId(e.target.value)}
              className={`${inputClass} appearance-none`}
            >
              {showFormatIds.map((id) => (
                <option key={id} value={id} className="bg-grafite text-creme">
                  {tf(`${id}.title`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="pro-message" className={labelClass}>{t('message')}</label>
          <textarea
            id="pro-message"
            name="message"
            required
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder={t('messagePlaceholder')}
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          {t('submit')}
          <ArrowRightIcon className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-creme/40">
          {t('note')}
        </p>
      </form>
    </div>
  );
}
