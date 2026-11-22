export default function PropertiesCard({ color, icon: Icon, title, value, note }) {
  return (
    <div className="properties-card">
      <span className="icon-bubble" style={{ '--c': color }}><Icon size={20} /></span>
      <h2>{title}</h2>
      <h1>{value}</h1>
      <p>{note}</p>
    </div>
  )
}
