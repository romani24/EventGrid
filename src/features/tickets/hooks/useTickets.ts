import { useState } from 'react'
import type { EventItem } from '../../discovery/model/events'

export function useTickets() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
  const [tier, setTier] = useState<'General' | 'Backstage'>('General')
  const [quantity, setQuantity] = useState(1)
  const [confirmed, setConfirmed] = useState(false)
  const openTickets = (event: EventItem) => { setSelectedEvent(event); setTier('General'); setQuantity(1); setConfirmed(false) }
  const closeTickets = () => setSelectedEvent(null)
  return { selectedEvent, tier, quantity, confirmed, openTickets, closeTickets, setTier, setQuantity, setConfirmed }
}

export type TicketState = ReturnType<typeof useTickets>
