'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/Reveal';
import { socialPlatforms } from '@/data/platforms';
import { socialLinks, safeLink, hasLink } from '@/data/links';
import { EmailIcon, ArrowRightIcon } from '@/components/icons';

const subjectKeys = ['show', 'partnership', 'press', 'playlist', 'other'] as const;

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-creme placeholder:text-creme/40 transition-colors focus:border-dourado/60 focus:outline-none focus:ring-1 focus:ring-dourado/40';

export function ContactSection() {
  const t = useTranslations('contact');
  const subjects = subjectKeys.map((key) => t(`subjects.${key}`));
  const [subject, setSubject] = useState(subjects[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const whatsapp = String(data.get('whatsapp') ?? '');
    const message = String(data.get('message') ?? '');

    const to = hasLink(socialLinks.email) ? socialLinks.email : '';
    const body = [
      `${t('mailName')}: ${name}`,
      `${t('mailEmail')}: ${email}`,
      whatsapp ? `${t('mailWhatsapp')}: ${whatsapp}` : null,
      `${t('mailSubject')}: ${subject}`,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      `[Rico Samba] ${subject} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <section id="contato" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="section-label">{t('label')}</p>
            <h2 className="heading-2">{t('title')}</h2>
            <p className="mt-4 max-w-md text-lg text-creme/70">
              {t('subtitle')}
            </p>

            <div className="mt-8 space-y-4">
              {hasLink(socialLinks.email) && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="group flex items-center gap-4 text-creme/80 transition-colors hover:text-dourado"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <EmailIcon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{socialLinks.email}</span>
                </a>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                {socialPlatforms.map((platform) => {
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
                      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-creme transition-all duration-300 ${
                        active
                          ? 'hover:-translate-y-1 hover:border-dourado/40 hover:text-dourado'
                          : 'cursor-default opacity-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-creme/60">
                    {t('name')}
                  </label>
                  <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder={t('namePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-creme/60">
                    {t('email')}
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder={t('emailPlaceholder')} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="whatsapp" className="mb-1.5 block text-xs font-medium text-creme/60">
                    {t('whatsapp')} <span className="text-creme/40">{t('optional')}</span>
                  </label>
                  <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" className={inputClass} placeholder={t('whatsappPlaceholder')} />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-creme/60">
                    {t('subject')}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    {subjects.map((option) => (
                      <option key={option} value={option} className="bg-grafite text-creme">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-creme/60">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
