import { ArrowDown, ArrowRight, CalendarDays, MapPin, Sparkles, Ticket } from 'lucide-react'
import { EventCollection } from '../features/discovery/components/EventCollection'
import { useEventDiscovery } from '../features/discovery/hooks/useEventDiscovery'
import { events } from '../features/discovery/model/events'
import { TicketDrawer } from '../features/tickets/components/TicketDrawer'
import { useTickets } from '../features/tickets/hooks/useTickets'
import { SiteFooter } from '../shared/components/SiteFooter'
import { SiteHeader } from '../shared/components/SiteHeader'
import './styles.css'

export default function App() {
  const discovery = useEventDiscovery()
  const tickets = useTickets()
  const featured = events[0]
  return <div className="event-app"><div className="demo-banner">Interactive frontend demo — all events and tickets are fictional</div><SiteHeader savedCount={discovery.saved.length} /><main id="top"><section className="hero"><div className="hero-type"><span className="edition">Lisbon edition / 04—12.26</span><h1>GO<br />OUT<span>!</span></h1><p>Concerts. Art. Food. Strange ideas.<br />One city, no boring plans.</p><button onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}>See what’s on <ArrowDown size={18} /></button></div><div className="hero-collage"><div className="collage-main"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90" alt="Colourful live event crowd" /><span>NO<br />FOMO</span></div><div className="collage-note"><Sparkles /><b>CURATED<br />BY HUMANS</b><small>Updated weekly</small></div><div className="collage-ticket"><span>NEXT UP</span><b>14 NOV</b><p>Electric Bloom<br />LX Factory</p></div></div></section><div className="marquee"><div>LIVE MUSIC ✦ ART AFTER DARK ✦ GOOD FOOD ✦ NEW IDEAS ✦ LIVE MUSIC ✦ ART AFTER DARK ✦ GOOD FOOD ✦ NEW IDEAS ✦</div></div><EventCollection discovery={discovery} tickets={tickets} /><section className="featured-section" id="featured"><div className="featured-image"><img src={featured.image} alt={featured.title} /><span>Editor’s pick</span></div><div className="featured-copy"><span className="kicker">One night only</span><h2>Electric<br />Bloom.</h2><p>An open-air collision of electronic music, light installations and late-night food at LX Factory.</p><dl><div><dt><CalendarDays /> When</dt><dd>Saturday, November 14<br />Doors at 18:00</dd></div><div><dt><MapPin /> Where</dt><dd>LX Factory<br />Lisbon</dd></div></dl><button onClick={() => tickets.openTickets(featured)}><Ticket size={18} /> Get tickets — from €{featured.price}</button></div><span className="featured-number">01</span></section><section className="community-section" id="community"><div><span className="kicker">Never stay in by accident</span><h2>Your weekend,<br />sorted.</h2></div><form onSubmit={(event) => event.preventDefault()}><label>Email address<input type="email" placeholder="you@example.com" /></label><button>Join the weekly list <ArrowRight /></button><small>Demo form — no email will be stored.</small></form></section></main><SiteFooter /><TicketDrawer tickets={tickets} /></div>
}
