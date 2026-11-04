import { useMemo, useState } from 'react'
import { events } from '../model/events'

export function useEventDiscovery() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [saved, setSaved] = useState<number[]>([2])
  const visibleEvents = useMemo(() => events.filter((event) => {
    const matchesCategory = category === 'All' || event.category === category
    const matchesQuery = `${event.title} ${event.venue} ${event.city}`.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  }), [category, query])
  const toggleSaved = (id: number) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  return { category, query, saved, visibleEvents, setCategory, setQuery, toggleSaved }
}

export type EventDiscoveryState = ReturnType<typeof useEventDiscovery>
