# Tandem AI Labs — Agency Website

Official website for Tandem AI Labs, an AI consulting agency building custom RAG systems, agentic AI, and workflow automation for businesses.

---

## About

This is the production website for [Tandem AI Labs](https://tandem-ai.tech) — a solo AI consulting agency founded by Aryan Dhawan.

The site showcases the agency's three core services (Custom RAG Systems, AI Workflow Automation, and Custom Integrations), real case studies including the Kismat Machinery Google review automation system and the Lucid autonomous research digest pipeline, and the end-to-end business process: free 15-minute business audit → fixed-price proposal → build on managed cloud → live demo delivery → optional monthly retainer.

Visitors can book a free audit call, send an email directly, or browse case studies and project work via the site.

---

## Tech Stack

**Website**
- Framework: [Next.js](https://nextjs.org/) (static export via `output: "export"`)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Hosting: [Cloudflare Pages](https://pages.cloudflare.com/)

**Automation & Low-Code (used in service delivery)**
- [n8n](https://n8n.io/)
- [Make.com](https://www.make.com/)
- [Zapier](https://zapier.com/)

**AI / LLM**
- [OpenAI](https://openai.com/)
- [Groq](https://groq.com/)
- [Google Gemini](https://deepmind.google/technologies/gemini/)
- [LangChain](https://www.langchain.com/)
- [Hugging Face](https://huggingface.co/)

**ML / DL**
- [PyTorch](https://pytorch.org/)
- [TensorFlow](https://www.tensorflow.org/)
- [Scikit-Learn](https://scikit-learn.org/)

**MLOps**
- [Weights & Biases](https://wandb.ai/)
- [MLflow](https://mlflow.org/)
- [DagsHub](https://dagshub.com/)

**Cloud Platforms**
- Azure · AWS · GCP · DigitalOcean

---

## Project Structure

```
.
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout, metadata, fonts
│   ├── page.tsx                # Home page — assembles all sections
│   └── globals.css             # Global styles
│
├── components/
│   ├── landing/                # Page sections (hero, nav, footer, etc.)
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── infrastructure-section.tsx  # About section
│   │   ├── integrations-section.tsx
│   │   ├── security-section.tsx        # Case studies
│   │   ├── testimonials-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── footer-section.tsx
│   │   ├── animated-wave.tsx           # Canvas wave animation
│   │   └── animated-sphere.tsx         # Rotating globe animation
│   │
│   ├── ui/                     # shadcn/ui component library
│   └── theme-provider.tsx      # next-themes dark/light mode provider
│
├── hooks/                      # Shared React hooks
├── lib/                        # Utility functions
├── public/                     # Static assets (favicon, images)
├── styles/                     # Additional global styles
├── next.config.mjs             # Next.js config (static export)
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Install dependencies

```bash
pnpm install
# or
npm install
```

### Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
# or
npm run build
```

The static output is generated in the `out/` directory.

---

## Deployment

This site auto-deploys to **Cloudflare Pages** on every push to the `master` branch. Build command: `npm run build`. Output directory: `out`.

---

## Contact

- **Email:** aryan@tandem-ai.tech
- **Website:** https://tandem-ai.tech
- **LinkedIn:** https://www.linkedin.com/in/aryan-dhawan-40760a160/

---

## License

All rights reserved. This is a private commercial repository. No part of this codebase may be reproduced, distributed, or used without explicit written permission from Tandem AI Labs.
