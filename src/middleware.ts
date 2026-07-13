import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Aplica a todas as rotas exceto APIs, internos do Next e arquivos estáticos.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
