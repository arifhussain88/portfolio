import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wrap flex min-h-screen flex-col justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-foreground md:text-7xl">
        This page is <span className="font-serif font-normal text-accent italic">not here.</span>
      </h1>
      <Link
        href="/"
        className="mt-10 inline-flex w-fit rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
      >
        Back to the homepage
      </Link>
    </div>
  );
}
