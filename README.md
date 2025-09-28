# Research Analyzer

**Research Analyzer** é uma aplicação web AI-powered que analisa e resume documentos, pesquisas acadêmicas, publicações e documentação técnica. Ele gera insights detalhados, principais descobertas e recomendações acionáveis a partir de arquivos PDF, URLs ou textos colados diretamente.

---

## 🚀 Funcionalidades

- **Entrada múltipla**: suporte a arquivos PDF, textos (.txt) e URLs.
- **Análise AI**: utiliza o modelo Claude Sonnet 4 para análise detalhada.
- **Resultados estruturados**: gera resumo, descobertas chave, metodologia, conclusões, limitações e recomendações.
- **Customizável**: sistema de prompts configurável para ajustar a análise de acordo com suas necessidades.
- **Exportação**: permite copiar ou baixar a análise em formato `.txt`.

---

## 🛠 Tecnologias

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- Integração com [Claude Sonnet 4 API](https://openrouter.ai/)

---

## 📁 Estrutura do Projeto

/components - Componentes UI reutilizáveis (Card, Button, Input, etc.)
/pages - Páginas Next.js (ex: index.tsx)
/public - Arquivos estáticos
/styles - Estilos globais (Tailwind)


---

## ⚡ Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/research-analyzer.git
cd research-analyzer

npm install
# ou
yarn install

NEXT_PUBLIC_API_URL=https://oi-server.onrender.com
NEXT_PUBLIC_API_KEY=seu_token_aqui

npm run dev
# ou
yarn dev
