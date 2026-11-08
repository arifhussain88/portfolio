/*
 * Illustrated, code-drawn previews of the two newest products.
 * They use each product's own palette, so they look the same in light and dark mode.
 */

export function NorthlinePreview() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]" aria-hidden="true">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#FBF5EE] shadow-[0_30px_60px_-30px_rgba(122,31,61,0.55)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.4deg]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-black/5 bg-white px-3 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 truncate rounded-md bg-[#f2f0ed] px-3 py-1 font-mono text-[0.62rem] text-[#7d6a6f]">
            northline-revamp.vercel.app
          </span>
        </div>

        {/* Store header */}
        <div className="flex items-center gap-3 bg-[#7A1F3D] px-4 py-2.5">
          <span className="text-sm font-bold text-white">Northline</span>
          <span className="flex flex-1 overflow-hidden rounded-md">
            <span className="flex-1 bg-white px-2 py-1 text-[0.6rem] text-[#7d6a6f]">Search Northline</span>
            <span className="bg-[#E8A33D] px-2 py-1 text-[0.6rem] font-semibold text-[#3b0f1e]">Search</span>
          </span>
          <span className="text-[0.6rem] leading-tight text-white/85">
            Account
            <br />& Orders
          </span>
        </div>
        <div className="flex gap-3 overflow-hidden bg-[#5f1730] px-4 py-1.5 text-[0.55rem] whitespace-nowrap text-white/80">
          <span>☰ All</span>
          <span>Electronics</span>
          <span>Home & Kitchen</span>
          <span>Clothing</span>
          <span>Beauty</span>
          <span>Sports</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-[1.1fr_1fr] items-center gap-4 bg-[#7A1F3D] px-5 pt-5 pb-6">
          <div>
            <p className="text-[0.55rem] font-semibold text-[#E8A33D]">Everyday goods</p>
            <p className="mt-1 text-[1.05rem] leading-[1.1] font-bold tracking-tight text-white">
              Goods for the house, the closet, and the trip.
            </p>
            <span className="mt-3 inline-block rounded-md bg-[#E8A33D] px-2.5 py-1 text-[0.55rem] font-semibold text-[#3b0f1e]">
              Browse everything
            </span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#3a2a22] via-[#5a4334] to-[#2b1f19]">
            <div className="absolute top-[18%] left-1/2 h-[64%] w-[46%] -translate-x-1/2 rounded-t-[40%] rounded-b-md bg-[repeating-linear-gradient(45deg,#a08466_0_3px,#8a6f54_3px_6px)] shadow-lg" />
            <div className="absolute top-[10%] left-1/2 h-3 w-6 -translate-x-1/2 rounded-t-full border-2 border-b-0 border-[#c8b8a6]" />
          </div>
        </div>

        {/* Departments */}
        <div className="px-5 pt-4 pb-5">
          <p className="text-[0.65rem] font-semibold text-[#2a1a1f]">Shop by department</p>
          <div className="mt-2.5 grid grid-cols-6 gap-2">
            {["#F3E9EC", "#FBEFD9", "#F3E9EC", "#FBEFD9", "#F3E9EC", "#FBEFD9"].map((bg, i) => (
              <span key={i} className="grid aspect-square place-items-center rounded-lg border border-black/5 bg-white">
                <span className="size-3.5 rounded-[4px]" style={{ background: bg, boxShadow: "inset 0 0 0 1.5px #7A1F3D" }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating cart card */}
      <div className="absolute right-1 -bottom-6 w-40 sm:-right-3 sm:w-44 rounded-xl border border-black/10 bg-white p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 md:-right-8">
        <p className="text-[0.6rem] font-semibold text-[#2a1a1f]">Cart · 3 items</p>
        <div className="mt-2 flex items-center justify-between text-[0.6rem] text-[#7d6a6f]">
          <span>Subtotal</span>
          <span className="font-semibold text-[#2a1a1f]">$42.97</span>
        </div>
        <div className="mt-1 flex items-center justify-between text-[0.6rem] text-[#7d6a6f]">
          <span>Shipping</span>
          <span className="font-semibold text-[#15803d]">Free</span>
        </div>
        <span className="mt-2.5 block rounded-md bg-[#E8A33D] py-1 text-center text-[0.6rem] font-semibold text-[#3b0f1e]">
          Proceed to checkout
        </span>
      </div>
    </div>
  );
}

function Student({ color, eyes = "dots" }: { color: string; eyes?: "dots" | "rings" }) {
  return (
    <span className="relative inline-block h-7 w-6" style={{ color }}>
      <span className="absolute top-0 left-1/2 size-4 -translate-x-1/2 rounded-full bg-current" />
      <span className="absolute bottom-0 left-0 h-3.5 w-6 rounded-t-lg bg-current" />
      <span className="absolute top-1.5 left-[0.55rem] flex gap-[3px]">
        {eyes === "dots" ? (
          <>
            <span className="size-[3px] rounded-full bg-black/70" />
            <span className="size-[3px] rounded-full bg-black/70" />
          </>
        ) : (
          <>
            <span className="size-[4px] rounded-full border border-black/70" />
            <span className="size-[4px] rounded-full border border-black/70" />
          </>
        )}
      </span>
    </span>
  );
}

export function ChalkbackPreview() {
  return (
    <div className="relative mx-auto flex w-full max-w-[34rem] justify-center py-2" aria-hidden="true">
      {/* Phone */}
      <div className="relative w-[15.5rem] rounded-[2.6rem] bg-[#111] p-2.5 shadow-[0_40px_70px_-30px_rgba(0,0,0,0.6)] ring-1 ring-black/40 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[0.6deg]">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-white">
          <div className="absolute top-2 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-[#111]" />
          <div className="px-4 pt-10 pb-4 text-[#111]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[0.72rem] font-extrabold tracking-tight">
                <span className="grid size-4 place-items-center rounded-[4px] bg-[#111] text-[0.5rem] text-white">c</span>
                chalkback
              </span>
              <span className="rounded-full border border-black/10 px-2 py-0.5 font-mono text-[0.5rem]">Q 2 / 4</span>
            </div>

            <p className="mt-3 font-mono text-[0.5rem] tracking-widest text-black/45 uppercase">
              Teach · Small habits
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-full bg-[#fff2e8] px-2 py-0.5 text-[0.55rem] font-semibold text-[#c2531c]">
                ● Maya ✋
              </span>
              <span className="flex items-center gap-1 rounded-full bg-[#f0eeff] px-2 py-0.5 text-[0.55rem] font-semibold text-[#5848d6]">
                ● Omar
              </span>
            </div>

            <div className="mt-3 flex items-end gap-2">
              <Student color="#ec8a4a" />
              <p className="rounded-2xl rounded-bl-sm bg-[#f4f4f4] px-3 py-2 text-[0.62rem] leading-snug">
                How can big challenges stick if we only do small things?
              </p>
            </div>

            <div className="mt-2.5 flex justify-end">
              <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#111] px-3 py-2 text-[0.62rem] leading-snug text-white">
                I said it backwards. Small ones last.
              </p>
            </div>

            <div className="mt-2.5 flex items-end gap-2">
              <Student color="#8d7cff" eyes="rings" />
              <p className="rounded-2xl rounded-bl-sm bg-[#f4f4f4] px-3 py-2 text-[0.62rem] leading-snug">
                The video also covers confidence. <span className="bg-[#f6f15b] px-0.5">You skipped it.</span>
              </p>
            </div>

            <div className="mt-4 flex items-center gap-1.5 rounded-xl border border-black/10 px-2.5 py-2">
              <span className="flex-1 text-[0.58rem] text-black/40">Explain it in your own words…</span>
              <span className="grid size-5 place-items-center rounded-full bg-[#111] text-[0.55rem] text-white">↑</span>
            </div>
            <p className="mt-2 text-center font-mono text-[0.48rem] tracking-widest text-black/45 uppercase">
              I&apos;ll be back · Skip · End
            </p>
          </div>
        </div>

        {/* Floating results card */}
        <div className="absolute top-28 -left-28 hidden w-36 rounded-2xl border border-black/10 bg-white p-3 text-[#111] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.45)] sm:block">
        <p className="font-mono text-[0.5rem] tracking-widest text-black/45 uppercase">Results</p>
        <p className="mt-1 text-lg leading-none font-extrabold tracking-tight">
          2/5 <span className="text-black/30">→</span> <span className="bg-[#f6f15b] px-0.5">3/5</span>
        </p>
        <p className="mt-2 text-[0.55rem] text-black/55">Fixed in class</p>
      </div>

      {/* Floating warm-up card */}
        <div className="absolute -right-28 bottom-20 hidden w-36 rounded-2xl bg-[#111] p-3 text-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:block">
          <p className="font-mono text-[0.5rem] tracking-widest text-white/50 uppercase">Warm-up · 2 days</p>
          <p className="mt-1 text-[0.62rem] leading-snug">Growing self-confidence</p>
          <p className="mt-1.5 font-mono text-[0.55rem] text-[#f6f15b]">▶ 1:06</p>
        </div>
      </div>
    </div>
  );
}
