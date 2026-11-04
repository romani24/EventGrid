import { useState } from 'react'
import { Bookmark, Menu, X } from 'lucide-react'

export function SiteHeader({ savedCount }: { savedCount: number }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><a href="#top" className="event-logo"><span>E</span>EVENT/GRID</a><nav className={open ? 'open' : ''}><a href="#events" onClick={() => setOpen(false)}>Discover</a><a href="#featured" onClick={() => setOpen(false)}>This week</a><a href="#community" onClick={() => setOpen(false)}>Community</a><button>Create an event ↗</button></nav><div className="header-end"><button className="saved"><Bookmark size={17} fill={savedCount ? 'currentColor' : 'none'} /> Saved <span>{savedCount}</span></button><button className="menu-toggle" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
}
