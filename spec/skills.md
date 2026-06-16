# Agentic Skills & Behaviors Index

> Index of all skills installed in `.agents/skills/`. When a skill trigger is encountered, read the matching entry here first, then load the full `SKILL.md` only if needed. Read on demand, not on init.

## Writing Format

When adding or updating skills, follow this structure exactly:

### [N]- [skill-directory-name]

**Triggers**: [comma-separated keyword tags]
**Pairs With**: [related skill names]
**Top 2 Rules**: [highest impact rule]. [second most critical rule].

Full context: `.agents/skills/[skill-directory-name]/SKILL.md`

---

## Skills

### 1- base-ui

**Triggers**: base-ui, @base-ui/react, component primitives, accessible primitives, unstyled components
**Pairs With**: coss, typescript-expert
**Top 2 Rules**: Use Base UI compound parts and accessibility contracts correctly. Preserve server/client boundaries and styling conventions.

Full context: `.agents/skills/base-ui/SKILL.md`

---

### 2- coss

**Triggers**: coss, base-ui, component primitives, dialogs, forms, toasts
**Pairs With**: coss-particles, make-interfaces-feel-better
**Top 2 Rules**: Use coss primitives correctly before inventing custom wrappers. Preserve accessibility and shared styling conventions.

Full context: `.agents/skills/coss/SKILL.md`

---

### 3- coss-particles

**Triggers**: coss examples, particle examples, copy-paste UI patterns, component inspiration
**Pairs With**: coss, emil-design-eng
**Top 2 Rules**: Prefer existing particle patterns before building from scratch. Reuse examples that already fit coss primitives.

Full context: `.agents/skills/coss-particles/SKILL.md`

---

### 4- emil-design-eng

**Triggers**: UI polish, design engineering, feel, delight, invisible details
**Pairs With**: make-interfaces-feel-better, motion-design
**Top 2 Rules**: Polish is a systems concern, not decorative garnish. Use taste and restraint to make interfaces feel intentional.

Full context: `.agents/skills/emil-design-eng/SKILL.md`

---

### 5- grill-me

**Triggers**: new feature, unclear plan, design interview, stress-test, bootstrap
**Pairs With**: improve-codebase-architecture, typescript-expert
**Top 2 Rules**: Ask one question at a time until the decision tree is resolved. Do not assume when the answer materially affects design.

Full context: `.agents/skills/grill-me/SKILL.md`

---

### 6- handoff

**Triggers**: handoff, compact context, transfer work, another agent, summarize session
**Pairs With**: wrap-up, improve-codebase-architecture
**Top 2 Rules**: Preserve the decisions, current state, and next action clearly. Keep the handoff actionable for another agent.

Full context: `.agents/skills/handoff/SKILL.md`

---

### 7- improve-codebase-architecture

**Triggers**: refactor, architecture, module boundaries, testability, AI navigability
**Pairs With**: nextjs-patterns, typescript-expert
**Top 2 Rules**: Deepen the codebase instead of shuffling files superficially. Prefer changes that clarify ownership and reduce coupling.

Full context: `.agents/skills/improve-codebase-architecture/SKILL.md`

---

### 8- make-interfaces-feel-better

**Triggers**: feels off, polish, hover states, shadows, borders, spacing, interface quality
**Pairs With**: emil-design-eng, motion-design
**Top 2 Rules**: Fix the small details that compound into quality. Use shared visual logic instead of one-off tweaks.

Full context: `.agents/skills/make-interfaces-feel-better/SKILL.md`

---

### 9- motion-design

**Triggers**: animation direction, timing, easing, choreography, transitions
**Pairs With**: motion-patterns, make-interfaces-feel-better
**Top 2 Rules**: Motion should communicate meaning, not noise. Use timing and choreography intentionally.

Full context: `.agents/skills/motion-design/SKILL.md`

---

### 10- motion-patterns

**Triggers**: toast animation, modal animation, stagger, page transition, layout animation
**Pairs With**: motion-design, make-interfaces-feel-better
**Top 2 Rules**: Use proven motion patterns instead of ad hoc effects. Keep repeated interactions fast and low-friction.

Full context: `.agents/skills/motion-patterns/SKILL.md`

---

### 11- nextjs-patterns

**Triggers**: next.js app router, server components, caching, streaming, server actions
**Pairs With**: vercel-react-best-practices, typescript-expert
**Top 2 Rules**: Prefer modern App Router patterns over legacy habits. Design around server-first rendering and clear data boundaries.

Full context: `.agents/skills/nextjs-patterns/SKILL.md`

---

### 12- react-doctor

**Triggers**: finish feature, review React code, regression check, accessibility check, cleanup
**Pairs With**: vercel-react-best-practices, typescript-expert
**Top 2 Rules**: Run it after meaningful React work. Treat regressions in architecture, accessibility, and quality as first-class issues.

Full context: `.agents/skills/react-doctor/SKILL.md`

---

### 13- react-useeffect

**Triggers**: useEffect, derived state, data fetching, effect cleanup
**Pairs With**: vercel-react-best-practices, typescript-expert
**Top 2 Rules**: Use effects only for external synchronization. Prefer derived state and event handlers over effects when possible.

Full context: `.agents/skills/react-useeffect/SKILL.md`

---

### 14- typescript-expert

**Triggers**: type system, advanced TypeScript, JS architecture, migrations, performance
**Pairs With**: nextjs-patterns, vercel-react-best-practices
**Top 2 Rules**: Use type design to simplify systems, not impress them. Prefer durable, understandable types over clever noise.

Full context: `.agents/skills/typescript-expert/SKILL.md`

---

### 15- vercel-composition-patterns

**Triggers**: composition, compound components, render props, context APIs, component architecture
**Pairs With**: coss, vercel-react-best-practices
**Top 2 Rules**: Choose component APIs that scale without boolean sprawl. Use composition to preserve flexibility and clarity.

Full context: `.agents/skills/vercel-composition-patterns/SKILL.md`

---

### 16- vercel-react-best-practices

**Triggers**: react performance, next.js performance, bundle optimization, data fetching, rendering patterns
**Pairs With**: nextjs-patterns, react-doctor
**Top 2 Rules**: Follow server-first React/Next.js performance guidance. Optimize architecture before micro-optimizing components.

Full context: `.agents/skills/vercel-react-best-practices/SKILL.md`

---

### 17- wrap-up

**Triggers**: session end, handoff, work log, sprint log
**Pairs With**: react-doctor, improve-codebase-architecture
**Top 2 Rules**: End each session with a real log in `spec/sessions/`. Verify paths and unresolved state before closing work.

Full context: `.agents/skills/wrap-up/SKILL.md`
