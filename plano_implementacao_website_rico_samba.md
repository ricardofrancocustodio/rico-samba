# Plano de Implementação — Website Oficial Rico Samba

## 1. Objetivo do projeto

Criar um website profissional para o artista **Rico Samba**, com foco em divulgação musical, fortalecimento de marca artística, centralização dos links oficiais e apoio às campanhas de lançamento das músicas e do futuro disco **Jeito de Sambar**.

O site deve funcionar como a “casa oficial” do projeto, complementando Spotify, YouTube, TikTok, Kwai, Instagram e demais plataformas. Diferente das redes sociais, o site deve ser um espaço controlado pelo artista, com identidade visual própria, narrativa clara e chamadas para ouvir, assistir, seguir e compartilhar.

## 2. Identidade artística

### Nome artístico

**Rico Samba**

### Estilo musical

Samba autoral com mistura de:

- samba-bossa;
- pagode moderno;
- MPB brasileira;
- elementos de choro;
- influências contemporâneas;
- clima de roda, afeto, saudade, relacionamento e cotidiano.

### Posicionamento

Rico Samba é um projeto de música brasileira autoral que mistura romantismo, samba, bossa, choro e pagode moderno. As letras falam de amor, saudade, término, desejo, reconciliação, orgulho, brigas e recomeço.

O site deve transmitir:

- brasilidade;
- calor humano;
- música de verdade;
- romantismo adulto;
- samba moderno;
- elegância sem parecer artificial;
- proximidade com o público.

## 3. Público-alvo

O site deve conversar com pessoas que gostam de:

- samba e pagode romântico;
- MPB com identidade brasileira;
- músicas sobre relacionamento;
- letras de amor, saudade e separação;
- vídeos de letra/lyric videos;
- conteúdo emocional para Shorts, TikTok, Reels e Kwai.

Também deve atender:

- curadores de playlists;
- contratantes;
- produtores musicais;
- imprensa/local media;
- pessoas que chegam por campanhas de tráfego pago ou redes sociais.

## 4. Tom visual e emocional

A estética deve ser profissional, romântica e brasileira, evitando aparência genérica ou artificial demais.

### Direção visual sugerida

- Fundo escuro elegante;
- tons quentes: dourado, âmbar, vinho, marrom, cobre;
- detalhes em verde escuro ou vermelho fechado, se fizer sentido com a identidade do samba;
- textura sutil de papel, madeira, palco, parede antiga ou luz de boteco elegante;
- elementos musicais discretos: violão nylon, pandeiro, trombone, cavaquinho, microfone;
- fotografias/capas com clima noturno, roda, varanda, luz quente e cidade ao fundo.

### Evitar

- excesso de branco;
- visual muito carnavalesco;
- caricatura de samba;
- montagem artificial;
- mockups exagerados;
- fontes difíceis de ler;
- aparência de template genérico;
- excesso de elementos flutuando.

## 5. Estrutura geral do website

O website deve ser uma landing page completa, podendo evoluir para múltiplas páginas no futuro.

### Páginas/rotas sugeridas

Versão inicial:

- `/` — Home completa
- `/musicas` — Catálogo/discografia
- `/videos` — YouTube, lyric videos e shorts destacados
- `/sobre` — Bio artística
- `/contato` — Contato profissional

Versão MVP aceitável:

- Página única com âncoras:
  - `#inicio`
  - `#lancamentos`
  - `#videos`
  - `#sobre`
  - `#agenda`
  - `#contato`

## 6. Seções detalhadas da Home

---

# 6.1 Header / Navegação

## Objetivo

Permitir acesso rápido às seções principais e reforçar a marca Rico Samba.

## Elementos

- Logo Rico Samba, preferencialmente com versão em pandeiro ou tipografia própria.
- Menu:
  - Início
  - Lançamentos
  - Vídeos
  - Sobre
  - Contato
- Botão destacado:
  - “Ouvir agora”

## Comportamento

- Header fixo ou semi-fixo no topo.
- Em mobile, usar menu hamburguer.
- O botão “Ouvir agora” deve levar para uma seção de links ou para link principal agregador.

## Estilo

- Fundo escuro levemente translúcido.
- Logo em dourado/verde/vinho, sem branco puro.
- Navegação discreta e elegante.

---

# 6.2 Hero principal

## Objetivo

Apresentar imediatamente quem é Rico Samba, o estilo musical e o lançamento atual.

## Conteúdo sugerido

Título:

> Rico Samba

Subtítulo:

> Samba, bossa, choro e pagode moderno em canções sobre amor, saudade e recomeço.

Chamada:

> Novo projeto: **Jeito de Sambar**

Botões:

- “Ouvir nas plataformas”
- “Assistir no YouTube”
- “Conhecer as músicas”

## Visual

Usar uma imagem artística de fundo ou lateral com Rico Samba em clima musical, preferencialmente:

- segurando violão;
- em ambiente intimista;
- luz quente;
- fundo com cidade, roda de samba ou palco pequeno;
- sem parecer montagem.

A imagem não precisa colocar o artista em evidência exagerada. O foco deve ser o clima musical e a identidade.

## Requisitos de layout

Desktop:

- Texto à esquerda e imagem à direita, ou texto sobre fundo com overlay.

Mobile:

- Texto acima;
- imagem adaptada;
- botões empilhados.

---

# 6.3 Seção “Ouça agora”

## Objetivo

Centralizar os links de streaming.

## Plataformas esperadas

- Spotify
- YouTube Music
- YouTube
- Apple Music/iTunes
- Deezer
- Amazon Music
- TikTok/Instagram Audio, quando disponível

## Conteúdo

Título:

> Ouça Rico Samba

Texto:

> Escolha sua plataforma preferida e acompanhe os lançamentos.

Cards ou botões:

- Spotify
- YouTube
- Deezer
- Apple Music
- Amazon Music
- TikTok
- Instagram

## Observação técnica

Os links podem ser placeholders inicialmente, por exemplo:

```md
# TODO: inserir link oficial após liberação nas plataformas
```

O site deve ser fácil de atualizar quando os links definitivos estiverem disponíveis.

---

# 6.4 Lançamentos / Discografia

## Objetivo

Mostrar as músicas lançadas ou em campanha.

## Músicas já conversadas

- Você
- Doce Amor
- Armadilhas do Amor
- Mais Você
- Amor e Razão
- Fala na Cara
- Brigas
- Saudade

## Futuro projeto

- Jeito de Sambar — disco/álbum planejado com 12 a 15 músicas.

## Layout recomendado

Grid de cards com:

- capa da música;
- título;
- breve descrição emocional;
- botões:
  - Ouvir
  - Ver lyric video
  - Compartilhar

## Exemplo de descrição por música

### Você

Canção romântica e afetiva sobre presença, memória e desejo.

### Doce Amor

Samba romântico de clima íntimo, com sentimento de paixão e lembrança.

### Armadilhas do Amor

Música sobre os conflitos, ilusões e jogos emocionais de uma relação.

### Mais Você

Canção sobre escolha, dependência afetiva e medo de perder quem se ama.

### Amor e Razão

Faixa sobre o embate entre sentimento e lucidez.

### Fala na Cara

Samba com atitude sobre sinceridade, coragem e fim de joguinhos emocionais.

### Brigas

Música sobre desgaste, orgulho e conflitos dentro de uma relação.

### Saudade

Canção sobre aceitar o fim, sentir falta e decidir não procurar mais.

## Requisitos técnicos

Criar os dados em arquivo estruturado, por exemplo:

```ts
const songs = [
  {
    title: 'Saudade',
    slug: 'saudade',
    description: 'Canção sobre aceitar o fim, sentir falta e decidir não procurar mais.',
    cover: '/images/covers/saudade.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  }
]
```

Isso facilita manutenção futura.

---

# 6.5 Seção “Novo projeto: Jeito de Sambar”

## Objetivo

Apresentar o conceito do disco/projeto.

## Conteúdo sugerido

Título:

> Jeito de Sambar

Texto:

> Um projeto autoral de Rico Samba que reúne samba, bossa, pagode moderno, choro e MPB em músicas sobre amor, saudade, encontros, despedidas e recomeços.

Texto complementar:

> Cada faixa revela um pedaço desse universo: a dor de quem sente falta, a coragem de dizer adeus, o desejo de ficar e a verdade de quem canta o que vive.

## Elementos visuais

- Mockup discreto do álbum;
- colagem de capas;
- pandeiro/violão/trombone;
- fundo escuro com luz quente.

## CTA

- “Acompanhar lançamentos”
- “Inscrever-se no YouTube”

---

# 6.6 Vídeos / Lyric Videos

## Objetivo

Destacar o canal do YouTube e os lyric videos.

## Conteúdo

Título:

> Vídeos e letras

Texto:

> Assista aos lyric videos, versões especiais e bastidores das músicas.

## Layout

- Vídeo principal em destaque;
- grid com vídeos secundários;
- botão para canal no YouTube.

## Vídeos previstos

- Lyric video — Você
- Lyric video — Doce Amor
- Lyric video — Armadilhas do Amor
- Lyric video — Mais Você
- Lyric video — Amor e Razão
- Lyric video — Fala na Cara
- Lyric video — Brigas
- Lyric video — Saudade

## Requisitos técnicos

- Usar embed responsivo do YouTube.
- Não carregar todos os iframes imediatamente, para melhorar performance.
- Pode usar thumbnail clicável que abre o embed/modal.

---

# 6.7 Seção “Letras que viram histórias”

## Objetivo

Conectar com a estratégia de redes sociais baseada em relacionamento, frases fortes e trechos de música.

## Conteúdo sugerido

Título:

> Letras que viram histórias

Texto:

> As músicas de Rico Samba falam de sentimentos que muita gente vive: saudade, briga, amor, orgulho, despedida e vontade de recomeçar.

## Blocos de frases

Exibir frases curtas inspiradas nas letras, sem necessariamente colocar músicas inteiras.

Exemplos:

> “Eu vou morrer de saudade, mas não vou mais te procurar.”

> “Eu sou mais você.”

> “Fala na cara.”

> “Amor e razão nem sempre caminham juntos.”

## Uso

Essa seção deve funcionar como ponte entre o conteúdo viral das redes e o catálogo musical.

---

# 6.8 Sobre / Bio artística

## Objetivo

Apresentar Rico Samba de forma humana, artística e profissional.

## Texto base

> Rico Samba é um projeto de música brasileira autoral que mistura samba, bossa, choro, pagode moderno e MPB em canções sobre amor, saudade, encontros e despedidas.
>
> Com letras diretas e sentimentais, Rico Samba transforma histórias de relacionamento em música para cantar, lembrar e compartilhar.
>
> O projeto nasce da vontade de criar um samba atual, romântico e brasileiro, com violão, percussão, melodias marcantes e uma verdade simples: todo mundo tem um jeito próprio de sambar.

## Variação mais curta

> Rico Samba mistura samba, bossa, choro, pagode moderno e MPB em músicas sobre amor, saudade e recomeço. Um som brasileiro, romântico e autoral, feito para quem vive a música como memória, roda e sentimento.

## Elementos visuais

- Foto do artista em ambiente musical;
- violão;
- pandeiro;
- luz quente;
- sem exagerar no retoque.

---

# 6.9 Agenda / Shows

## Objetivo

Preparar o site para futuro uso profissional, mesmo que ainda não existam shows marcados.

## Estado inicial

Se ainda não houver agenda, mostrar:

> Em breve, datas e apresentações de Rico Samba.

CTA:

> Para convites, eventos e parcerias, entre em contato.

## Futuro

Cards de agenda com:

- data;
- cidade;
- local;
- tipo de evento;
- botão “Ingressos” ou “Mais informações”.

---

# 6.10 Contato profissional

## Objetivo

Permitir contato para shows, parcerias, imprensa e produção.

## Campos de formulário

- Nome
- E-mail
- WhatsApp/opcional
- Assunto
- Mensagem

## Tipos de assunto

- Show/evento
- Parceria
- Imprensa
- Playlist/curadoria
- Outro

## Informações adicionais

- E-mail profissional, se houver.
- Link para Instagram.
- Link para YouTube.
- Link para TikTok.

## Texto sugerido

> Para shows, parcerias, imprensa ou curadoria, envie uma mensagem.

---

# 6.11 Rodapé

## Elementos

- Logo Rico Samba;
- frase curta;
- links sociais;
- links das plataformas;
- copyright.

Texto:

> Rico Samba — música brasileira autoral.

Copyright:

> © 2026 Rico Samba. Todos os direitos reservados.

## Links

- YouTube
- Spotify
- Instagram
- TikTok
- Kwai
- Deezer
- Apple Music

---

# 7. Estratégia de conteúdo integrada ao site

O site deve apoiar a estratégia de redes sociais.

## Estratégia atual

O artista está publicando cerca de 2 vídeos por dia em:

- YouTube Shorts;
- TikTok;
- Kwai.

Formato dos vídeos:

- gancho forte nos primeiros 3 a 5 segundos;
- tema de relacionamento;
- tela com trecho de letra;
- chamada para música.

## Como o site deve ajudar

- Centralizar todos os links oficiais.
- Servir como destino de campanhas pagas.
- Reforçar a marca Rico Samba.
- Organizar lançamentos por música.
- Permitir que o público encontre lyric videos e plataformas.
- Dar credibilidade para curadores, contratantes e público novo.

## CTA principal por fase

### Antes do lançamento

- “Acompanhe o lançamento”
- “Inscreva-se no YouTube”
- “Siga Rico Samba”

### No lançamento

- “Ouça agora”
- “Assista ao lyric video”
- “Compartilhe essa música”

### Depois do lançamento

- “Conheça outras músicas”
- “Veja os vídeos”
- “Adicione à sua playlist”

---

# 8. Requisitos funcionais

## 8.1 Links editáveis

Todos os links de plataformas devem estar centralizados em um arquivo de configuração para fácil alteração.

Exemplo:

```ts
export const socialLinks = {
  spotify: '',
  youtube: '',
  instagram: '',
  tiktok: '',
  kwai: '',
  deezer: '',
  appleMusic: '',
}
```

## 8.2 Catálogo editável

As músicas devem vir de uma lista estruturada, não hardcoded diretamente em vários componentes.

## 8.3 Responsividade

O site deve funcionar perfeitamente em:

- mobile;
- tablet;
- desktop.

Priorizar mobile, pois o tráfego virá de redes sociais.

## 8.4 Performance

- Imagens otimizadas.
- Lazy loading para vídeos.
- Evitar scripts desnecessários.
- Usar formatos modernos como WebP quando possível.

## 8.5 SEO

Configurar:

- title;
- meta description;
- Open Graph;
- Twitter/X cards;
- favicon;
- sitemap;
- robots.txt.

## 8.6 Compartilhamento

Ao compartilhar o site no WhatsApp, Facebook, X ou LinkedIn, deve aparecer:

- nome Rico Samba;
- imagem profissional;
- descrição curta;
- link correto.

---

# 9. SEO recomendado

## Title principal

> Rico Samba — Samba, Bossa, Choro e Pagode Moderno

## Meta description

> Site oficial de Rico Samba. Samba autoral com influências de bossa, choro, pagode moderno e MPB. Ouça músicas, assista lyric videos e acompanhe o projeto Jeito de Sambar.

## Palavras-chave de contexto

- Rico Samba
- samba autoral
- samba romântico
- pagode moderno
- samba bossa
- música brasileira
- choro moderno
- MPB brasileira
- Jeito de Sambar
- lyric video samba

## Open Graph

- `og:title`: Rico Samba — Música Brasileira Autoral
- `og:description`: Samba, bossa, choro e pagode moderno em canções sobre amor, saudade e recomeço.
- `og:image`: imagem horizontal profissional, 1200x630.
- `og:type`: website.

---

# 10. Design system

## Cores sugeridas

### Primárias

- Preto grafite: `#0E0B0A`
- Dourado quente: `#C89A3C`
- Vinho escuro: `#5A1018`
- Verde samba escuro: `#0E3B24`

### Secundárias

- Cobre: `#A85F2A`
- Âmbar: `#E0A64B`
- Creme escuro: `#D8C39A`
- Marrom madeira: `#3A2418`

### Evitar

- Branco puro como cor dominante.
- Azul muito frio como cor principal, exceto em detalhes ou capas específicas.

## Tipografia

Usar combinação de:

- fonte serifada elegante para títulos;
- sans-serif limpa para textos;
- fonte script apenas em detalhes, nunca em blocos longos.

Sugestões Google Fonts:

- Títulos: Playfair Display, Cormorant Garamond, Libre Baskerville
- Texto: Inter, Lato, Montserrat, Source Sans 3
- Detalhes: Allura, Parisienne, Great Vibes — usar com moderação

## Botões

Primário:

- fundo dourado;
- texto escuro;
- bordas arredondadas;
- hover com brilho sutil.

Secundário:

- fundo transparente;
- borda dourada;
- texto dourado.

---

# 11. Assets necessários

## Logos

- Logo Rico Samba horizontal.
- Logo Rico Samba redondo dentro de pandeiro.
- Versão transparente.
- Versão monocromática escura.
- Favicon.

## Capas/músicas

Criar pasta:

```txt
/public/images/covers/
```

Arquivos sugeridos:

```txt
voce.jpg
mais-voce.jpg
doce-amor.jpg
armadilhas-do-amor.jpg
amor-e-razao.jpg
fala-na-cara.jpg
brigas.jpg
saudade.jpg
jeito-de-sambar.jpg
```

## Fotos gerais

```txt
/public/images/artist/
```

Arquivos sugeridos:

```txt
rico-samba-hero.jpg
rico-samba-sobre.jpg
rico-samba-violao.jpg
rico-samba-roda.jpg
```

## Imagens sociais

```txt
/public/images/social/
```

Arquivos sugeridos:

```txt
og-image.jpg
youtube-thumb-default.jpg
```

---

# 12. Estrutura técnica sugerida

## Stack recomendada

Opção recomendada:

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

Alternativa simples:

- React + Vite
- TypeScript
- Tailwind CSS
- Deploy na Vercel/Netlify

## Estrutura de pastas sugerida

```txt
src/
  app/
    page.tsx
    musicas/
      page.tsx
    videos/
      page.tsx
    sobre/
      page.tsx
    contato/
      page.tsx
  components/
    Header.tsx
    Hero.tsx
    ListenNow.tsx
    ReleasesGrid.tsx
    SongCard.tsx
    VideoSection.tsx
    AboutSection.tsx
    ContactSection.tsx
    Footer.tsx
  data/
    songs.ts
    videos.ts
    links.ts
  styles/
    globals.css
public/
  images/
    covers/
    artist/
    social/
```

---

# 13. Componentes detalhados

## Header.tsx

Responsável por:

- exibir logo;
- menu desktop;
- menu mobile;
- CTA “Ouvir agora”.

## Hero.tsx

Responsável por:

- apresentação principal;
- imagem de fundo ou imagem lateral;
- botões principais;
- chamada para o projeto Jeito de Sambar.

## ListenNow.tsx

Responsável por:

- exibir botões de plataformas;
- usar dados de `links.ts`;
- facilitar atualização posterior.

## ReleasesGrid.tsx

Responsável por:

- listar músicas;
- usar dados de `songs.ts`;
- exibir capa, título, descrição e botões.

## SongCard.tsx

Responsável por:

- renderizar cada música individualmente.

## VideoSection.tsx

Responsável por:

- exibir lyric videos;
- embeds ou thumbnails;
- botão para canal do YouTube.

## AboutSection.tsx

Responsável por:

- bio curta;
- imagem artística;
- identidade musical.

## ContactSection.tsx

Responsável por:

- formulário;
- links sociais;
- mensagem profissional.

## Footer.tsx

Responsável por:

- links finais;
- copyright;
- redes sociais.

---

# 14. Conteúdo inicial para implementação

## Hero

```txt
Rico Samba
Samba, bossa, choro e pagode moderno em canções sobre amor, saudade e recomeço.
Novo projeto: Jeito de Sambar.
```

## Sobre

```txt
Rico Samba mistura samba, bossa, choro, pagode moderno e MPB em músicas sobre amor, saudade e recomeço. Um som brasileiro, romântico e autoral, feito para quem vive a música como memória, roda e sentimento.
```

## Projeto

```txt
Jeito de Sambar é um projeto autoral que reúne músicas sobre encontros, despedidas, brigas, saudade, desejo e amor. Cada faixa revela um pedaço de um samba moderno, íntimo e brasileiro.
```

## Contato

```txt
Para shows, parcerias, imprensa, playlists e projetos especiais, envie uma mensagem.
```

---

# 15. Dados iniciais das músicas

```ts
export const songs = [
  {
    title: 'Você',
    slug: 'voce',
    description: 'Canção romântica e afetiva sobre presença, memória e desejo.',
    cover: '/images/covers/voce.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Doce Amor',
    slug: 'doce-amor',
    description: 'Samba romântico de clima íntimo, com sentimento de paixão e lembrança.',
    cover: '/images/covers/doce-amor.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Armadilhas do Amor',
    slug: 'armadilhas-do-amor',
    description: 'Música sobre os conflitos, ilusões e jogos emocionais de uma relação.',
    cover: '/images/covers/armadilhas-do-amor.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Mais Você',
    slug: 'mais-voce',
    description: 'Canção sobre escolha, dependência afetiva e medo de perder quem se ama.',
    cover: '/images/covers/mais-voce.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Amor e Razão',
    slug: 'amor-e-razao',
    description: 'Faixa sobre o embate entre sentimento e lucidez.',
    cover: '/images/covers/amor-e-razao.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Fala na Cara',
    slug: 'fala-na-cara',
    description: 'Samba com atitude sobre sinceridade, coragem e fim de joguinhos emocionais.',
    cover: '/images/covers/fala-na-cara.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Brigas',
    slug: 'brigas',
    description: 'Música sobre desgaste, orgulho e conflitos dentro de uma relação.',
    cover: '/images/covers/brigas.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
  {
    title: 'Saudade',
    slug: 'saudade',
    description: 'Canção sobre aceitar o fim, sentir falta e decidir não procurar mais.',
    cover: '/images/covers/saudade.jpg',
    spotifyUrl: '',
    youtubeUrl: '',
    lyricVideoUrl: '',
  },
]
```

---

# 16. Integrações futuras

## Analytics

Instalar:

- Google Analytics ou Plausible;
- Meta Pixel, se for rodar tráfego para Instagram/Facebook;
- TikTok Pixel, se for rodar tráfego para TikTok;
- Google Search Console.

## Mailing list

Adicionar captura simples:

> Receba novos lançamentos de Rico Samba.

Campos:

- nome;
- e-mail.

Pode integrar futuramente com:

- Mailchimp;
- Brevo;
- ConvertKit;
- Supabase;
- Google Sheets via webhook.

## Link de pré-save

Adicionar seção temporária para pré-save quando houver próximos lançamentos.

---

# 17. Critérios de aceite

O website será considerado pronto quando:

- estiver responsivo em mobile e desktop;
- tiver identidade visual consistente com Rico Samba;
- tiver seção de lançamentos com as músicas cadastradas;
- tiver botões de plataformas configuráveis;
- tiver seção de vídeos/lyric videos;
- tiver bio artística;
- tiver contato profissional;
- tiver SEO básico configurado;
- tiver Open Graph funcionando;
- tiver imagens otimizadas;
- carregar rápido;
- não parecer template genérico;
- for fácil atualizar links, capas e vídeos.

---

# 18. Roadmap de implementação

## Fase 1 — MVP

- Criar projeto Next.js/React.
- Configurar Tailwind.
- Criar layout base.
- Implementar Header, Hero, Ouça Agora, Lançamentos, Sobre, Contato e Footer.
- Inserir dados iniciais das músicas.
- Inserir imagens temporárias.
- Publicar na Vercel.

## Fase 2 — Profissionalização

- Adicionar página de músicas.
- Adicionar página de vídeos.
- Melhorar SEO e Open Graph.
- Adicionar analytics.
- Melhorar performance de imagens.
- Adicionar formulário funcional.

## Fase 3 — Crescimento

- Adicionar blog/notícias.
- Adicionar bastidores.
- Adicionar press kit.
- Adicionar agenda.
- Adicionar mailing list.
- Adicionar seção de playlists.

---

# 19. Press kit futuro

Criar futuramente uma seção `/press-kit` com:

- bio curta;
- bio longa;
- fotos oficiais;
- logo;
- capas;
- links oficiais;
- contato;
- release do projeto Jeito de Sambar.

## Bio curta para press kit

```txt
Rico Samba é um projeto de música brasileira autoral que mistura samba, bossa, choro, pagode moderno e MPB em canções sobre amor, saudade e recomeço.
```

## Release curto

```txt
Com o projeto Jeito de Sambar, Rico Samba apresenta um repertório autoral que une romantismo, brasilidade e sonoridade contemporânea. As músicas falam de relacionamentos, despedidas, brigas, saudade e desejo, sempre com o balanço do samba como ponto de partida.
```

---

# 20. Observações finais para o agente implementador

- Priorizar mobile-first.
- Manter o site simples, bonito e direto.
- Não exagerar em animações.
- Usar movimento sutil apenas para dar elegância.
- Evitar aparência de IA ou montagem artificial.
- Criar estrutura fácil de manter.
- Todos os links devem ser editáveis.
- Todas as músicas devem vir de dados estruturados.
- O site deve passar credibilidade artística desde a primeira dobra.
- A estética deve ser romântica, brasileira e profissional.

---

# 21. Área profissional / EPK (implementado)

O site funciona como **hub oficial** de Rico Samba, dividido em duas camadas:

1. **Site para público** (`/`): home com apresentação, ouça agora, lançamentos, projeto Jeito de Sambar, vídeos, letras, sobre, agenda e contato.
2. **Área profissional / EPK** (`/epk`): materiais para contratantes, produtores e imprensa.

## 21.1 Rota e navegação

- Página dedicada em `/epk` (renderizada estaticamente).
- Item de menu **“EPK / Contrate”** no header e no rodapé.
- CTA para o EPK na seção de agenda da home.
- Navegação entre páginas usa `next/link`; âncoras da home usam o prefixo `/#secao` para funcionarem de qualquer página.

## 21.2 Seções da página `/epk`

- **Bio curta** e **bio completa**, cada uma com botão “Copiar”.
- **Presença digital**: grid com todas as plataformas (streaming, redes, Palco MP3 e Letras.mus.br).
- **Portfólio musical**: lista das músicas com links para Spotify, YouTube e lyric video.
- **Propostas de show**: Voz e Violão, Samba/Bossa/Pagode Moderno, Roda Rico Samba e Pocket Show.
- **Rider técnico** por formato + **mapa de palco** (SVG ilustrativo).
- **Fotos oficiais**: imagens horizontais, verticais e quadradas.
- **Releases**: artista, álbum *Jeito de Sambar*, single atual e versão curta — todos com “Copiar”.
- **Na mídia**: estado “clipping em construção”.
- **Downloads**: EPK em PDF, fotos, logo, rider e release (itens sem arquivo aparecem como “em breve”).
- **Contato profissional**: formulário dedicado (nome, empresa/evento, cidade, data, tipo de evento, formato desejado, mensagem) que abre o e-mail comercial, além de e-mail e WhatsApp.

## 21.3 Dados editáveis

- Textos, releases, formatos, riders, fotos e downloads centralizados em `src/data/epk.ts`.
- Links e contatos (incluindo `emailPro`, `whatsapp`, `palcoMp3`, `letrasMusBr`) em `src/data/links.ts`.
- Plataformas e ícones em `src/data/platforms.ts`.

## 21.4 Downloads oficiais

- Pasta `public/downloads/` com o logo em SVG já disponível.
- Demais arquivos (EPK PDF, fotos em alta, rider em PDF) são plugados preenchendo o campo `href` em `downloads` de `src/data/epk.ts`.

## 21.5 Roadmap da área profissional

- **Feito:** página `/epk` com bio, releases, formatos, rider, mapa de palco, presença digital, portfólio, downloads e contato profissional.
- **Próximos passos:** páginas individuais por música (`/musicas/[slug]`), página de letras com botão “Ver no Letras.mus.br”, seção `/imprensa` com clipping real e geração do EPK em PDF.


