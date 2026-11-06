import Link from 'next/link';
import {
  Zap, ShieldCheck, Wallet, Radio, Route, Car, Crown, Users,
  ArrowRight, Star, Clock, MessageCircle,
} from 'lucide-react';
import SiteHeader from '@/components/shell/SiteHeader';
import SiteFooter from '@/components/shell/SiteFooter';

export const metadata = {
  title: 'RIDO — Transport în Timișoara',
};

const FEATURES = [
  {
    icon: Wallet,
    title: 'Șoferii păstrează 85%',
    text: 'RIDO reține un comision transparent de 15%, iar șoferul păstrează 85% din valoarea cursei.',
  },
  {
    icon: Zap,
    title: 'Găsești rapid un șofer',
    text: 'Platforma caută șoferii disponibili din apropiere și trimite cererea de cursă.',
  },
  {
    icon: Radio,
    title: 'Urmărire live',
    text: 'Urmărește în timp real apropierea șoferului și desfășurarea cursei.',
  },
  {
    icon: Route,
    title: 'Tarife transparente',
    text: 'Vezi prețul cursei înainte de confirmare, fără surprize.',
  },
  {
    icon: ShieldCheck,
    title: 'Preluare verificată',
    text: 'Confirmă preluarea cu un cod PIN pentru a verifica mașina și cursa.',
  },
  {
    icon: MessageCircle,
    title: 'Mesaje în cursă',
    text: 'Stabilește detaliile preluării fără să îți expui numărul de telefon.',
  },
];

const TIERS = [
  { icon: Car, name: 'RIDO Standard', text: 'Curse zilnice la preț corect' },
  { icon: Car, name: 'RIDO Comfort', text: 'Mai mult confort la drum' },
  { icon: Crown, name: 'RIDO Premium', text: 'Mașini premium și confort sporit' },
  { icon: Users, name: 'RIDO XL', text: 'Spațiu pentru grupuri' },
];

const STEPS = [
  { n: '01', title: 'Alege destinația', text: 'Introdu destinația și verifică tariful disponibil.' },
  { n: '02', title: 'Primește un șofer', text: 'Un șofer disponibil acceptă cursa și îl urmărești pe hartă.' },
  { n: '03', title: 'Călătorește și plătește', text: 'Verifică PIN-ul și plătește cash sau cu cardul.' },
];

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <SiteHeader />

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '88px 24px 72px' }}>
        <div style={{ maxWidth: 640 }}>
          <span className="eyebrow">Transport la cerere în Timișoara</span>
          <h1 className="display" style={{ marginTop: 14 }}>
            Călătorește cu
            <span style={{ color: 'var(--gold-600)' }}> RIDO</span>.
          </h1>
          <p className="muted" style={{ fontSize: '1.15rem', marginTop: 18, maxWidth: 480, lineHeight: 1.6 }}>
            Comandă o cursă în Timișoara, urmărește șoferul în timp real și plătește cash sau cu cardul.
          </p>
          <div className="flex gap-3 mt-8 wrap">
            <Link href="/signup" className="btn btn-primary btn-lg">
              Comandă o cursă <ArrowRight size={18} />
            </Link>
            <Link href="/signup?role=driver" className="btn btn-secondary btn-lg">
              Devino șofer
            </Link>
          </div>
        </div>

        {/* Mock trip card */}
        <div
          className="card"
          style={{
            marginTop: 64, padding: 28, maxWidth: 720,
            boxShadow: 'var(--shadow-lg)', borderRadius: 'var(--radius-xl)',
          }}
        >
          <div className="flex items-center justify-between wrap gap-4">
            <div className="flex items-center gap-4">
              <span className="avatar avatar-lg" style={{ background: 'var(--ink-950)' }}>
                <Car size={22} color="#fff" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span style={{ fontWeight: 700 }}>Șoferul este în drum</span>
                  <span className="badge badge-gold badge-dot">3 min</span>
                </div>
                <span className="small muted">Exemplu demonstrativ · RIDO</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 small muted">
                <Clock size={15} /> 12 min trip
              </span>
              <span className="flex items-center gap-2 small muted">
                <Route size={15} /> 4.8 km
              </span>
              <span style={{ fontWeight: 800, fontSize: '1.2rem' }} className="mono-nums">25,00 lei</span>
            </div>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: 'var(--ink-100)', marginTop: 22, overflow: 'hidden' }}>
            <div style={{ width: '62%', height: '100%', borderRadius: 4, background: 'linear-gradient(90deg, var(--ink-900), var(--gold-600))' }} />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px' }}>
          <span className="eyebrow">De ce RIDO</span>
          <h2 style={{ fontSize: '2rem', marginTop: 10, maxWidth: 480 }}>
            Tot ce ai nevoie pentru o cursă bună
          </h2>
          <div className="grid-3 mt-8">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card card-pad" style={{ background: 'var(--bg)' }}>
                <span className="avatar" style={{ background: 'var(--gold-50)', color: 'var(--gold-700)', borderRadius: 12 }}>
                  <Icon size={19} />
                </span>
                <h3 style={{ fontSize: '1.02rem', marginTop: 14 }}>{title}</h3>
                <p className="small muted mt-1" style={{ lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cum funcționează ── */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px' }}>
        <span className="eyebrow">How it works</span>
        <h2 style={{ fontSize: '2rem', marginTop: 10 }}>Trei pași simpli</h2>
        <div className="grid-3 mt-8">
          {STEPS.map((s) => (
            <div key={s.n}>
              <span style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--ink-200)', letterSpacing: '-0.03em' }}>
                {s.n}
              </span>
              <h3 style={{ fontSize: '1.05rem', marginTop: 8 }}>{s.title}</h3>
              <p className="small muted mt-1" style={{ lineHeight: 1.6, maxWidth: 280 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tiers ── */}
      <section style={{ background: 'var(--ink-950)', color: 'var(--text-invert)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '72px 24px' }}>
          <span className="eyebrow" style={{ color: 'var(--gold-500)' }}>Alege tipul cursei</span>
          <h2 style={{ fontSize: '2rem', marginTop: 10 }}>Opțiuni pentru fiecare călătorie</h2>
          <div className="grid-4 mt-8">
            {TIERS.map(({ icon: Icon, name, text }) => (
              <div
                key={name}
                className="card-pad"
                style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Icon size={22} style={{ color: 'var(--gold-500)' }} />
                <h3 style={{ fontSize: '1rem', marginTop: 12 }}>{name}</h3>
                <p className="small mt-1" style={{ color: 'rgba(250,250,249,0.65)' }}>{text}</p>
              </div>
            ))}
          </div>

          <div
            className="flex items-center justify-between wrap gap-4"
            style={{ marginTop: 56, padding: 28, borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, rgba(202,138,4,0.2), rgba(202,138,4,0.05))', border: '1px solid rgba(202,138,4,0.3)' }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem' }}>Câștigă cu mașina ta</h3>
              <p className="small mt-1" style={{ color: 'rgba(250,250,249,0.7)' }}>
                Păstrezi 85% din valoarea fiecărei curse. RIDO reține un comision de 15%. Lucrează când dorești.
              </p>
            </div>
            <Link href="/signup?role=driver" className="btn btn-gold btn-lg">
              Înscrie-te ca șofer <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
