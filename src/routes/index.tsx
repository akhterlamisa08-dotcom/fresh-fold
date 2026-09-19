import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Icon } from "@/components/icon";
import { services } from "@/lib/catalog";

const HERO =
  "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreshFold — Laundry & Dry Cleaning at Your Door" },
      {
        name: "description",
        content:
          "Schedule a pickup in 60 seconds. Wash & fold, dry cleaning, ironing and 6-hour express laundry delivered back fresh.",
      },
      { property: "og:title", content: "FreshFold — Laundry & Dry Cleaning at Your Door" },
      {
        property: "og:description",
        content:
          "Schedule a pickup in 60 seconds. Wash & fold, dry cleaning, ironing and 6-hour express laundry delivered back fresh.",
      },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Home,
});

const steps = [
  { icon: "event_available", title: "Book a slot", text: "Pick a 2-hour pickup window, today or later this week." },
  { icon: "local_shipping", title: "We collect", text: "A vetted FreshFold driver arrives with sealed, reusable bags." },
  { icon: "local_laundry_service", title: "We clean", text: "Sorted, treated and finished by garment-care specialists." },
  { icon: "home", title: "Back to you", text: "Folded or hung, delivered to your door in as little as 6 hours." },
];

const reviews = [
  { name: "Aisha R.", role: "Consultant", stars: 5, text: "My suits come back sharper than the dry cleaner down the street, and I never leave the flat." },
  { name: "Daniel K.", role: "Final-year student", stars: 5, text: "£21 for a full hamper, picked up Sunday night, back Monday evening. Life-changing during exams." },
  { name: "The Okafor family", role: "Household of five", stars: 4, text: "Bedding and school uniforms in one order. The tracking map keeps the kids entertained too." },
];

function Home() {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-container-low">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-fixed px-3 py-1 text-label-md font-bold text-on-brand-fixed-variant">
                <Icon name="bolt" className="text-base" fill />
                Free pickup & delivery on every order
              </span>
              <h1 className="mt-5 text-display-lg text-on-surface sm:text-[52px] sm:leading-[58px]">
                Laundry day, handled.
                <span className="block text-brand">In 60 seconds.</span>
              </h1>
              <p className="mt-5 max-w-xl text-body-lg text-on-surface-variant">
                Wash & fold, dry cleaning, ironing and express service — collected from your door, cared for by
                specialists, and returned fresh, folded and ready to wear.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-label-lg font-bold text-on-brand shadow-sm transition-all hover:bg-brand-container active:scale-95"
                >
                  <Icon name="add_shopping_cart" className="text-xl" fill />
                  Schedule a pickup
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl border border-outline-variant bg-surface-container-lowest px-6 py-3.5 text-label-lg font-bold text-on-surface transition-colors hover:bg-surface-container"
                >
                  <Icon name="local_shipping" className="text-xl" />
                  Track my order
                </Link>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                {[
                  ["6 hrs", "Express turnaround"],
                  ["4.9★", "From 12,400 reviews"],
                  ["100%", "Damage-free guarantee"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-surface-container-lowest p-4 shadow-sm">
                    <dt className="text-headline-lg text-brand">{v}</dt>
                    <dd className="mt-1 text-label-md text-on-surface-variant">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <img
                src={HERO}
                alt="Neatly folded fresh laundry"
                className="h-[420px] w-full rounded-3xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-surface-container-lowest p-4 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-fixed text-on-brand-fixed-variant">
                  <Icon name="verified" className="text-2xl" fill />
                </div>
                <div>
                  <p className="text-label-lg font-bold">Order #FF-2841 delivered</p>
                  <p className="text-label-md text-on-surface-variant">18 items • 4 hrs 12 min</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-headline-xl">Pick a service</h2>
              <p className="mt-1 text-body-md text-on-surface-variant">
                Transparent per-item and per-bag pricing. No hidden fees, ever.
              </p>
            </div>
            <Link to="/services" className="text-label-lg font-bold text-brand hover:underline">
              See full price list →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.id}
                to="/services"
                hash={s.id}
                className="group flex flex-col rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-brand">
                  <Icon name={s.icon} className="text-2xl" fill />
                </div>
                <h3 className="mt-4 text-headline-sm">{s.name}</h3>
                <p className="mt-2 flex-1 text-body-sm text-on-surface-variant">{s.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-outline-variant/50 pt-4">
                  <span className="text-headline-sm text-brand">
                    {s.price} <span className="text-label-md font-medium text-on-surface-variant">{s.unit}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-surface-container px-2.5 py-1 text-label-md text-on-surface-variant">
                    <Icon name="schedule" className="text-sm" />
                    {s.turnaround}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-surface-container-low py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <h2 className="text-headline-xl">How FreshFold works</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.title} className="relative rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
                  <span className="absolute right-5 top-5 text-headline-xl font-extrabold text-surface-variant">
                    {i + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-on-brand">
                    <Icon name={s.icon} className="text-2xl" fill />
                  </div>
                  <h3 className="mt-4 text-headline-sm">{s.title}</h3>
                  <p className="mt-2 text-body-sm text-on-surface-variant">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offers */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-headline-xl">Offers & discounts</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl bg-brand p-7 text-on-brand shadow-sm">
              <p className="text-label-md uppercase opacity-80">First order</p>
              <p className="mt-2 text-display-lg leading-none">20% off</p>
              <p className="mt-3 text-body-md opacity-90">Automatically applied with code FRESH20 at checkout.</p>
              <Link
                to="/checkout"
                className="mt-6 inline-flex rounded-lg bg-on-brand px-5 py-2.5 text-label-lg font-bold text-brand"
              >
                Claim now
              </Link>
            </div>
            <div className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-7 shadow-sm">
              <Icon name="repeat" className="text-3xl text-info" fill />
              <h3 className="mt-3 text-headline-sm">Weekly plan — save 15%</h3>
              <p className="mt-2 text-body-sm text-on-surface-variant">
                Same slot every week, billed automatically, cancel any time.
              </p>
            </div>
            <div className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-7 shadow-sm">
              <Icon name="redeem" className="text-3xl text-warn" fill />
              <h3 className="mt-3 text-headline-sm">Refer a friend</h3>
              <p className="mt-2 text-body-sm text-on-surface-variant">
                You both get $10 credit once their first order is delivered.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-surface-container-low py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <h2 className="text-headline-xl">Loved by busy people</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
                  <div className="flex gap-0.5 text-warn">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name={i < r.stars ? "star" : "star_border"} className="text-lg" fill={i < r.stars} />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-body-md text-on-surface">“{r.text}”</blockquote>
                  <figcaption className="mt-4 text-label-md text-on-surface-variant">
                    <span className="font-bold text-on-surface">{r.name}</span> • {r.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
