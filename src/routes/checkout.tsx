import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Icon } from "@/components/icon";
import { useCart, money } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Schedule & Pay — FreshFold" },
      {
        name: "description",
        content: "Choose your pickup window, confirm your address and pay securely for your FreshFold laundry order.",
      },
      { property: "og:title", content: "Schedule & Pay — FreshFold" },
      {
        property: "og:description",
        content: "Choose your pickup window, confirm your address and pay securely for your FreshFold laundry order.",
      },
    ],
  }),
  component: Checkout,
});

const days = ["Today, Wed Oct 24", "Thu, Oct 25", "Fri, Oct 26", "Sat, Oct 27"];
const slots = ["8:00 AM - 10:00 AM", "12:00 PM - 2:00 PM", "4:00 PM - 6:00 PM", "6:00 PM - 8:00 PM"];
const turnarounds = [
  { id: "Standard", label: "Standard", detail: "24-36 hrs • included" },
  { id: "Express", label: "Express", detail: "6 hrs • +35%" },
];
const addresses = [
  { id: "142 Greenwood Ave, Apt 4B", label: "Home", icon: "home", detail: "142 Greenwood Ave, Apt 4B • Leave with concierge" },
  { id: "9 Harbour St, Floor 12", label: "Office", icon: "apartment", detail: "9 Harbour St, Floor 12 • Reception desk" },
];
const payments = [
  { id: "card", label: "Visa •••• 4291", icon: "credit_card" },
  { id: "wallet", label: "FreshFold Wallet ($32.10)", icon: "account_balance_wallet" },
  { id: "cash", label: "Cash on delivery", icon: "payments" },
];

function Checkout() {
  const { lines, subtotal, discount, tax, total, schedule, setSchedule } = useCart();
  const [payment, setPayment] = useState("card");
  const [placed, setPlaced] = useState(false);

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      <SiteNav />

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
        <h1 className="text-display-lg">Schedule & pay</h1>
        <p className="mt-2 text-body-lg text-on-surface-variant">Two steps left — then your laundry is our problem.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            {/* Pickup */}
            <section className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-headline-sm">
                <Icon name="event" className="text-xl text-brand" fill /> Pickup window
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {days.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSchedule({ day: d })}
                    className={`rounded-xl border px-4 py-2.5 text-label-lg font-semibold transition-colors ${
                      schedule.day === d
                        ? "border-brand bg-brand text-on-brand"
                        : "border-outline-variant/60 text-on-surface-variant hover:bg-surface-container"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSchedule({ slot: s })}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-label-lg transition-colors ${
                      schedule.slot === s
                        ? "border-brand bg-brand-fixed/40 font-bold"
                        : "border-outline-variant/60 hover:bg-surface-container"
                    }`}
                  >
                    {s}
                    {schedule.slot === s && <Icon name="check_circle" className="text-lg text-brand" fill />}
                  </button>
                ))}
              </div>
            </section>

            {/* Turnaround */}
            <section className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-headline-sm">
                <Icon name="speed" className="text-xl text-brand" fill /> Turnaround speed
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {turnarounds.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSchedule({ turnaround: t.id })}
                    className={`rounded-xl border-2 p-4 text-left transition-colors ${
                      schedule.turnaround === t.id
                        ? "border-brand bg-brand-fixed/40"
                        : "border-outline-variant/60 hover:bg-surface-container"
                    }`}
                  >
                    <p className="text-label-lg font-bold">{t.label}</p>
                    <p className="text-body-sm text-on-surface-variant">{t.detail}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Address */}
            <section className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-headline-sm">
                <Icon name="location_on" className="text-xl text-brand" fill /> Pickup & delivery address
              </h2>
              <div className="mt-4 space-y-3">
                {addresses.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSchedule({ address: a.id })}
                    className={`flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
                      schedule.address === a.id
                        ? "border-brand bg-brand-fixed/40"
                        : "border-outline-variant/60 hover:bg-surface-container"
                    }`}
                  >
                    <Icon name={a.icon} className="text-2xl text-brand" fill />
                    <span className="flex-1">
                      <span className="block text-label-lg font-bold">{a.label}</span>
                      <span className="block text-body-sm text-on-surface-variant">{a.detail}</span>
                    </span>
                    {schedule.address === a.id && <Icon name="check_circle" className="text-xl text-brand" fill />}
                  </button>
                ))}
                <button className="flex w-full items-center gap-2 rounded-xl border border-dashed border-outline px-4 py-3 text-label-lg font-semibold text-brand hover:bg-surface-container">
                  <Icon name="add_location_alt" className="text-xl" /> Add a new address
                </button>
              </div>
            </section>

            {/* Payment */}
            <section className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-headline-sm">
                <Icon name="lock" className="text-xl text-brand" fill /> Payment method
              </h2>
              <div className="mt-4 space-y-3">
                {payments.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPayment(p.id)}
                    className={`flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
                      payment === p.id ? "border-brand bg-brand-fixed/40" : "border-outline-variant/60 hover:bg-surface-container"
                    }`}
                  >
                    <Icon name={p.icon} className="text-2xl text-brand" fill />
                    <span className="flex-1 text-label-lg font-bold">{p.label}</span>
                    {payment === p.id && <Icon name="check_circle" className="text-xl text-brand" fill />}
                  </button>
                ))}
              </div>
              <p className="mt-4 flex items-center gap-2 text-body-sm text-on-surface-variant">
                <Icon name="shield" className="text-base text-brand" fill />
                Payments are encrypted and only charged once your items are picked up.
              </p>
            </section>
          </div>

          {/* Summary */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="text-headline-sm">Order summary</h2>
              <ul className="mt-4 space-y-3">
                {lines.map((l) => (
                  <li key={l.id} className="flex justify-between gap-3">
                    <span>
                      <span className="block text-label-lg font-semibold">
                        {l.qty} × {l.name}
                      </span>
                      <span className="block text-body-sm text-on-surface-variant">{l.detail}</span>
                    </span>
                    <span className="text-label-lg font-bold">{money(l.qty * l.unitPrice)}</span>
                  </li>
                ))}
                {lines.length === 0 && (
                  <li className="text-body-sm text-on-surface-variant">
                    Your basket is empty —{" "}
                    <Link to="/services" className="font-bold text-brand hover:underline">
                      add a service
                    </Link>
                    .
                  </li>
                )}
              </ul>

              <dl className="mt-5 space-y-2 border-t border-outline-variant/50 pt-4 text-body-md">
                <div className="flex justify-between">
                  <dt className="text-on-surface-variant">Subtotal</dt>
                  <dd>{money(subtotal)}</dd>
                </div>
                <div className="flex justify-between text-brand">
                  <dt>Promo FRESH20</dt>
                  <dd>-{money(discount)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-on-surface-variant">Pickup & delivery</dt>
                  <dd className="font-semibold text-brand">Free</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-on-surface-variant">Tax</dt>
                  <dd>{money(tax)}</dd>
                </div>
                <div className="flex justify-between border-t border-outline-variant/50 pt-3 text-headline-sm">
                  <dt>Total</dt>
                  <dd className="text-brand">{money(total)}</dd>
                </div>
              </dl>

              <div className="mt-5 rounded-xl bg-surface-container p-4 text-body-sm">
                <p className="font-bold">{schedule.day}</p>
                <p className="text-on-surface-variant">
                  {schedule.slot} • {schedule.turnaround}
                </p>
                <p className="text-on-surface-variant">{schedule.address}</p>
              </div>

              {placed ? (
                <div className="mt-5 rounded-xl bg-brand-fixed p-4 text-on-brand-fixed">
                  <p className="flex items-center gap-2 text-label-lg font-bold">
                    <Icon name="check_circle" className="text-xl" fill /> Order #FF-2947 confirmed
                  </p>
                  <Link to="/dashboard" className="mt-2 inline-block text-label-lg font-bold underline">
                    Track it live →
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => setPlaced(true)}
                  disabled={lines.length === 0}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-label-lg font-bold text-on-brand transition-colors hover:bg-brand-container disabled:opacity-50"
                >
                  <Icon name="lock" className="text-xl" fill />
                  Pay {money(total)} & confirm
                </button>
              )}
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
