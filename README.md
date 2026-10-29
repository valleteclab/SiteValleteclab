# Site Valleteclab

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
  whatsappNumber: "5566999998888",     // DDI + DDD + número, só dígitos
  whatsappDisplay: "(66) 99999-8888",  // como aparece no site
  email: "contato@valleteclab.com.br",
  region: "Atendemos todo o Brasil",
  ...
};
```

Todos os botões "WhatsApp" e o formulário de contato usam esse número. O formulário monta a
mensagem e abre o WhatsApp com ela pronta, sem precisar de servidor.

## 2. Adicionar as fotos

Coloque as fotos nos caminhos abaixo (JPG, idealmente até 300 KB cada). Enquanto uma foto não
existir, o site mostra um espaço reservado com o nome do que vai ali, sem quebrar o layout.

| Arquivo | Onde aparece | Sugestão |
|---|---|---|
| `assets/img/logo.png` | Cabeçalho | Logo em PNG com fundo transparente. Se não existir, aparece o nome em texto. |
| `assets/img/hero.jpg` | Fundo da primeira dobra | Foto panorâmica de armazém, silos ou equipe em campo (horizontal, 1920px). |
| `assets/img/equipe.jpg` | Seção "Quem somos" | Equipe ou o líder técnico em campo (vertical ou quadrada). |
| `assets/img/servicos/manutencao-industrial.jpg` | Card do serviço | Silos, elevadores, esteiras. |
| `assets/img/servicos/fabricacao-montagem.jpg` | Card do serviço | Solda, caldeiraria, montagem de estrutura. |
| `assets/img/servicos/manutencao-eletrica.jpg` | Card do serviço | Painel elétrico, motor, CCM. |
| `assets/img/servicos/usina-solar.jpg` | Card do serviço | Placas solares instaladas. |
| `assets/img/servicos/engenharia-civil.jpg` | Card do serviço | Base de silo, galpão, obra. |
| `assets/img/portfolio/01.jpg` a `08.jpg` | Galeria "Projetos realizados" | 8 fotos de trabalhos. As legendas estão em `index.html` e podem ser trocadas. |
| `assets/img/og-image.jpg` | Prévia ao compartilhar o link no WhatsApp/redes | 1200x630px. |

Para adicionar mais fotos na galeria, copie um bloco `<figure class="portfolio__item">` em `index.html`.

## 3. Publicar

Qualquer hospedagem estática funciona. No GitHub Pages: Settings > Pages > Branch `main` > pasta `/ (root)`.
