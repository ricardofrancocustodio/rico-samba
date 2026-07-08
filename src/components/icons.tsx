/**
 * Ícones SVG inline (sem dependências externas).
 * Todos herdam a cor via `currentColor` e aceitam className.
 */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function SpotifyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0Zm5.5 17.3a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.35.22.46.68.25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 1 1-.54-1.8c4.37-1.32 9.79-.68 13.49 1.6.44.27.58.85.31 1.29Zm.13-3.4C15.73 8.34 9.1 8.12 5.33 9.27a1.12 1.12 0 1 1-.65-2.15c4.33-1.31 11.65-1.06 16.25 1.67a1.12 1.12 0 1 1-1.15 1.93l-.05-.03Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.38.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3 3 0 0 0 2.12-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.8 12l-6.2 3.57Z" />
    </svg>
  );
}

export function YoutubeMusicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm0 19.5A7.5 7.5 0 1 1 19.5 12 7.51 7.51 0 0 1 12 19.5Zm-2.25-11.4 6 3.9-6 3.9V8.1Z" />
    </svg>
  );
}

export function AppleMusicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.99 6.12c0-.5-.05-1-.14-1.49a4.9 4.9 0 0 0-.46-1.4 4.7 4.7 0 0 0-2.06-2.05 4.9 4.9 0 0 0-1.4-.46c-.5-.09-1-.13-1.5-.14H5.57c-.5.01-1 .05-1.49.14a4.9 4.9 0 0 0-1.4.46A4.7 4.7 0 0 0 .61 3.23a4.9 4.9 0 0 0-.46 1.4c-.09.5-.14 1-.14 1.49L0 6.9v10.2l.01.78c0 .5.05 1 .14 1.49.09.48.24.95.46 1.4a4.7 4.7 0 0 0 2.06 2.05c.45.22.92.37 1.4.46.5.09 1 .13 1.49.14h12.87c.5-.01 1-.05 1.5-.14a4.9 4.9 0 0 0 1.4-.46 4.7 4.7 0 0 0 2.05-2.05c.22-.45.37-.92.46-1.4.09-.5.14-1 .14-1.49V6.9l-.01-.78ZM17.4 10.9v5.42a2 2 0 0 1-.36 1.22 2.15 2.15 0 0 1-1.53.86l-.5.06c-.9.06-1.6-.55-1.66-1.42-.06-.86.55-1.55 1.44-1.68l.87-.13c.24-.04.32-.14.32-.38V9.03c0-.35-.13-.44-.47-.37l-4.7.95c-.3.06-.4.18-.4.5v7.5a2 2 0 0 1-.35 1.2 2.16 2.16 0 0 1-1.55.87l-.5.06c-.9.06-1.6-.55-1.66-1.42-.06-.86.55-1.56 1.44-1.68l.88-.13c.24-.04.32-.14.32-.38V8.06c0-.6.3-.93.87-1.05l5.72-1.16c.6-.12 1.03.2 1.03.83l.02 4.22Z" />
    </svg>
  );
}

export function DeezerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.8 4.35h5.2v3.02h-5.2V4.35Zm0 4.06h5.2v3.02h-5.2V8.41Zm0 4.06h5.2v3.02h-5.2v-3.02Zm-6.28 0h5.2v3.02h-5.2v-3.02Zm0 4.06h5.2v3.02h-5.2v-3.02Zm6.28 0h5.2v3.02h-5.2v-3.02ZM6.24 12.47h5.2v3.02h-5.2v-3.02Zm0 4.06h5.2v3.02h-5.2v-3.02ZM0 16.53h5.2v3.02H0v-3.02Zm12.52 0h5.2v3.02h-5.2v-3.02Z" />
    </svg>
  );
}

export function AmazonMusicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm-1.6 6.9c.86 0 1.55.7 1.55 1.55v6.9a1.55 1.55 0 1 1-3.1 0V8.45c0-.85.7-1.55 1.55-1.55Zm4.3 2.1c.85 0 1.55.7 1.55 1.55v2.9a1.55 1.55 0 1 1-3.1 0v-2.9c0-.85.7-1.55 1.55-1.55ZM6.1 10.55c.85 0 1.55.7 1.55 1.55v.6a1.55 1.55 0 1 1-3.1 0v-.6c0-.85.7-1.55 1.55-1.55Zm11.7 5.62c.32.26.36.7.05 1a8.2 8.2 0 0 1-5.35 1.93 8.3 8.3 0 0 1-5.32-1.92c-.16-.14-.02-.33.18-.22a11.3 11.3 0 0 0 5.16 1.24 11.5 11.5 0 0 0 4.28-.85c.35-.14.68.23.34.55l.66.66-.66-.66.66.66Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.6-.07-4.74-.07Zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92Zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08Zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0Z" />
    </svg>
  );
}

export function TiktokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.68a2.58 2.58 0 0 1-2.58 2.5 2.58 2.58 0 1 1 .74-5.05v-3.3a5.86 5.86 0 0 0-.74-.05A5.86 5.86 0 1 0 15.63 15.7V9.35a7.46 7.46 0 0 0 4.37 1.4V7.55a4.28 4.28 0 0 1-3.4-1.73Z" />
    </svg>
  );
}

export function KwaiIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm4.9 12.86-4.62 3.2a1.04 1.04 0 0 1-1.63-.86V8.8a1.04 1.04 0 0 1 1.63-.86l4.62 3.2a1.04 1.04 0 0 1 0 1.72Z" />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8a8.1 8.1 0 0 1 5.76 2.38 8.06 8.06 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.14 8.12a8.14 8.14 0 0 1-4.14-1.13l-.3-.18-3.11.82.83-3.04-.2-.31a8.05 8.05 0 0 1-1.24-4.28c0-4.48 3.65-8.13 8.16-8.13Zm-4.6 4.35c-.22 0-.57.08-.87.4-.3.33-1.14 1.11-1.14 2.71s1.17 3.15 1.33 3.37c.16.21 2.27 3.47 5.6 4.73.78.3 1.39.48 1.86.61.78.25 1.5.21 2.06.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.42.19-1.56-.08-.13-.3-.21-.63-.37-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.21-.38.24-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.72-1.77-1-2.42-.26-.63-.53-.55-.72-.55l-.61-.01Z" />
    </svg>
  );
}

export function PalcoMp3Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a1 1 0 0 1 1 1v9.55a4 4 0 1 1-2-3.45V3a1 1 0 0 1 1-1Zm5.5 1.2a1 1 0 0 1 1.4.2A9.96 9.96 0 0 1 21 10.5a1 1 0 1 1-2 0 7.96 7.96 0 0 0-1.68-4.9 1 1 0 0 1 .18-1.4Zm-1.9 2.6a1 1 0 0 1 1.38.3A6.47 6.47 0 0 1 18 10.5a1 1 0 1 1-2 0 4.47 4.47 0 0 0-.7-2.42 1 1 0 0 1 .3-1.38Z" />
    </svg>
  );
}

export function LetrasIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 3h9l5 5v13H5z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 12h7M8.5 15h7M8.5 18h4" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
