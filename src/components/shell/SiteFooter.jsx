import Link from 'next/link';
import { KovaIcon } from '@/components/brand/KovaLogo';

const COLUMNS = [
  { title: 'Platformă', links: [{ href: '/signup', label: 'Comandă o cursă' }, { href: '/signup?role=driver', label: 'Devino șofer' }, { href: '/login', label: 'Autentificare' }] },
  { title: 'Companie', links: [{ href: '/contact', label: 'Contact' }, { href: '/contact#support', label: 'Asistență' }] },
  { title: 'Legal', links: [{ href: '/terms', label: 'Termeni și condiții' }, { href: '/privacy', label: 'Politica de confidențialitate' }] },
];

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '48px 24px 32px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1.4fr) repeat(3, minmax(140px, 1fr))', gap: 32 }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><KovaIcon size={30} /><span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>RIDO</span></span>
            <p className="small muted mt-3" style={{ maxWidth: 260, lineHeight: 1.6 }}>Transport la cerere în Timișoara. Tarife transparente, urmărire live și preluări verificate.</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="tiny" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-3)', marginBottom: 14 }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((l) => <li key={l.href + l.label}><Link href={l.href} className="small" style={{ color: 'var(--text-2)', transition: 'color 150ms' }}>{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between wrap gap-3" style={{ borderTop: '1px solid var(--border)', marginTop: 40, paddingTop: 20 }}>
          <span className="tiny muted">© {new Date().getFullYear()} RIDO. Toate drepturile rezervate.</span>
          <div className="flex gap-4 tiny muted"><Link href="/terms">Termeni</Link><Link href="/privacy">Confidențialitate</Link><Link href="/contact">Contact</Link></div>
        </div>
      </div>
    </footer>
  );
}
