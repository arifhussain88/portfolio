import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wrap flex min-h-screen flex-col justify-center py-24">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-3 font-display text-5xl leading-[1.05] font-medium tracking-tight text-foreground md:text-6xl">
        This page is not here.
      </h1>
      <Link href="/" className="link mt-8 inline-block">
        Back to the homepage
      </Link>
    </div>
  );
}
