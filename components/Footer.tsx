import Link from "next/link";
import { Wordmark } from "./Marks";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <Wordmark size={28} color="var(--lt-linen)" markColor="var(--lt-ember)" />
            <p className="footer__tag">Human travel expertise, amplified by AI.</p>
          </div>
          <div className="footer__col">
            <h4>Product</h4>
            <Link href="/">Overview</Link>
            <Link href="/demo">Demo</Link>
            <Link href="/contact">Early access</Link>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/contact">Contact</Link>
            <a href="mailto:alen.sevsek@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer__bottom container" style={{ paddingInline: 0 }}>
          <span>© {new Date().getFullYear()} LoreTrip</span>
          <span>Built with Claude — Anthropic Partner Network</span>
        </div>
      </div>
    </footer>
  );
}
