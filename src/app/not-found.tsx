import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
        404 — System Notice
      </span>
      <h1 className="mt-4 font-display text-4xl font-extrabold text-foreground md:text-6xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        The requested URL was not found on this server. Return to the main engineering portfolio.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-xs font-semibold text-white shadow-xs hover:bg-accent-dim transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
