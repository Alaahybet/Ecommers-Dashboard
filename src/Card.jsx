import { TrendingUp, TrendingDown } from 'lucide-react'

export default function Card({ color, icon: Icon, title, value, change }) {
  const up = change >= 0
  const Trend = up ? TrendingUp : TrendingDown
  return (
    <div className="card">
      <div className="card-top">
        <span className="icon-bubble" style={{ '--c': color }}><Icon size={22} /></span>
        <span className={`badge ${up ? 'up' : 'down'}`}>
          <Trend size={14} /> {Math.abs(change)}%
        </span>
      </div>
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p className="card-sub">vs last month</p>
    </div>
  )
}
