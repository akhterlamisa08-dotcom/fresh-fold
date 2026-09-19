import { Link } from "@tanstack/react-router";
import { Icon } from "./icon";
import { useCart, money } from "@/lib/cart";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_DJz7pDcA4OlNck1xwPAp8LITnJoEy3VI-BAek1NjbyTgEV2-SO1p3s1IZDFzPbyBZRIRiep0AOXmUdmt1btWh5zPp2jLywNxPSO3ug4sTPUMJ8lyNpBb8lwuNemIrps7g0vgWDPZY41jmTFrhi3F1DpXxUmBYJhzRoY_IsVm5lrafd71Gs-Q51NRwz4NeleJMGqUITWoTus3YpMxUjgNnflszdmaaiqNIUJpL_DHpK64K1jBDqQp";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/checkout", label: "Schedule & Pay" },
  { to: "/dashboard", label: "My Orders" },
] as const;

export function SiteNav() {
  const { itemCount, total } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface-container-lowest shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-container text-on-brand shadow-sm transition-transform group-hover:scale-105">
              <Icon name="local_laundry_service" className="text-2xl" fill />
            </div>
            <span className="text-headline-xl font-extrabold tracking-tight text-brand">FreshFold</span>
          </Link>
          <button className="hidden items-center gap-2 rounded-lg border border-outline-variant/40 bg-surface-container-low px-3 py-1.5 text-left transition-colors hover:bg-surface-container md:flex">
            <Icon name="location_on" className="text-lg text-brand" fill />
            <span className="flex flex-col">
              <span className="text-label-sm leading-none text-on-surface-variant">Deliver to:</span>
              <span className="flex items-center gap-1 text-label-md font-semibold text-on-surface">
                Greenwood Ave, Apt 4B
                <Icon name="expand_more" className="text-sm" />
              </span>
            </span>
          </button>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="pb-1 text-label-lg font-medium text-on-surface-variant transition-colors hover:text-brand"
              activeProps={{ className: "pb-1 text-label-lg font-bold text-brand border-b-2 border-brand" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/dashboard"
            hash="notifications"
            aria-label="Notifications"
            className="relative rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-brand"
          >
            <Icon name="notifications" className="text-2xl" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[9px] font-bold text-on-danger">
              2
            </span>
          </Link>
          <Link
            to="/checkout"
            className="flex items-center gap-2.5 rounded-lg bg-brand px-4 py-2 text-label-lg font-bold text-on-brand shadow-sm transition-all hover:bg-brand-container active:scale-95"
          >
            <Icon name="shopping_bag" className="text-xl" fill />
            <span className="hidden sm:inline">Cart ({itemCount})</span>
            <span className="rounded bg-on-brand/20 px-1.5 py-0.5 text-xs font-semibold">{money(total)}</span>
          </Link>
          <Link
            to="/dashboard"
            className="hidden items-center gap-2 rounded-full border border-outline-variant/60 p-1 pl-2 transition-colors hover:bg-surface-container-low sm:flex"
          >
            <Icon name="menu" className="hidden text-lg text-outline sm:inline" />
            <img alt="Your profile" className="h-7 w-7 rounded-full border border-outline-variant/30 object-cover" src={AVATAR} />
          </Link>
        </div>
      </div>
    </header>
  );
}
