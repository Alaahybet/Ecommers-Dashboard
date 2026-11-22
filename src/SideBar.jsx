import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Settings, Package, ChartNoAxesCombined, Sun, Moon, ShoppingCart } from 'lucide-react'

const items = [
  { name: 'Home', path: '/', icon: LayoutDashboard },
  { name: 'Analytics', path: '/analytics', icon: ChartNoAxesCombined },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Customers', path: '/customers', icon: Users },
  { name: 'Settings', path: '/settings', icon: Settings },
]

export default function SideBar({ onNavigate, dark, onToggleTheme }) {
  return (
    <aside className="sidebar">
      <div className="name-web"><ShoppingCart size={26} /> E-commerce</div>

      <nav className="buttonSide">
        {items.map(({ name, path, icon: Icon }) => (
          <NavLink key={name} to={path} end={path === '/'} onClick={onNavigate}
            className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon size={19} /> <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      <label className="dark-mode">
        <span className="dark-mode-label">
          {dark ? <Moon size={19} /> : <Sun size={19} />}
          <span>Dark Mode</span>
        </span>
        <input type="checkbox" className="toggle-input" checked={dark} onChange={onToggleTheme} />
        <span className="toggle-switch" />
      </label>
    </aside>
  )
}
