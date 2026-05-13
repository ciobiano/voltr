# VOLTR Architecture

## Stack

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion + GSAP + Lenis
- **3D:** React Three Fiber + Drei + Three.js
- **State:** Zustand

## Route Structure

```
src/app/
├── layout.tsx              root layout: fonts (next/font), metadata, Lenis provider
├── page.tsx                hero scene (/) — server component shell
├── (scenes)/               route group, no URL impact
│   ├── hero/
│   │   └── page.tsx
│   ├── performance/
│   │   └── page.tsx
│   └── interior/
│       └── page.tsx
```

Route groups organize scenes without affecting the URL. Each scene is a self-contained route segment with its own layout, loading, and error boundaries where needed.

## Font Strategy

| Role | Font | Source | Integration |
|---|---|---|---|
| UI / Body | Inter | `next/font/google` | Root layout, variable font |
| Display | LL Supreme Display | `next/font/local` | Purchased, self-hosted in `src/fonts/` |
| Data / Metrics | Geist Mono | `next/font/google` | Scoped to metric components |

All fonts self-hosted via `next/font` — zero external network requests. No layout shift.

## Architecture Principles

### DOM-first, Canvas-second

Do NOT make the whole site a giant WebGL canvas.

```
DOM
 ├── typography
 ├── layouts
 ├── interactions
 └── overlays

Canvas (selective, isolated)
 ├── vehicle reveal
 ├── environment
 ├── shader moments
 └── atmospheric systems
```

### Scene Isolation

Each cinematic section is its own system. Not one giant animation timeline.

```tsx
const VehicleScene = dynamic(() => import('@/scenes/vehicle-scene'), {
  ssr: false,
  loading: () => <SceneSkeleton />,
})
```

3D/canvas scenes use `dynamic()` with `ssr: false`. DOM scenes are Server Components with targeted client interaction islands.

### Rendering Strategy

- **Static shell** by default (Fast, initial HTML)
- **Streaming** via `<Suspense>` for dynamic content
- **Client Components** only where interactivity is needed (motion wrappers, 3D scenes)
- **`use cache`** for data fetching where appropriate

### Image Strategy

- Local hero/background assets in `public/assets/` with static imports
- `<Image>` with `placeholder="blur"` for cinematic hero images
- Dynamic `import()` for scene-specific assets

### Motion System

- **Lenis** — smooth scroll at root layout level
- **GSAP ScrollTrigger** — scene-scoped, imported dynamically per scene
- **Framer Motion** — `'use client'` wrappers for entry/exit animations
- Easing tokens are JS constants, not magic values

### Design System

- CVA-first component variants in `@/design-system/variants`
- Tailwind v4 design tokens for all brand values (colors, spacing, easing)
- No hardcoded Tailwind class strings in JSX

### Capability Detection

Some devices receive simplified shaders, reduced particles, lower reflection quality, reduced postprocessing. This is built in from day one, not retrofitted.

## Folder Structure

```
src/
├── app/                    routes, layouts, pages
├── components/             shared UI components
├── features/               feature-specific modules
├── scenes/                 cinematic scene components
│   ├── vehicle-scene/      3D vehicle canvas
│   ├── environment-scene/  atmospheric canvas
│   └── shader-moments/     targeted GPU effects
├── systems/                cross-cutting systems (capability-detection, audio, etc.)
├── design-system/          CVA variants, tokens, primitives
├── motion/                 easing tokens, Lenis provider, GSAP plugins
├── shaders/                GLSL/glslify shader modules
├── store/                  Zustand stores
└── lib/                    utilities, helpers, types
```

## Brand-to-Architecture Mapping

| Brand Layer | Architecture Implementation |
|---|---|
| Scene Construction | Route groups + `<Suspense>` boundaries |
| Slow Cinematic Motion | Lenis (smooth scroll) + GSAP ScrollTrigger (scene triggers) + easing tokens |
| Atmospheric Depth | CSS custom properties (gradients, fog, blur) in global styles |
| Typography System | `next/font` self-hosted + CVA variants component library |
| Lighting | Tailwind tokens for shadows, gradients, blend modes |
| Mechanical Precision | Framer Motion micro-interactions with bezier curves |
| Selective 3D | R3F + Drei via `dynamic(() => import(), { ssr: false })` |
| Performance | Dynamic imports, capability detection, scene-level code splitting |
