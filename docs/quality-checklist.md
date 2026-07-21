# Website Quality Checklist

Use this checklist before finishing any meaningful website change.

## Product Accuracy

- The copy reflects what Lumisync can actually do.
- Future capabilities are labeled as future, planned, roadmap, or coming later.
- Texas Tech is treated as the first supported university, not the brand identity.
- No fake product UI, fake data claims, or unsupported integration claims were introduced.

## Brand And UX

- The page feels consistent with the existing Lumisync visual language.
- Typography, spacing, cards, buttons, and motion feel intentional.
- The page has a clear primary audience and CTA.
- Mobile layout is usable and not just compressed desktop design.
- Important content appears early enough that users understand the page quickly.

## Accessibility

- Headings are semantic and ordered.
- Buttons and links have clear accessible names.
- Keyboard focus is visible.
- Interactive elements can be reached without a mouse.
- Images have useful alt text unless decorative.
- Motion respects reduced-motion preferences where relevant.
- Color contrast is WCAG AA for text and essential controls.

## SEO

- The page has useful metadata.
- The H1 is clear and unique.
- Internal links are descriptive.
- Content is crawlable and not hidden behind animation-only states.
- Sitemap, robots, or structured data are updated if needed.

## Performance

- Images are appropriately sized and optimized.
- Heavy client-side components are justified.
- Animation does not block comprehension or interaction.
- The change does not unnecessarily increase JavaScript on unrelated pages.

## Engineering

- TypeScript remains safe.
- Existing components are reused where appropriate.
- Styling follows existing patterns.
- No unrelated files were changed.
- Lint or build was run when relevant.

## Documentation

- Website docs were updated if strategy, brand, SEO, or architecture changed.
- Agent rules remain accurate for future coding sessions.
