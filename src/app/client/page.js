'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Providers from '@/components/providers';
import { Car, Navigation, LogOut } from 'lucide-react';

function ClientEntry() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const role = session?.user?.role;

  useEffect(() => {
    if (role === 'rider') router.replace('/dashboard');
  }, [role, router]);

  return (
    <main style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', padding: 24, background: '#0C0A09', color: '#FAFAF9' }}>
      <section style={{ width: '100%', maxWidth: 420, textAlign: 'center', padding: 28, border: '1px solid #44403C', borderRadius: 22, background: '#1C1917' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, alignItems: 'center', marginBottom: 20 }}>
          <Navigation size={26} color="#D6A84B" />
          <strong style={{ fontSize: 26, letterSpacing: 1 }}>RIDO CLIENT</strong>
        </div>
        {status === 'loading' ? <p>Se verifică autentificarea…</p> : null}
        {status === 'unauthenticated' ? (
          <>
            <h1 style={{ fontSize: 22, marginBottom: 10 }}>Comandă o cursă în Timișoara</h1>
            <p style={{ color: '#A8A29E', lineHeight: 1.6, marginBottom: 22 }}>Intră în contul tău de client sau creează unul nou pentru a comanda curse.</p>
            <Link href="/login?callbackUrl=%2Fdashboard" style={{ display: 'block', padding: 14, borderRadius: 12, background: '#D6A84B', color: '#1C1917', fontWeight: 700, textDecoration: 'none' }}>Autentificare client</Link>
            <Link href="/signup?role=rider" style={{ display: 'block', marginTop: 14, color: '#F5D58A' }}>Creează cont de client</Link>
          </>
        ) : null}
        {role && role !== 'rider' ? (
          <>
            <Car size={34} color="#D6A84B" style={{ margin: '0 auto 12px' }} />
            <h1 style={{ fontSize: 22, marginBottom: 10 }}>Acesta este contul de {role === 'driver' ? 'șofer' : 'administrator'}</h1>
            <p style={{ color: '#A8A29E', lineHeight: 1.6, marginBottom: 22 }}>RIDO Client este separat. Deconectează-te și intră cu un cont înregistrat ca pasager.</p>
            <button onClick={() => signOut({ callbackUrl: '/signup?role=rider' })} style={{ width: '100%', padding: 14, border: 0, borderRadius: 12, background: '#D6A84B', color: '#1C1917', fontWeight: 700, cursor: 'pointer' }}>
              <LogOut size={16} style={{ verticalAlign: 'middle', marginRight: 8 }} /> Ieși și creează cont client
            </button>
          </>
        ) : null}
        {role === 'rider' ? <p>Se deschide RIDO Client…</p> : null}
      </section>
    </main>
  );
}

export default function ClientEntryPage() {
  return <Providers><ClientEntry /></Providers>;
}
