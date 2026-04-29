import Image from "next/image";
import Link from "next/link";

type Shot = {
  src: string;
  alt: string;
  title: string;
  body: string;
  layout?: "default" | "reverse" | "full";
};

const clientFlow: Shot[] = [
  {
    src: "/screenshots/user-flow-1-start.png",
    alt: "Client-facing start screen, branded to mijnslovenie.com",
    title: "01 — Start, branded as the agency.",
    body:
      "The client lands on the agency's domain, in the agency's brand. There is no LoreTrip badge, no AI chrome — only the experience the agency designed.",
  },
  {
    src: "/screenshots/user-flow-2-tailored.png",
    alt: "Tailored entry tuned to agency specialisation",
    title: "02 — Tailored to specialisation.",
    body:
      "The intake is shaped around what this agency actually sells — Slovenia and the wider region. The model is set up by humans, executed by AI.",
    layout: "reverse",
  },
  {
    src: "/screenshots/user-flow-3-tiles.png",
    alt: "Clean tiles showing suggestions or packages",
    title: "03 — Suggestions or packages, side by side.",
    body:
      "Clean tiles let the client choose between curated suggestions or fixed agency packages. Inventory the agency stands behind, surfaced in a way that respects their taste.",
  },
  {
    src: "/screenshots/user-flow-4-curated.png",
    alt: "Curated content with agency branding throughout",
    title: "04 — Curated, never generic.",
    body:
      "Every place, every recommendation, every line of copy is filtered through the agency's curation. LoreTrip surfaces what the agency has approved — nothing else.",
    layout: "reverse",
  },
  {
    src: "/screenshots/user-flow-5-modifications.png",
    alt: "Modifications screen — client adjusts the proposal",
    title: "05 — Modifications without losing the plot.",
    body:
      "Clients can adjust dates, swap a stop, request something quieter — all inside the agency's flow. Changes route back to the advisor before they go live.",
  },
  {
    src: "/screenshots/user-flow-6-conversion.png",
    alt: "Conversion step — client commits to the trip",
    title: "06 — Conversion stays inside the agency.",
    body:
      "The booking moment happens on the agency's domain, with the agency's commercial terms. No third-party marketplace pulling the relationship sideways.",
    layout: "reverse",
  },
  {
    src: "/screenshots/user-flow-7-stripe.png",
    alt: "Payment flow via Stripe",
    title: "07 — Payment through the agency.",
    body:
      "Stripe handles the payment rails. Service fees, deposits, multi-currency invoicing — wired into the agency's existing setup.",
  },
];

const adminFlow: Shot[] = [
  {
    src: "/screenshots/admin-login.png",
    alt: "Admin login screen",
    title: "Login — for the advisor team.",
    body: "Quiet, restrained, infrastructural. The advisor side of the platform stays out of the way.",
  },
  {
    src: "/screenshots/admin-dashboard.png",
    alt: "Admin dashboard with agency overview",
    title: "Dashboard — the agency's operating view.",
    body: "Active proposals, in-flight clients, conversion state, advisor workload — at a glance.",
    layout: "reverse",
  },
  {
    src: "/screenshots/admin-venues-1.png",
    alt: "Curated venues view — agency's supplier list",
    title: "Curated venues — the agency's supplier list.",
    body: "The places the agency has personally vetted. The model proposes from this list, not from a generic web index.",
  },
  {
    src: "/screenshots/admin-venues-2.png",
    alt: "Curated venues view with human notes",
    title: "Human notes on every venue.",
    body: "Insider context — what to book, what to skip, who to ask for. The notes shape every proposal the model writes.",
    layout: "reverse",
  },
  {
    src: "/screenshots/admin-chips.png",
    alt: "Agency controls — tags, chips, filters",
    title: "Agency controls — chips, tags, filters.",
    body: "How the agency shapes what the AI can and can't recommend. The advisor draws the boundaries; the model works inside them.",
  },
];

export default function DemoPage() {
  return (
    <>
      <section className="page-head container">
        <p className="lt-eyebrow">Live white-label demo</p>
        <h1 className="lt-h1">
          A working deployment, for a real agency:{" "}
          <Link
            href="https://www.mijnslovenie.com"
            target="_blank"
            rel="noreferrer"
            style={{ fontStyle: "italic", color: "var(--lt-ember-deep)", borderBottom: "1px solid currentColor" }}
          >
            mijnslovenie.com
          </Link>.
        </h1>
        <p className="lt-lede">
          mijnslovenie.com is a Dutch-speaking specialist agency for trips to Slovenia. The
          screens below are their LoreTrip deployment — branded as theirs, end to end. Same
          platform, different brand. That is the product.
        </p>
      </section>

      <section className="container">
        <div className="demo-note">
          <span className="demo-note__pill">White-label</span>
          <p style={{ margin: 0 }}>
            The visual identity below is mijnslovenie.com's, not LoreTrip's. The platform always
            takes the brand of the agency it runs underneath. LoreTrip is the engine; the agency
            stays the brand.
          </p>
        </div>

        <div className="shot-group">
          <div className="shot-group__head">
            <p className="lt-eyebrow">Setup</p>
            <h2 className="lt-h2">First, the brand.</h2>
            <p className="lt-body">
              Before any client sees the planner, the agency configures their identity — colors,
              type, tone, supplier list. From that point on, LoreTrip disappears.
            </p>
          </div>

          <div className="shot shot--full">
            <div className="shot__copy">
              <p className="lt-eyebrow">Agency branding</p>
              <h3>The mijnslovenie.com identity, applied end-to-end.</h3>
              <p className="lt-body">
                One source of truth. Every screen the client sees — from intake to payment —
                inherits from this brand layer.
              </p>
            </div>
            <div className="shot__visual">
              <Image
                src="/screenshots/agency-branding.png"
                alt="Agency branding for mijnslovenie.com applied across the LoreTrip platform"
                width={2400}
                height={1500}
                priority
                sizes="(max-width: 880px) 100vw, 1180px"
              />
            </div>
          </div>
        </div>

        <div className="shot-group">
          <div className="shot-group__head">
            <p className="lt-eyebrow">Client flow</p>
            <h2 className="lt-h2">What the traveler sees.</h2>
            <p className="lt-body">
              Seven screens, in order. From the first impression on the agency's site, through
              tailored intake, curated suggestions, modifications, conversion, and payment —
              entirely on the agency's domain.
            </p>
          </div>

          {clientFlow.map((s) => (
            <ShotRow key={s.src} shot={s} />
          ))}
        </div>

        <div className="shot-group">
          <div className="shot-group__head">
            <p className="lt-eyebrow">Advisor flow</p>
            <h2 className="lt-h2">What the agency sees.</h2>
            <p className="lt-body">
              The operating side — login, dashboard, supplier curation, agency controls. Where
              the human expertise actually lives.
            </p>
          </div>

          {adminFlow.map((s) => (
            <ShotRow key={s.src} shot={s} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="lt-eyebrow">Want one of these for your agency?</p>
            <h2 className="lt-h2">
              Same platform.{" "}
              <span className="lt-display-italic">Your brand.</span>
            </h2>
            <p className="lt-body">
              We're working with a small group of launch partners. If your agency runs on
              expertise, taste, and trusted suppliers, get in touch.
            </p>
            <Link href="/contact" className="btn btn--primary">Request Early Access</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ShotRow({ shot }: { shot: Shot }) {
  const cls =
    shot.layout === "reverse" ? "shot shot--reverse" :
    shot.layout === "full" ? "shot shot--full" :
    "shot";
  return (
    <div className={cls}>
      <div className="shot__copy">
        <h3>{shot.title}</h3>
        <p className="lt-body">{shot.body}</p>
      </div>
      <div className="shot__visual">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={2400}
          height={1500}
          sizes="(max-width: 880px) 100vw, (max-width: 1180px) 60vw, 700px"
        />
      </div>
    </div>
  );
}
