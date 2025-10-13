# Launch HQ Stack Flight Plan

This repository scaffolds the Launch HQ self-serve lead magnet: a 10-step wizard that generates a Canada-ready automation blueprint, lead score, and branded PDF for founders in under seven minutes.

## Highlights

- **Next.js 14 + App Router** with TypeScript, Tailwind CSS, and React Server Components.
- **Wizard experience** using `react-hook-form` + Zod, complete with progress tracking, CSV upload placeholder, and gating for email/consent.
- **Canada-first recommendations** powered by a rules engine, lead scoring logic, ROI estimators, and quick-win automation stubs.
- **Results workspace** featuring stack summaries, Mermaid-ready integration code, budget ranges, and CTA routing for hot leads.
- **Admin control tower** placeholders for submissions review, content editing, and score mix analytics.
- **API routes** for every major subsystem (wizard submit, PDF generation, CRM sync, nurture sequences, calendar embed, etc.) returning mock data for now.
- **Prisma schema** outlining persistence for submissions, leads, content blocks, and CSV uploads.

## Getting Started

```bash
pnpm install
pnpm dev
```

> The project uses placeholder data and stub integrations today. Swap the mocked responses for real services (Anthropic, HubSpot, SendGrid, Playwright) as you wire up infrastructure.

## Testing

Placeholder Vitest/Jest-style specs live in `tests/` to demonstrate coverage goals for the wizard, scoring engine, recommendations, PDF generation, and end-to-end flow.
