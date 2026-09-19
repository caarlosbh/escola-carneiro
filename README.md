# Escola Carneiro — Artes Visuais (Nova Versão 2.0)

Este projeto é uma **reformulação completa, moderna e artística** do website oficial da [Escola Carneiro](https://www.escolacarneiro.com.br/), desenvolvido com foco na estética refinada de ateliê de artes plásticas, alta performance e conversão de novos alunos e franqueados.

---

## 🎨 O Conceito: Editorial Fine Arts Atelier

A identidade visual foi completamente restilizada, deixando de lado as limitações do template Wix anterior e adotando uma experiência digna dos 24 anos de tradição da escola:

- **Paleta de Cores**: Tons nobres de ateliê — *Obsidian Black* (`#0E0D0E`), *Carvão Studio* (`#161517`), *Terracota Artístico* (`#B85D3B`), *Ocre Dourado / Pátina* (`#C5A880`) e *Papel Pergaminho* (`#FBF9F5`).
- **Tipografia**: Combinação clássica & contemporânea com *Playfair Display* e *Cormorant Garamond* nos títulos editoriais e *Plus Jakarta Sans* para clareza e legibilidade no corpo de texto.
- **Textura & Efeitos**: Granulação sutil de papel artesanal, painéis em vidro fosco (*glassmorphism*), iluminação painterly suave e microinterações fluidas.

---

## 🏛️ Conteúdo & Informações 100% Preservadas

Todos os dados institucionais, cursos, acervo e unidades foram catalogados e modernizados:

1. **Os 3 Pilares Fundamentais**:
   - **Pintura a Óleo**: Do clássico ao contemporâneo, luz, sombra, veladuras e misturas na paleta.
   - **Desenho Artístico & Grafite**: Grafite graduado, hachuras, giz pastel seco/oleoso, nanquim e aquarela.
   - **Escultura em Clay**: Modelagem tridimensional anatômica em massa *clay* à base de óleo que não seca.
2. **Pedagogia & Filosofia de Thayná Carneiro**:
   - As 12 competências comportamentais (*Soft Skills*) desenvolvidas em sala.
   - Os 3 pilares de ensino: *Paixão por Ensinar*, *Lapidar Talentos*, *Ampliar Futuros*.
   - Abordagem segmentada por público: *Infantil (a partir de 4 anos)*, *Adultos (desconexão e estresse)* e *Sênior (estimulação cognitiva e socialização)*.
   - Princípios da fundadora: *"Não existe dom: arte é matemática e prática"* e *"Nunca peguei nenhum aluno que não aprendeu em toda a minha carreira"*.
3. **Rede de 8 Unidades Integradas**:
   - **São Paulo - SP**: Unidade Moema e Unidade Alphaville SP.
   - **Minas Gerais**: Unidade Lourdes (BH), Unidade Vila da Serra (Nova Lima), Unidade Belvedere (BH), Unidade Buritis (BH), Unidade Pampulha (BH) e Unidade Alphaville Lagoa dos Ingleses (Nova Lima).
   - Cada unidade conta com endereço completo, link para o Google Maps e botão com roteamento direto para seu WhatsApp exclusivo.
4. **Galeria de Obras do Acervo Real**:
   - Mais de 60 fotografias originais em resolução *master* extraídas do site da escola.
   - Filtros por categoria (*Pintura*, *Desenho*, *Escultura*, *Atelier*).
   - Visualizador **Lightbox interativo** em tela cheia com navegação rápida.
5. **Setor de Franquias (Expansão 2026)**:
   - Apresentação do modelo de negócio (investimento ~R$ 500k, capital de giro R$ 60k-100k, payback 12-24 meses, breakeven 6-12 meses).
   - **15 Perguntas Frequentes (FAQ)** estruturadas em accordion expansível.
   - Modal exclusivo para cadastro de potenciais franqueados.
6. **Blog Cultural**:
   - Artigos originais completos com leitor editorial modal (*"Quando criatividade encontra estratégia"* e *"ARTE POR VOCÊ"* por Filipe Saddi).
7. **Conversão Inteligente**:
   - Modal para agendamento de **Aula Experimental Gratuita** com seletor de unidade, curso, faixa etária e turno, gerando mensagem pré-formatada para o WhatsApp da unidade escolhida.
   - Botão flutuante de WhatsApp com menu de unidades para atendimento imediato.

---

## 🚀 Como Executar o Projeto

### Opção 1: Duplo Clique no macOS (Mais Fácil)
Basta dar um duplo clique no arquivo:
```bash
iniciar_site.command
```
Ele abrirá o navegador automaticamente em `http://localhost:3000`.

### Opção 2: Via Terminal

1. **Instalar dependências** (caso ainda não tenha feito):
   ```bash
   npm install
   ```

2. **Iniciar o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:3000`

3. **Gerar Build de Produção**:
   ```bash
   npm run build
   ```
   Os arquivos finais otimizados e prontos para publicação ficam na pasta `dist/`.

4. **Visualizar o Build de Produção**:
   ```bash
   npm run preview
   ```

---

## 📁 Estrutura de Arquivos

```
├── assets/images/           # Acervo de imagens originais baixadas
├── public/
│   └── assets/images/       # Imagens servidas estaticamente
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Barra de navegação com menu mobile e dropdown
│   │   ├── Hero.jsx         # Seção principal de alto impacto visual
│   │   ├── CoursesSection.jsx # Mostra detalhada de Pintura, Desenho e Escultura
│   │   ├── MethodologySection.jsx # Filosofia Thayná Carneiro, Soft Skills e Públicos
│   │   ├── GallerySection.jsx # Galeria interativa com filtros e Lightbox
│   │   ├── UnitsSection.jsx # Cards das 8 unidades com WhatsApp e Mapas
│   │   ├── FranchiseSection.jsx # Apresentação de franquia e 15 FAQs expansíveis
│   │   ├── TestimonialsSection.jsx # Depoimentos de alunos e acolhimento nominal
│   │   ├── BlogSection.jsx  # Artigos culturais com leitor modal
│   │   ├── BookingModal.jsx # Modal de aula experimental gratuita
│   │   ├── FranchiseModal.jsx # Modal de interesse de franquia
│   │   ├── FloatingWhatsApp.jsx # Botão flutuante com seletor de unidades
│   │   └── Footer.jsx       # Rodapé completo
│   ├── data/
│   │   └── siteData.js      # Base de dados centralizada com todos os textos e mídias
│   ├── App.jsx              # Aplicação principal React
│   ├── index.css            # Estilos Tailwind e customizações do ateliê
│   └── main.jsx             # Entrypoint da aplicação
├── index.html               # Documento base com Google Fonts
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração de cores e tipografia
└── vite.config.js           # Configuração de build do Vite
```
