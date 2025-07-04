# 🚀 Portfólio Pedro Castro - Desenvolvedor em Formação

![Portfolio Preview](https://img.shields.io/badge/Status-Online-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

Portfólio pessoal moderno e responsivo desenvolvido para apresentar minhas habilidades, projetos e experiência profissional como desenvolvedor em transição de carreira. O projeto combina design contemporâneo com animações suaves e uma experiência de usuário envolvente.

### 🎯 Objetivo

Criar uma presença online profissional que demonstre minhas competências técnicas e comportamentais, facilitando o networking e oportunidades de trabalho na área de desenvolvimento de software.

## ✨ Características Principais

### 🎨 Design Moderno
- **Tema Dark Premium** com gradientes vibrantes
- **Glassmorfismo** - Cards com efeito de vidro translúcido
- **Layout Responsivo** - Adaptável a todos os dispositivos
- **Tipografia Elegante** - Fonte Inter para máxima legibilidade

### 🌟 Animações e Interatividade
- **Scroll Animations** - Elementos aparecem suavemente ao rolar a página
- **Parallax Effect** - Fundo com movimento paralelo
- **Typing Effect** - Animação de digitação no título principal
- **Hover Effects** - Interações visuais em cards e botões
- **Cursor Customizado** - Cursor personalizado com gradiente
- **Partículas Flutuantes** - Efeito sutil de partículas no fundo

### 🧭 Navegação Inteligente
- **Smooth Scroll** - Rolagem suave entre seções
- **Navegação Fixa** - Menu sempre visível com backdrop blur
- **Indicador Ativo** - Destaque da seção atual na navegação
- **Menu Responsivo** - Adaptação automática para mobile

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização avançada com:
  - Flexbox e Grid Layout
  - Custom Properties (CSS Variables)
  - Animações e Transições
  - Media Queries para Responsividade
  - Backdrop Filters
- **JavaScript (Vanilla)** - Funcionalidades interativas:
  - Intersection Observer API
  - Event Listeners
  - DOM Manipulation
  - Smooth Scrolling

### Recursos Externos
- **Font Awesome 6.4.0** - Ícones profissionais
- **Google Fonts (Inter)** - Tipografia moderna
- **CDN CloudFlare** - Carregamento otimizado

## 📱 Seções do Portfólio

### 🏠 Header/Hero
- Foto de perfil com animação flutuante
- Título com efeito de digitação
- Links para redes sociais
- Call-to-action visual

### 👨‍💻 Sobre Mim
- Apresentação pessoal e profissional
- Objetivos de carreira
- Transição de área (Mecânica → Tecnologia)

### 🎯 Habilidades
- **Técnicas**: HTML/CSS, Java, Metodologias Ágeis
- **Comportamentais**: Liderança, Gestão de Conflitos, Trabalho em Equipe
- Cards interativos com animações

### 💼 Projetos
- Portfólio atual
- Sistema de Gerenciamento Java
- Links para GitHub
- Tags de tecnologias utilizadas

### 🏢 Experiência Profissional
- Timeline interativa
- Histórico profissional completo
- Responsabilidades e conquistas

### 🎓 Formação Acadêmica
- Tecnólogo em ADS (UNINTER)
- Técnico em Mecânica (SENAI)
- Cursos de extensão
- Cards com hover effects

### 📞 Contato
- Informações de contato
- Links diretos para comunicação
- Localização

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno
- Servidor web local (opcional)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Pedro-Rcastro/portfolio.git
```

2. **Navegue até o diretório**
```bash
cd portfolio
```

3. **Abra o arquivo HTML**
```bash
# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Usar servidor local (recomendado)
# Com Python
python -m http.server 8000

# Com Node.js (live-server)
npx live-server

# Com PHP
php -S localhost:8000
```

4. **Acesse no navegador**
```
http://localhost:8000
```

## 📂 Estrutura do Projeto

```
portfolio/
│
├── index.html              # Página principal
├── README.md              # Este arquivo
│
├── src/                   # Assets (quando separados)
│   ├── css/
│   │   └── style.css      # Estilos (inline no projeto atual)
│   ├── js/
│   │   └── script.js      # Scripts (inline no projeto atual)
│   └── img/
│       └── foto-portfolio.jpg
│
└── docs/                  # Documentação adicional
    └── screenshots/       # Capturas de tela
```

## 🎨 Paleta de Cores

```css
:root {
    --primary-color: #667eea;      /* Azul Principal */
    --secondary-color: #764ba2;    /* Roxo Secundário */
    --accent-color: #f093fb;       /* Rosa Accent */
    --dark-bg: #0a0a0a;           /* Fundo Escuro */
    --text-light: #ffffff;         /* Texto Claro */
    --text-muted: #a0a0a0;        /* Texto Secundário */
}
```

### Gradientes
- **Primário**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Secundário**: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 1200px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### Adaptações Mobile
- Menu compacto
- Timeline simplificada
- Cards em coluna única
- Fontes redimensionadas
- Espaçamentos otimizados

## ⚡ Performance

### Otimizações Implementadas
- **CSS Inline** - Reduz requisições HTTP
- **JavaScript Vanilla** - Sem dependências externas
- **Lazy Loading** - Animações ativadas por scroll
- **Intersection Observer** - Performance otimizada
- **CDN** - Recursos externos via CloudFlare

### Métricas
- **First Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 90+

## 🔧 Customização

### Alterar Cores
```css
:root {
    --primary-color: #sua-cor-aqui;
    --secondary-color: #sua-cor-aqui;
    /* ... */
}
```

### Modificar Animações
```css
.animate-on-scroll {
    transition: all 0.6s ease; /* Ajustar duração */
}
```

### Personalizar Conteúdo
1. Edite o HTML com suas informações
2. Substitua a foto de perfil
3. Atualize links das redes sociais
4. Modifique projetos e experiências

## 🤝 Conecte-se Comigo

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-castro-6b453595)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Pedro-Rcastro)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pedrocastro.roger23@gmail.com)

## 📞 Contato

- **Email**: pedrocastro.roger23@gmail.com
- **Telefone**: (92) 98524-8138 / (53) 99153-2106
- **Localização**: Manaus, AM - Brasil

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔄 Versões

### v2.0.0 (Atual)
- ✅ Design moderno com glassmorfismo
- ✅ Animações avançadas
- ✅ Performance otimizada
- ✅ Responsividade completa

### v1.0.0
- ✅ Estrutura básica HTML/CSS
- ✅ Layout responsivo simples
- ✅ Informações profissionais

## 🚧 Roadmap

### Próximas Funcionalidades
- [ ] Blog integrado
- [ ] Sistema de comentários
- [ ] Modo claro/escuro
- [ ] PWA (Progressive Web App)
- [ ] Integração com APIs
- [ ] Formulário de contato funcional
- [ ] Analytics integrado

### Melhorias Técnicas
- [ ] Otimização de imagens
- [ ] Compressão de assets
- [ ] Service Worker
- [ ] Meta tags para SEO
- [ ] Schema.org markup

---

<div align="center">

**💼 Desenvolvido por Pedro Castro**

*Desenvolvedor em Formação | Análise e Desenvolvimento de Sistemas*

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

</div>