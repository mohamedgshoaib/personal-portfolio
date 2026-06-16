---
name: nextjs-app-router-patterns
description: "Next.js 16 App Router: Server Components, streaming, parallel/intercepting routes, Server Actions, data fetching, caching, and proxy.ts. Use when building or migrating Next.js applications, implementing SSR/SSG/ISR, or optimizing React Server Components."
---

# Next.js App Router Patterns

Comprehensive patterns for Next.js 16 App Router architecture, Server Components, and modern full-stack React development.

## When to Use

- Building new Next.js applications with App Router
- Migrating from Pages Router to App Router
- Implementing Server Components and streaming
- Setting up parallel and intercepting routes
- Optimizing data fetching and caching
- Building full-stack features with Server Actions

---

## Core Concepts

### Rendering Modes

| Mode                  | Where        | When to Use                               |
| --------------------- | ------------ | ----------------------------------------- |
| **Server Components** | Server only  | Data fetching, heavy computation, secrets |
| **Client Components** | Browser      | Interactivity, hooks, browser APIs        |
| **Static**            | Build time   | Content that rarely changes               |
| **Dynamic**           | Request time | Personalized or real-time data            |
| **Streaming**         | Progressive  | Large pages, slow data sources            |

### Server vs Client Decision Tree

```
Does it need...?
│
├── useState, useEffect, event handlers → 'use client'
├── Direct data fetching, no interactivity → Server Component (default)
└── Both? → Split: Server parent + Client child
```

### File Conventions

```
app/
├── layout.tsx          # Shared UI wrapper
├── page.tsx            # Route UI
├── loading.tsx         # Loading UI (Suspense)
├── error.tsx           # Error boundary
├── not-found.tsx       # 404 UI
├── route.ts            # API endpoint
├── template.tsx        # Re-mounted layout
├── default.tsx         # Parallel route fallback (required for all slots)
└── opengraph-image.tsx # OG image generation
proxy.ts                # Network boundary / request interception (replaces middleware.ts)
```

### Project Structure

```
app/
├── (marketing)/        # Route group
│   └── page.tsx
├── (dashboard)/
│   ├── layout.tsx
│   └── page.tsx
├── api/
│   └── [resource]/
│       └── route.ts
└── components/
    └── ui/
```

---

## Quick Start

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: { default: 'My App', template: '%s | My App' },
  description: 'Built with Next.js App Router',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

// app/page.tsx - Server Component by default
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  })
  return res.json()
}

export default async function HomePage() {
  const products = await getProducts()
  return (
    <main>
      <h1>Products</h1>
      <ProductGrid products={products} />
    </main>
  )
}
```

---

## Patterns

### 1. Server Components with Data Fetching

```typescript
// app/products/page.tsx
import { Suspense } from 'react'
import { ProductList, ProductListSkeleton } from '@/components/products'
import { FilterSidebar } from '@/components/filters'

interface SearchParams {
  category?: string
  sort?: 'price' | 'name' | 'date'
  page?: string
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams

  return (
    <div className="flex gap-8">
      <FilterSidebar />
      <Suspense key={JSON.stringify(params)} fallback={<ProductListSkeleton />}>
        <ProductList
          category={params.category}
          sort={params.sort}
          page={Number(params.page) || 1}
        />
      </Suspense>
    </div>
  )
}

// components/products/ProductList.tsx - Server Component
async function getProducts(filters: ProductFilters) {
  const res = await fetch(
    `${process.env.API_URL}/products?${new URLSearchParams(filters)}`,
    { next: { tags: ['products'] } }
  )
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function ProductList({ category, sort, page }: ProductFilters) {
  const { products, totalPages } = await getProducts({ category, sort, page })
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}
```

### 2. Client Components

```typescript
// components/products/AddToCartButton.tsx
'use client'

import { useState, useTransition } from 'react'
import { addToCart } from '@/app/actions/cart'

export function AddToCartButton({ productId }: { productId: string }) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const handleClick = () => {
    setError(null)
    startTransition(async () => {
      const result = await addToCart(productId)
      if (result.error) setError(result.error)
    })
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isPending} className="btn-primary">
        {isPending ? 'Adding...' : 'Add to Cart'}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}
```

### 3. Server Actions

```typescript
// app/actions/cart.ts
'use server'

import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function addToCart(productId: string) {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('session')?.value

  if (!sessionId) redirect('/login')

  try {
    await db.cart.upsert({
      where: { sessionId_productId: { sessionId, productId } },
      update: { quantity: { increment: 1 } },
      create: { sessionId, productId, quantity: 1 },
    })
    revalidateTag('cart', 'max') // v16: second arg required (cacheLife profile)
    return { success: true }
  } catch {
    return { error: 'Failed to add item to cart' }
  }
}

export async function checkout(formData: FormData) {
  const address = formData.get('address') as string
  const payment = formData.get('payment') as string

  if (!address || !payment) return { error: 'Missing required fields' }

  const order = await processOrder({ address, payment })
  redirect(`/orders/${order.id}/confirmation`)
}
```

### 4. Parallel Routes

```typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <div className="dashboard-grid">
      <main>{children}</main>
      <aside className="analytics-panel">{analytics}</aside>
      <aside className="team-panel">{team}</aside>
    </div>
  )
}

// app/dashboard/@analytics/page.tsx
export default async function AnalyticsSlot() {
  const stats = await getAnalytics()
  return <AnalyticsChart data={stats} />
}

// app/dashboard/@analytics/loading.tsx
export default function AnalyticsLoading() {
  return <ChartSkeleton />
}

// app/dashboard/@team/page.tsx
export default async function TeamSlot() {
  const members = await getTeamMembers()
  return <TeamList members={members} />
}
```

### 5. Intercepting Routes (Modal Pattern)

```
// File structure
app/
├── @modal/
│   ├── (.)photos/[id]/page.tsx  # Intercept → renders as modal
│   └── default.tsx
├── photos/
│   └── [id]/page.tsx            # Direct URL → full page
└── layout.tsx
```

```typescript
// app/@modal/(.)photos/[id]/page.tsx
export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const photo = await getPhoto(id)
  return <Modal><PhotoDetail photo={photo} /></Modal>
}

// app/photos/[id]/page.tsx
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const photo = await getPhoto(id)
  return (
    <div className="photo-page">
      <PhotoDetail photo={photo} />
      <RelatedPhotos photoId={id} />
    </div>
  )
}

// app/layout.tsx — wire the modal slot
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html><body>{children}{modal}</body></html>
  )
}
```

### 6. Streaming with Suspense

```typescript
// app/product/[id]/page.tsx
import { Suspense } from 'react'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProduct(id) // Blocking — renders first

  return (
    <div>
      <ProductHeader product={product} />
      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews productId={id} />         {/* Streamed */}
      </Suspense>
      <Suspense fallback={<RecommendationsSkeleton />}>
        <Recommendations productId={id} /> {/* Streamed */}
      </Suspense>
    </div>
  )
}

// Each streams its own data fetch independently
async function Reviews({ productId }: { productId: string }) {
  const reviews = await getReviews(productId)
  return <ReviewList reviews={reviews} />
}

async function Recommendations({ productId }: { productId: string }) {
  const products = await getRecommendations(productId)
  return <ProductCarousel products={products} />
}
```

### 7. Route Handlers (API Routes)

```typescript
// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category')
  const products = await db.product.findMany({
    where: category ? { category } : undefined,
    take: 20,
  })
  return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const product = await db.product.create({ data: body })
  return NextResponse.json(product, { status: 201 })
}

// app/api/products/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const product = await db.product.findUnique({ where: { id } })
  if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  return NextResponse.json(product)
}
```

### 8. proxy.ts (Network Boundary)

`proxy.ts` replaces `middleware.ts` in v16. Runs on Node.js runtime. Rename the file and the exported function.

```typescript
// proxy.ts  (was: middleware.ts)
import { NextRequest, NextResponse } from 'next/server'

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Auth guard
  const token = request.cookies.get('session')?.value
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Locale redirect
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
```

> `middleware.ts` still works for Edge runtime use cases but is deprecated and will be removed in a future version.

### 9. Metadata & SEO

```typescript
// app/products/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) return {}

  return {
    title: product.name,              // 50–60 chars
    description: product.description, // 150–160 chars
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export async function generateStaticParams() {
  const products = await db.product.findMany({ select: { slug: true } })
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) notFound()
  return <ProductDetail product={product} />
}
```

### 10. Image Optimization (`next/image`)

```typescript
import Image from 'next/image'

// Fixed dimensions (product card, avatar, etc.)
<Image
  src={product.imageUrl}
  alt={product.name}
  width={600}
  height={400}
  placeholder="blur"
  blurDataURL={product.blurUrl}  // tiny base64 preview
/>

// Fill parent container (hero, cover photo)
<div className="relative aspect-video">
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    sizes="100vw"
    className="object-cover"
    priority            // above-the-fold: skip lazy loading
  />
</div>

// Responsive grid (always provide sizes for perf)
<Image
  src={photo.url}
  alt={photo.alt}
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

Remote images require an allowlist in `next.config.ts`:

```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.example.com', pathname: '/images/**' },
    ],
    // images.domains is deprecated in v16 — use remotePatterns
  },
}
```

### 11. OG Image Generation (`opengraph-image.tsx`)

File-based OG images using `ImageResponse`. Next.js serves these automatically at `/og-image.png` for the route.

```typescript
// app/opengraph-image.tsx  — static, site-wide OG image
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#0f172a', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'white', fontSize: 72, fontWeight: 700 }}>My App</h1>
    </div>
  )
}

// app/blog/[slug]/opengraph-image.tsx  — dynamic, per-post OG image
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export default async function OGImage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: 80, background: '#0f172a' }}>
      <p style={{ color: '#94a3b8', fontSize: 28 }}>{post.category}</p>
      <h1 style={{ color: 'white', fontSize: 64, fontWeight: 700, marginTop: 16 }}>{post.title}</h1>
    </div>
  )
}
```

> OG images are cached and served as static assets. Use `export const runtime = 'edge'` for fastest cold starts. Only inline styles work inside `ImageResponse` — no Tailwind or CSS modules.

---

## Caching

> **v16 default**: All routes are dynamic by default. Opt into caching explicitly with `"use cache"` or `fetch` options.

### fetch-level caching

```typescript
fetch(url, { cache: 'no-store' })                   // Dynamic — every request
fetch(url, { cache: 'force-cache' })                // Static — cached forever
fetch(url, { next: { revalidate: 60 } })            // ISR — revalidate after 60s
fetch(url, { next: { tags: ['products'] } })        // Tag-based invalidation
```

### `"use cache"` directive (v16)

Cache pages, components, or functions explicitly. The compiler auto-generates cache keys.

```typescript
// Enable in next.config.ts
const nextConfig = { cacheComponents: true }

// Cache an entire page
'use cache'
export default async function ProductsPage() {
  const products = await db.products.findMany()
  return <ProductGrid products={products} />
}

// Cache a single function
async function getProductData(id: string) {
  'use cache'
  return db.products.findUnique({ where: { id } })
}
```

### Invalidation APIs

| API                           | Where                           | Semantics                                                     |
| ----------------------------- | ------------------------------- | ------------------------------------------------------------- |
| `revalidateTag(tag, profile)` | Server Actions / Route Handlers | Stale-while-revalidate — user gets cached, background refresh |
| `updateTag(tag)`              | Server Actions only             | Read-your-writes — expires and immediately refetches          |
| `revalidatePath(path)`        | Server Actions / Route Handlers | Invalidate by URL path                                        |
| `refresh()`                   | Server Actions only             | Re-fetch uncached dynamic data only                           |

```typescript
'use server'
import { revalidateTag, revalidatePath } from 'next/cache'
import { updateTag, refresh } from 'next/cache'

// Stale-while-revalidate: user sees old data, bg refreshes
export async function publishPost(id: string) {
  await db.posts.publish(id)
  revalidateTag('posts', 'max')   // ✅ v16 — second arg required
  revalidatePath('/blog')
}

// Read-your-writes: user sees their change immediately
export async function updateUserProfile(userId: string, data: Profile) {
  await db.users.update(userId, data)
  updateTag(`user-${userId}`)     // ✅ Server Actions only
}

// Refresh uncached dynamic data (e.g. notification counts)
export async function markNotificationRead(id: string) {
  await db.notifications.markAsRead(id)
  refresh()
}
```

---

## Best Practices

| ✅ Do                                                                                 | ❌ Don't                                           |
| ------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Server Components by default                                                          | `'use client'` everywhere                          |
| Colocate data fetching where it's used                                                | Fetch in Client Components                         |
| Use Suspense boundaries for slow data                                                 | Skip loading states                                |
| Use `error.tsx` for error boundaries                                                  | Ignore error handling                              |
| Enable `reactCompiler: true` for auto-memoization                                     | Manual `useMemo`/`useCallback` everywhere          |
| Use `"use cache"` for explicit opt-in caching                                         | Rely on implicit/magic caching from older versions |
| `revalidateTag(tag, 'max')` for SWR; `updateTag(tag)` in Actions for read-your-writes | Single-arg `revalidateTag()` (deprecated in v16)   |
| Use `proxy.ts` for request interception                                               | `middleware.ts` (deprecated in v16)                |
| All parallel route slots have a `default.tsx`                                         | Missing `default.tsx` (build will fail in v16)     |
| Validate inputs in Server Actions (e.g. Zod)                                          | Trust unvalidated form data                        |
| Return proper HTTP status codes from Route Handlers                                   | Ignore error boundaries                            |
| `next/image` with priority + blur placeholder                                         | Raw `<img>` tags                                   |
