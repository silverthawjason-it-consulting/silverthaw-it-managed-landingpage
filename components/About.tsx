const CREDS: [string, string, string][] = [
  [
    "01",
    "Your strategic IT advisor.",
    " Jason owns the relationship, assesses your needs, builds the roadmap, and is the single point of accountability for everything Silverthaw delivers",
  ],
  [
    "02",
    "Backed by a team of specialists.",
    " Helpdesk, cybersecurity, infrastructure, and cloud are handled by Silverthaw's vetted network of IT professionals, coordinated by Jason on your behalf",
  ],
  [
    "03",
    "Vendor-neutral software selection.",
    " 25+ years at Oracle, SAP, and across the Ontario partner ecosystem means Jason evaluates the market without bias, and with real implementation experience",
  ],
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-5 py-section-sm sm:px-6 sm:py-section"
    >
      <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        {/* imagen */}
        <div className="reveal relative">
          <div className="relative aspect-square max-w-[380px] overflow-hidden rounded-[20px] lg:aspect-[4/5] lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Jason_Headshot.jpg"
              alt="Jason Saunders, Founder, Silverthaw Consulting"
              className="h-full w-full object-cover object-[top_center]"
            />
          </div>
          <div className="absolute -bottom-[22px] -right-[18px] rounded-[16px] bg-navy px-[22px] py-[18px] text-white shadow-lift">
            <p className="font-serif text-[38px] font-extrabold leading-none">
              25+
            </p>
            <p className="mt-[3px] text-[10px] font-bold uppercase tracking-[.1em] opacity-60">
              Years in
              <br />
              Enterprise IT
            </p>
          </div>
        </div>

        {/* contenido */}
        <div>
          <p className="reveal mb-[18px] text-[10.5px] font-bold uppercase tracking-[0.2em] text-navy/[0.45]">
            Your Dedicated IT Partner
          </p>
          <h2 className="reveal d1 mb-[22px] font-serif text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.18] text-navy">
            You Don&apos;t Get a
            <br />
            Ticket Queue.
            <br />
            You Get a Dedicated Advisor.
          </h2>
          <div className="reveal d2 mb-[30px] text-[15.5px] leading-[1.82] text-ink-body [&>p+p]:mt-[14px]">
            <p>
              Jason Saunders has spent 25+ years at the intersection of enterprise technology and business strategy,
              advising at Oracle, SAP, and across hundreds of Ontario companies at every stage of growth.
            </p>
            <p>
              When you work with Silverthaw, Jason is your strategic IT advisor and the single point of accountability for everything Silverthaw delivers. He learns your business, defines your technology roadmap, and manages a dedicated team of IT specialists, including helpdesk, cybersecurity, infrastructure, and cloud, who execute on your behalf. You get the depth of a full IT department, guided by an advisor who understands your business goals, not just your ticket queue.
            </p>
            <p>
              Not a rotating cast of anonymous technicians. A named advisor who owns the relationship, backed by the right specialists for every layer of the job.
            </p>
          </div>

          <div className="reveal d3 flex flex-col gap-[15px]">
            {CREDS.map(([n, bold, rest]) => (
              <div key={n} className="flex items-start gap-[14px]">
                <span className="shrink-0 pt-[3px] font-serif text-[12px] font-bold tracking-[.04em] text-navy opacity-35">
                  {n}
                </span>
                <div className="mt-[11px] h-[1.5px] w-[22px] shrink-0 bg-silver" />
                <p className="text-[13.5px] leading-[1.62] text-ink-body">
                  <strong>{bold}</strong>
                  {rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
