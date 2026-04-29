import Link from "next/link";

export default function ContactPage() {
  const subject = encodeURIComponent("LoreTrip — early access");
  const body = encodeURIComponent(
    "Hi,\n\nI run a specialist travel agency and I'd like to learn more about LoreTrip.\n\nAgency:\nRegion or specialty:\nWebsite:\n\nThanks,\n",
  );
  const mailto = `mailto:alen.sevsek@gmail.com?subject=${subject}&body=${body}`;

  return (
    <>
      <section className="page-head container">
        <p className="lt-eyebrow">Early access</p>
        <h1 className="lt-h1">
          Talk to us.{" "}
          <span className="lt-display-italic">No deck, no funnel.</span>
        </h1>
        <p className="lt-lede">
          LoreTrip is in private build. We're working with a small group of launch partners — most
          of them specialist agencies in regions we know well. If that sounds like your agency,
          send a short note and we'll get on a call.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: "clamp(72px, 10vw, 128px)" }}>
        <div className="contact">
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p className="lt-body" style={{ color: "var(--lt-foundation)" }}>
              The fastest path is email. Tell us what your agency specialises in — a region, a
              style, a type of traveler — and a sentence or two about how you currently put a
              proposal together.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={mailto} className="btn btn--primary">
                Email alen.sevsek@gmail.com
              </Link>
              <Link href="/demo" className="btn btn--ghost">
                See the demo first <span className="arrow">→</span>
              </Link>
            </div>
            <p className="lt-meta">
              We reply within two business days. Replies come from a real person.
            </p>
          </div>

          <aside className="contact__card">
            <h3>What we'll ask you</h3>
            <ul className="contact__list">
              <li><b>Agency</b><span>name + website</span></li>
              <li><b>Specialty</b><span>region, style, or traveler</span></li>
              <li><b>Team</b><span>number of advisors</span></li>
              <li><b>Volume</b><span>trips per month, roughly</span></li>
              <li><b>Tools</b><span>what you use today</span></li>
            </ul>
            <p className="lt-meta" style={{ marginTop: 4 }}>
              Nothing fancy. Five lines is enough to start the conversation.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--lt-surface)", borderTop: "1px solid var(--lt-rule)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <p className="lt-eyebrow">About</p>
            <h2 className="lt-h2" style={{ marginTop: 14 }}>
              Built by people who've sold travel.
            </h2>
          </div>
          <p className="lt-body" style={{ color: "var(--lt-foundation)", maxWidth: "56ch" }}>
            LoreTrip is built on Claude by Anthropic and developed in close collaboration with
            specialist agencies — starting with mijnslovenie.com. We're an Anthropic Partner
            Network applicant; if you're reviewing this from Anthropic, the demo tab shows the
            first live deployment.
          </p>
        </div>
      </section>
    </>
  );
}
