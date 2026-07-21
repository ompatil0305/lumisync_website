# Lumisync Website Engineering Rules

## Required Reading Before Edits

Before changing website architecture, copy, brand, SEO, accessibility, analytics, or page structure, read:

- docs/README.md
- docs/website-strategy.md
- docs/brand-copy-seo.md
- docs/quality-checklist.md

If the docs conflict with the current implementation, explain the mismatch before changing code.

## Existing Stack Reality

The Lumisync marketing website is a Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Framer Motion application.

Do not apply assumptions from the app repository unless the website docs explicitly reference them.

## Product Relationship

The website and application are one product, but they have different responsibilities.

The website should:

- communicate the Lumisync vision clearly
- earn trust from students, universities, investors, and hiring managers
- show real product value without fake UI claims
- preserve the same platform-first philosophy as the application

The website should not:

- hardcode Texas Tech as the brand identity
- describe unavailable features as already complete
- invent product screenshots or fake workflows
- drift from the app's actual architecture and roadmap

## Brand Rules

Lumisync should feel like a premium campus operating system, not a generic AI landing page.

Prefer:

- clear typography
- restrained color
- strong information hierarchy
- real product imagery
- concise writing
- calm, intentional motion

Avoid:

- purple AI branding
- excessive gradients
- hype-heavy copy
- generic SaaS sections
- university-specific visual identity in global brand tokens
- fake phone mockups or invented UI

## Copy Rules

Copy must be specific, natural, and product-grounded.

Avoid generic phrases such as:

- AI-powered platform for everything
- seamless experience
- revolutionary solution
- unlock your potential
- transform campus life

Use concrete outcomes instead:

- find buildings
- locate faculty
- check dining
- discover events
- understand parking
- ask Lumi campus questions

Do not overpromise. If a capability is planned, label it as planned, future, roadmap, or coming later.

## SEO Rules

Every public route should have:

- meaningful metadata
- Open Graph content
- canonical intent
- crawlable text
- accessible headings
- content aligned to the actual product state

Do not keyword-stuff. SEO should come from useful, precise product pages.

## Accessibility Rules

Every interactive element must be keyboard reachable, visibly focusable, and screen-reader understandable.

Motion must respect reduced-motion preferences.

Images must have useful alt text unless decorative.

Color contrast must satisfy WCAG AA for text and essential controls.

## Definition Of Done

Before finishing a website change, verify:

- brand stays university-neutral
- copy matches real product capability
- mobile layout remains usable
- focus states and semantic headings are preserved
- metadata is updated when page meaning changes
- images are real, optimized, and appropriately described
- lint/build/tests were run when relevant
- docs are updated if the marketing strategy or architecture changed

Report what changed, what was verified, and what was intentionally left untouched.
