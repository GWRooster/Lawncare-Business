'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase'
import BookingWidget from '@/components/BookingWidget'

const supabase = createClient()

export default function Home() {
  const [availability, setAvailability] = useState<any[]>([])
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    async function load() {
      const { data: svc } = await supabase.from('services').select('*').order('sort_order')
      const { data: avail } = await supabase
        .from('availability')
        .select('*, team_members(name)')
        .eq('booked', false)
        .gte('date', new Date().toISOString().split('T')[0])
        .order('date')
      setServices(svc || [])
      setAvailability(avail || [])
    }
    load()
  }, [])

  return (
    <main>
      {/* NAV */}
      <nav style={{
        background: 'var(--dusk)',
        padding: '18px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid var(--purple)'
      }}>
        <span style={{ fontFamily: 'Bebas Neue', fontSize: 26, color: 'var(--gold)', letterSpacing: '0.08em' }}>
          Local Lawncare
        </span>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <a href="#services" style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Services</a>
          <a href="#book" style={{ color: 'var(--cream)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Book</a>
          <a href="#book" className="btn-primary" style={{ padding: '8px 20px', fontSize: 13 }}>Book Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--dusk) 0%, var(--purple) 60%, var(--crimson) 100%)',
        padding: '120px 24px 100px',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>
            Your Neighborhood Lawn Pros
          </p>
          <h1 style={{ fontSize: 'clamp(64px, 10vw, 120px)', color: 'var(--white)', marginBottom: 24 }}>
            LOCAL<br />
            <span style={{ color: 'var(--gold)' }}>LAWNCARE</span>
          </h1>
          <p style={{ color: 'var(--cream)', fontSize: 18, maxWidth: 480, margin: '0 auto 40px', opacity: 0.9 }}>
            Quality cuts, clean edges, and a yard you'll be proud of — right in your neighborhood.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#book" className="btn-primary">Book a Service</a>
            <a href="#services" className="btn-outline">See Pricing</a>
          </div>
        </div>
      </section>

      {/* SERVICES & PRICING */}
      <section id="services" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <p style={{ color: 'var(--ember)', fontWeight: 600, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
            What We Offer
          </p>
          <h2 style={{ fontSize: 56, marginBottom: 48, color: 'var(--dusk)' }}>Services &amp; Pricing</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {services.length === 0 ? (
              // Placeholder cards while loading
              ['Front Yard Mow — $20', 'Front Yard Edge — $5', 'Back Yard Mow — $20', 'Back Yard Edge — $5'].map(s => (
                <div key={s} style={{ background: 'var(--white)', borderRadius: 8, padding: '28px 24px', border: '1px solid #e8e0d8' }}>
                  <p style={{ fontWeight: 600, color: 'var(--dusk)' }}>{s.split('—')[0]}</p>
                  <p style={{ fontSize: 28, fontFamily: 'Bebas Neue', color: 'var(--ember)', marginTop: 8 }}>{s.split('—')[1]}</p>
                </div>
              ))
            ) : (
              services.map((svc: any) => (
                <div key={svc.id} style={{
                  background: svc.category === 'package' ? 'var(--dusk)' : 'var(--white)',
                  borderRadius: 8,
                  padding: '28px 24px',
                  border: svc.category === 'package' ? 'none' : '1px solid #e8e0d8',
                  position: 'relative',
                  gridColumn: svc.category === 'package' ? '1 / -1' : undefined
                }}>
                  {svc.category === 'package' && (
                    <span style={{ position: 'absolute', top: -12, left: 24, background: 'var(--gold)', color: 'var(--dusk)', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Best Value
                    </span>
                  )}
                  <p style={{ fontWeight: 600, color: svc.category === 'package' ? 'var(--cream)' : 'var(--dusk)', fontSize: 16 }}>{svc.name}</p>
                  {svc.description && <p style={{ fontSize: 13, color: svc.category === 'package' ? 'var(--gold)' : 'var(--muted)', marginTop: 4 }}>{svc.description}</p>}
                  <p style={{ fontSize: 42, fontFamily: 'Bebas Neue', color: svc.category === 'package' ? 'var(--gold)' : 'var(--ember)', marginTop: 12 }}>
                    ${svc.price}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" style={{ background: 'var(--white)' }}>
        <div className="container">
          <p style={{ color: 'var(--ember)', fontWeight: 600, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
            Get on the Schedule
          </p>
          <h2 style={{ fontSize: 56, marginBottom: 8, color: 'var(--dusk)' }}>Book a Time</h2>
          <p style={{ color: 'var(--muted)', marginBottom: 48 }}>Pick a service and an open slot — we'll take it from there.</p>
          <BookingWidget services={services} availability={availability} onBooked={() => window.location.reload()} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--dusk)', padding: '40px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Bebas Neue', fontSize: 22, color: 'var(--gold)', marginBottom: 8 }}>Local Lawncare</p>
        <p style={{ color: 'var(--muted)', fontSize: 13 }}>Your neighborhood. Your yard. Done right.</p>
      </footer>
    </main>
  )
}
