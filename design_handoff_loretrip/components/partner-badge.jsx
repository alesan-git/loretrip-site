/**
 * LoreTrip — Partner Badge
 * "Powered by LoreTrip™" — for agencies that opt in to attribution.
 *
 * Reference component, JSX. Convert to .tsx and adjust imports for your project.
 * Depends on the Wordmark export from ./marks.jsx.
 */

import React from 'react';
import { Wordmark } from './marks';

/**
 * @param {object} props
 * @param {'light' | 'dark'} [props.theme='light']  Light = use on linen/surface. Dark = use on foundation.
 * @param {number} [props.height=20]                Wordmark height in px. Min 16px; recommended 20–24px.
 * @param {string} [props.href]                     If provided, wraps in <a> linking to https://loretrip.com
 * @param {string} [props.className]
 */
export function PartnerBadge({ theme = 'light', height = 20, href, className = '' }) {
  const ink = theme === 'dark' ? '#F2F0EC' : '#070D14';
  const muted = theme === 'dark' ? 'rgba(242,240,236,0.55)' : 'rgba(7,13,20,0.55)';

  const content = (
    <span
      className={`lt-partner-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 8,
        fontFamily: 'Inter, sans-serif',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: muted,
        whiteSpace: 'nowrap',
        textDecoration: 'none',
      }}
    >
      <span>Powered by</span>
      <Wordmark height={height} color={ink} />
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {content}
      </a>
    );
  }

  return content;
}

/**
 * Standalone "Made with LoreTrip" — slightly more casual variant for footers
 * where "Powered by" feels too formal.
 */
export function MadeWithBadge({ theme = 'light', height = 20, href }) {
  const ink = theme === 'dark' ? '#F2F0EC' : '#070D14';
  const muted = theme === 'dark' ? 'rgba(242,240,236,0.55)' : 'rgba(7,13,20,0.55)';

  const content = (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 8,
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        fontWeight: 400,
        color: muted,
        whiteSpace: 'nowrap',
        textDecoration: 'none',
      }}
    >
      <span>Made with</span>
      <Wordmark height={height} color={ink} />
    </span>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{content}</a>;
  }
  return content;
}
