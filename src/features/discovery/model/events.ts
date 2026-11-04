export type EventItem = {
  id: number
  title: string
  category: string
  venue: string
  city: string
  day: string
  month: string
  time: string
  price: number
  image: string
  colour: string
}

export const events: EventItem[] = [
  { id: 1, title: 'Electric Bloom Festival', category: 'Music', venue: 'LX Factory', city: 'Lisbon', day: '14', month: 'NOV', time: '18:00', price: 28, image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1100&q=88', colour: '#ff5b45' },
  { id: 2, title: 'After Dark: Analog Futures', category: 'Art', venue: 'MAAT', city: 'Lisbon', day: '21', month: 'NOV', time: '20:30', price: 16, image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1100&q=88', colour: '#4559ff' },
  { id: 3, title: 'The Long Table', category: 'Food', venue: 'Time Out Studio', city: 'Lisbon', day: '28', month: 'NOV', time: '19:00', price: 42, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1100&q=88', colour: '#f3d63c' },
  { id: 4, title: 'Tomorrow, Built Together', category: 'Tech', venue: 'Beato Innovation District', city: 'Lisbon', day: '03', month: 'DEC', time: '09:30', price: 24, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1100&q=88', colour: '#34c889' },
  { id: 5, title: 'Make Your Own Zine', category: 'Workshop', venue: 'Arroz Estúdios', city: 'Lisbon', day: '07', month: 'DEC', time: '15:00', price: 12, image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1100&q=88', colour: '#b98cff' },
  { id: 6, title: 'Rooftop Sessions Vol. 08', category: 'Music', venue: 'Topo Martim Moniz', city: 'Lisbon', day: '12', month: 'DEC', time: '17:30', price: 20, image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1100&q=88', colour: '#ff8bc2' },
]

export const categories = ['All', 'Music', 'Art', 'Food', 'Tech', 'Workshop']
