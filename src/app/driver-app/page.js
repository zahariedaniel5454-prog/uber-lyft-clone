'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Providers from '@/components/providers';
import { Car, LogOut, Navigation } from 'lucide-react';

function DriverEntry() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const role = session?.user?.role;

  useEffect(() => {
    if (role === 'driver') router.replace('/driver/dashboard');
  }, [role, router]);

  return (
    <main style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', padding: 24, background: '#0C0A09', color: '#FAFAF9' }}>
      <section style={{ width: '100%', maxWidth: 420, textAlign: 'center', padding: 28, border: '1px solid #44403C', borderRadius: 22, background: '#1C1917' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, alignItems: 'center', marginBottom: 20 }}>
          <Car size={27} color="#D6A84B" />
          <strong style={{ fontSize: 26, letterSpacing: 1 }}>RIDO ȘOFER</strong>
        </div>
        {status === 'loading' ? <p>Se verifică autentificarea…</p> : null}
        {status === 'unauthenticated' ? (
          <>
            <h1 style={{ fontSize: 22, marginBottom: 10 }}>Primește curse în Timișoara</h1>
            <p style={{ color: '#A8A29E', lineHeight: 1.6, marginBottom: 22 }}>Intră în contul tău de șofer sau creează un cont nou pentru a conduce cu RIDO.</p>
            <Link href="/login?callbackUrl=%2Fdriver%2Fdashboard" style={{ display: 'block', padding: 14, borderRadius: 12, background: '#D6A84B', color: '#1C1917', fontWeight: 700, textDecoration: 'none' }}>Autentificare șofer</Link>
            <Link href="/signup?role=driver" style={{ display: 'block', marginTop: 14, color: '#F5D58A' }}>Creează cont de șofer</Link>
          </>
        ) : null}
        {role && role !== 'driver' ? (
          <>
            <Navigation size={34} color="#D6A84B" style={{ margin: '0 auto 12px' }} />
            <h1 style={{ fontSize: 22, marginBottom: 10 }}>Acesta este contul de client</h1>
            <p style={{ color: '#A8A29E', lineHeight: 1.6, marginBottom: 22 }}>RIDO Șofer folosește un cont separat, înregistrat cu rolul de șofer. Deconectează-te pentru a intra sau crea un cont de șofer.</p>
            <button onClick={() => signOut({ callbackUrl: '/signup?role=driver' })} style={{ width: '100%', padding: 14, border: 0, borderRadius: 12, background: '#D6A84B', color: '#1C1917', fontWeight: 700, cursor: 'pointer' }}>
              <LogOut size={16} style={{ verticalAlign: 'middle', marginRight: 8 }} /> Ieși și creează cont șofer
            </button>
          </>
        ) : null}
        {role === 'driver' ? <p>Se deschide RIDO Șofer…</p> : null}
      </section>
    </main>
  );
}

export default function DriverEntryPage() {
  return <Providers><DriverEntry /></Providers>;
}
