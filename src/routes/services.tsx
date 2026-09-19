import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Icon } from "@/components/icon";
import { services, garmentItems, bagOptions } from "@/lib/catalog";
import { useCart, money } from "@/lib/cart";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — FreshFold" },
      {
        name: "description",
        content:
          "Compare FreshFold prices for wash & fold bags, dry cleaning, ironing, bedding and express service, then build your order.",
      },
      { property: "og:title", content: "Services & Pricing — FreshFold" },
      {
        property: "og:description",
        content:
          "Compare FreshFold prices for wash & fold bags, dry cleaning, ironing, bedding and express service, then build your order.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const { bagId, setBag, setItemQty, qtyOf, itemCount, total } = useCart();

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      <SiteNav />

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
        <h1 className="text-display-lg">Services & pricing</h1>
        <p className="mt-2 max-w-2xl text-body-lg text-on-surface-variant">
          Choose a wash & fold bag size, add individual garments for dry cleaning or pressing, then head to checkout to
          pick your pickup window.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-12">
            {/* Bags */}
            <section>
              <h2 className="text-headline-xl">1. Wash & fold bag</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {bagOptions.map((b) => {
                  const active = bagId === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setBag(b.id)}
                      className={`rounded-2xl border-2 p-5 text-left transition-all ${
                        active
                          ? "border-brand bg-brand-fixed/40 shadow-md"
                          : "border-outline-variant/60 bg-surface-container-lowest hover:border-brand/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon name={b.icon} className="text-2xl text-brand" fill />
                        {active && <Icon name="check_circle" className="text-xl text-brand" fill />}
                      </div>
                      <h3 className="mt-3 text-headline-sm">{b.name}</h3>
                      <p className="text-label-md text-on-surface-variant">{b.detail}</p>
                      <p className="mt-3 text-headline-lg text-brand">{money(b.price)}</p>
                      <p className="text-label-md text-on-surface-variant">{b.hint}</p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Garments */}
            <section>
              <h2 className="text-headline-xl">2. Add individual garments</h2>
              <div className="mt-5 divide-y divide-outline-variant/50 overflow-hidden rounded-2xl border border-outline-variant/60 bg-surface-container-lowest">
                {garmentItems.map((g) => {
                  const qty = qtyOf(g.id);
                  return (
                    <div key={g.id} className="flex items-center gap-4 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-container text-brand">
                        <Icon name={g.icon} className="text-2xl" fill />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-label-lg font-bold">{g.name}</p>
                        <p className="text-body-sm text-on-surface-variant">{g.note}</p>
                      </div>
                      <span className="text-headline-sm text-brand">{money(g.price)}</span>
                      <div className="flex items-center gap-2 rounded-full border border-outline-variant/60 px-1 py-1">
                        <button
                          aria-label={`Remove one ${g.name}`}
                          onClick={() =>
                            setItemQty(
                              { id: g.id, name: g.name, detail: g.note, unitPrice: g.price },
                              Math.max(0, qty - 1),
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container"
                        >
                          <Icon name="remove" className="text-lg" />
                        </button>
                        <span className="w-5 text-center text-label-lg font-bold">{qty}</span>
                        <button
                          aria-label={`Add one ${g.name}`}
                          onClick={() =>
                            setItemQty({ id: g.id, name: g.name, detail: g.note, unitPrice: g.price }, qty + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-on-brand hover:bg-brand-container"
                        >
                          <Icon name="add" className="text-lg" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Detail cards */}
            <section className="space-y-4">
              <h2 className="text-headline-xl">Service details</h2>
              {services.map((s) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-brand">
                        <Icon name={s.icon} className="text-2xl" fill />
                      </div>
                      <div>
                        <h3 className="text-headline-sm">{s.name}</h3>
                        <p className="text-label-md text-on-surface-variant">Turnaround: {s.turnaround}</p>
                      </div>
                    </div>
                    <p className="text-headline-lg text-brand">
                      {s.price} <span className="text-label-md font-medium text-on-surface-variant">{s.unit}</span>
                    </p>
                  </div>
                  <p className="mt-4 text-body-md text-on-surface-variant">{s.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-surface-container px-3 py-1 text-label-md text-on-surface-variant"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          </div>

          {/* Summary rail */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="text-headline-sm">Your basket</h2>
              <p className="mt-1 text-body-sm text-on-surface-variant">{itemCount} item(s) selected</p>
              <p className="mt-4 text-display-lg text-brand">{money(total)}</p>
              <p className="text-label-md text-on-surface-variant">Includes 20% first-order discount & tax</p>
              <Link
                to="/checkout"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-label-lg font-bold text-on-brand transition-colors hover:bg-brand-container"
              >
                Continue to schedule
                <Icon name="arrow_forward" className="text-xl" />
              </Link>
              <ul className="mt-5 space-y-2 text-body-sm text-on-surface-variant">
                <li className="flex gap-2">
                  <Icon name="check" className="text-base text-brand" /> Free pickup & delivery
                </li>
                <li className="flex gap-2">
                  <Icon name="check" className="text-base text-brand" /> Pay after pickup confirmation
                </li>
                <li className="flex gap-2">
                  <Icon name="check" className="text-base text-brand" /> Damage-free guarantee
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
