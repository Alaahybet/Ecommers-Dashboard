import { ChartColumnIncreasing, NotebookTabs, UsersRound, Package, Star, UserPlus, ShoppingCartMinus, MessageCircleCheck } from 'lucide-react'
import Card from '../Card'
import SalesChart from '../SalesChart'
import SalesByCategory from '../SalesByCategory'
import PropertiesCard from '../PropertiesCard'

const stats = [
  { id: 1, icon: ChartColumnIncreasing, title: 'Total Sales', value: '$12,410', change: 12.5, color: '#6366f1' },
  { id: 2, icon: NotebookTabs, title: 'Total Orders', value: '248', change: 8.2, color: '#0ea5e9' },
  { id: 3, icon: UsersRound, title: 'Total Customers', value: '1,423', change: 15.3, color: '#ec4899' },
  { id: 4, icon: Package, title: 'Total Products', value: '562', change: -5.7, color: '#84cc16' },
]

const properties = [
  { id: 5, icon: Star, title: 'Top Product', value: '$4,250', note: 'Wireless Headphones', color: '#84cc16' },
  { id: 6, icon: UserPlus, title: 'New Customers', value: '24+', note: 'This week · up 18%', color: '#ec4899' },
  { id: 7, icon: ShoppingCartMinus, title: 'Weekly Orders', value: '248', note: 'Up 12% vs last week', color: '#0ea5e9' },
  { id: 8, icon: MessageCircleCheck, title: 'Conversion Rate', value: '3.24%', note: 'Up 0.8%', color: '#6366f1' },
]

export default function Home() {
  return (
    <>
      <div className="page-head">
        <h1>Dashboard</h1>
        <p>Welcome back, Alaa! Here's what's happening with your store today.</p>
      </div>
      <div className="stats-grid">{stats.map(({ id, ...s }) => <Card key={id} {...s} />)}</div>
      <div className="charts-grid"><SalesChart /><SalesByCategory /></div>
      <div className="properties-cards">{properties.map(({ id, ...p }) => <PropertiesCard key={id} {...p} />)}</div>
    </>
  )
}
