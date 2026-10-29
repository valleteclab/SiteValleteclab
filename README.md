# Site LJ Serviços

Landing page estática (HTML, CSS e JavaScript puros) para captação de clientes nos segmentos de
engenharia civil, usina solar, manutenção elétrica, fabricação, montagem e manutenção industrial
para o agronegócio.

Não precisa de build. Basta abrir `index.html` no navegador ou publicar a pasta em qualquer
hospedagem estática (GitHub Pages, Netlify, Vercel, Railway, Hostinger etc.).

## Estrutura

```
index.html          Página principal
css/style.css       Estilos
js/main.js          Dados de contato, menu, formulário e fallbacks de imagem
assets/img/         Fotos (veja abaixo)
```

## 1. Configurar contato (obrigatório)

Edite o bloco `CONFIG` no início de `js/main.js`:

```js
const CONFIG = {
  whatsappNumber: "5577998755764",     // DDI + DDD + número, só dígitos
  whatsappDisplay: "(77) 99875-5764",  // como aparece no site
  phone2Number: "5577998671802",       // telefone secundário
  owner: "Francisco Almir Vale de Araújo",
  address: "Rua Cleriston Andrade, 1189, Sala 210, Luís Eduardo Magalhães - BA",
  email: "loamesilva@valleteclab.com.br",
  region: "Atendemos todo o Brasil",
  ...
};
```

Todos os botões "WhatsApp" e o formulário de contato usam esse número. O formulário monta a
mensagem e abre o WhatsApp com ela pronta, sem precisar de servidor.

## 2. Fotos

As fotos já estão no site, otimizadas para web, nos caminhos abaixo. Os arquivos originais
(em alta resolução) ficam em `fotos-originais/`, `fotos-originais/lote2/` e `fotos-originais/lote3/`. Para trocar uma foto, basta substituir o arquivo
de mesmo nome (JPG, idealmente até 300 KB). Se uma foto for removida, o site mostra um espaço
reservado no lugar, sem quebrar o layout.

| Arquivo | Onde aparece | Sugestão |
|---|---|---|
| `assets/img/logo-lj.svg` | Cabeçalho e rodapé | Símbolo da marca em vetor. O nome é escrito em texto ao lado, em `index.html`. |
| `assets/img/hero.jpg` | Fundo da primeira dobra | Foto panorâmica de armazém, silos ou equipe em campo (horizontal, 1920px). |
| `assets/img/equipe.jpg` | Seção "Quem somos" | Equipe ou o líder técnico em campo (vertical ou quadrada). |
| `assets/img/servicos/montagem-silos.jpg` | Card do serviço | Silos, unidade armazenadora, montagem. |
| `assets/img/servicos/manutencao-industrial.jpg` | Card do serviço | Silos, elevadores, esteiras. |
| `assets/img/servicos/fabricacao-montagem.jpg` | Card do serviço | Solda, caldeiraria, montagem de estrutura. |
| `assets/img/servicos/manutencao-eletrica.jpg` | Card do serviço | Painéis elétricos. |
| `assets/img/servicos/usina-solar.jpg` | Card do serviço | Placas solares instaladas. |
| `assets/img/servicos/engenharia-civil.jpg` | Card do serviço | Base de silo, galpão, obra. |
| `assets/img/portfolio/01.jpg` a `13.jpg` | Galeria "Projetos realizados" | 13 fotos de trabalhos. As legendas estão em `index.html` e podem ser trocadas. |
| `assets/img/clientes/*.png` | Carrossel de clientes | Logos com fundo branco, cerca de 160px de altura. Os clientes sem logo aparecem em texto; para adicionar um logo, troque o item em `index.html`. |
| `assets/img/og-image.jpg` | Prévia ao compartilhar o link no WhatsApp/redes | 1200x630px. |

Para adicionar mais fotos na galeria, copie um bloco `<figure class="portfolio__item">` em `index.html`.

## 3. Publicar

Qualquer hospedagem estática funciona. No GitHub Pages: Settings > Pages > Branch `main` > pasta `/ (root)`.

### Railway / Docker

O repositório inclui um `Dockerfile` (servidor Caddy) e um `railway.json`. No Railway, basta criar um
serviço apontando para este repositório; a porta é lida da variável `PORT` automaticamente.

## Cartão digital

- Página: `cartao.html` (link em `/cartao.html` no site publicado), com botões de WhatsApp, ligar, e-mail,
  salvar contato (arquivo `assets/lj-servicos.vcf`), mapa e compartilhar.
- Imagem para enviar no WhatsApp: `assets/brand/cartao-lj-servicos.png` (1080x1350), com QR code para a página.
- Para alterar telefone, e-mail ou endereço do cartão, edite `cartao.html` e `assets/lj-servicos.vcf`.
