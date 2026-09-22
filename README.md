# ZOGBHI Massoterapia & Bem-Estar — Site institucional

Site estático, responsivo e mobile-first para a clínica de massoterapia
ZOGBHI, construído em HTML, CSS e JavaScript puros (sem frameworks e sem
build), pronto para publicação no GitHub Pages.

## Estrutura

```
zogbhi-massoterapia/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/                  (placeholders — ver docs/PROMPTS-IMAGENS.md)
└── docs/
    └── PROMPTS-IMAGENS.md
```

## Antes de publicar

1. **Imagens**: substitua os arquivos em `img/` (atualmente placeholders
   em tons da marca) pelas fotos finais. Os prompts detalhados para gerar
   cada imagem por IA estão em `docs/PROMPTS-IMAGENS.md`.
2. **Contato**: troque o número de WhatsApp de exemplo (`55000000000`) nos
   três pontos em que aparece em `index.html` (CTA final, rodapé e botão
   flutuante) pelo número real, no formato `55DDDXXXXXXXXX`.
3. **E-mail e redes sociais**: atualize `contato@zogbhi.com.br` e os links
   de Instagram/Facebook no rodapé.
4. **Textos**: os depoimentos, a bio de Othoniel e os pacotes são textos
   de exemplo — ajuste conforme a realidade do negócio.

## Publicar no GitHub Pages

1. Crie um repositório (ex.: `zogbhi-massoterapia`) e envie todos os
   arquivos desta pasta para a raiz do repositório.
2. No GitHub, vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/root`.
4. Salve — o site ficará disponível em
   `https://<seu-usuario>.github.io/zogbhi-massoterapia/`.

## Funcionalidades incluídas

- Header fixo com efeito glassmorphism ao rolar a página
- Menu mobile em hambúrguer com painel lateral
- Hero em tela cheia com overlay e animação de entrada
- Cards de serviços com hover elegante
- Pacotes com destaque visual para o plano premium
- Timeline "Como Funciona" com 4 etapas
- Seção de benefícios em lista destacada
- Slider de depoimentos (setas, indicadores e swipe no mobile)
- Botão flutuante de WhatsApp
- Rolagem suave, lazy loading de imagens e animações ao rolar a página
- Marcação semântica, `alt` descritivo em todas as imagens e foco visível
  para acessibilidade
- Meta tags básicas de SEO e Open Graph
