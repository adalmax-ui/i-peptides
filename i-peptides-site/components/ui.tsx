import Link from "next/link";
import { clsx } from "clsx";

export function Badge({
  children,
  className,
  variant = "default"
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}) {
  return (
    <span className={clsx(
      "inline-flex items-center rounded-full px-2.5 py-1 text-xs",
      variant === "default" && "border border-slate-200 bg-white/70 text-slate-700",
      variant === "outline" && "border border-slate-300 bg-transparent text-slate-700",
      className
    )}>
      {children}
    </span>
  );
}

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "ghost" }) {
  const { className, variant = "solid", ...rest } = props;
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition",
        variant === "solid" &&
          "bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/60",
        variant === "ghost" &&
          "bg-transparent text-slate-800 hover:bg-white/60 border border-slate-200",
        className
      )}
      {...rest}
    />
  );
}

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-white/60 hover:text-slate-900">
      {children}
    </Link>
  );
}
