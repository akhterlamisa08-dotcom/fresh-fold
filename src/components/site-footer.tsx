import { Link } from "@tanstack/react-router";
import { Icon } from "./icon";

const columns = [
  { title: "Services", items: ["Wash & Fold", "Dry Cleaning", "Steam Press", "Shoe & Linen Care"] },
  { title: "Pricing & Tools", items: ["Weight Calculator", "Service Areas", "Eco-Friendly Guarantee"] },
  { title: "Assistance", items: ["Help & Live Chat", "Order Status", "Valet Direct"] },
  { title: "Legal", items: ["Terms of Service", "Privacy Policy", "Safety Standards"] },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-outline-variant/60 pb-8 md:flex-row md:items-center">
          <div>
            <Link to="/" className="flex items-center gap-2 text-headline-lg font-bold text-brand">
              <Icon name="local_laundry_service" className="text-[26px]" fill />
              FreshFold
            </Link>
            <p className="mt-1 text-body-sm text-on-surface-variant">
              Pure hygiene, zero friction. High-velocity garment logistics tailored to modern living.
            </p>
          </div>
          <div className="flex items-center gap-4 text-label-md text-on-surface-variant">
            <span className="flex items-center gap-1">
              <Icon name="check_circle" className="text-[18px] text-brand" /> 100% Carbon Offset
            </span>
            <span className="flex items-center gap-1">
              <Icon name="lock" className="text-[18px] text-brand" /> Contactless Delivery
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((c) => (
            <div key={c.title}>
              <h5 className="mb-3 text-label-lg font-bold text-on-surface">{c.title}</h5>
              <ul className="space-y-2 text-label-md text-on-surface-variant">
                {c.items.map((i) => (
                  <li key={i}>
                    <span className="cursor-pointer transition-colors hover:text-brand hover:underline">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5 className="mb-3 text-label-lg font-bold text-on-surface">Clean Promise</h5>
            <p className="text-body-sm leading-relaxed text-on-surface-variant">
              Medical-grade sanitizing detergents tested against common allergens, with a zero missing item guarantee.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/60 pt-6 text-body-sm text-on-surface-variant sm:flex-row">
          <span>© 2024 FreshFold Logistics Inc. All rights reserved. Pure hygiene, zero friction.</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-brand" />
            Operations live across Greenwood & Metro Hubs
          </span>
        </div>
      </div>
    </footer>
  );
}
