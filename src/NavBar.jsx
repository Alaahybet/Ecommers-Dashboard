import { Bell, Search } from 'lucide-react'

export default function NavBar({ menuButton }) {
  return (
    <header className="header">
      {menuButton}
      <div className="search-box">
        <Search size={18} className="search-icon" />
        <input type="search" placeholder="Search..." aria-label="Search" />
      </div>
      <div className="header-actions">
        <button className="notification-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <div className="avatar" title="Alaa">A</div>
      </div>
    </header>
  )
}
