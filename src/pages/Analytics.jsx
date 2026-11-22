import { Eye, ShoppingBag, Percent, Wallet } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Card from '../Card'
import { tooltipStyle } from '../SalesChart'

const stats = [
  { title: 'Page Views', value: '48.2k', change: 9.4, color: '#6366f1', icon: Eye },
  { title: 'Orders', value: '1,086', change: 6.1, color: '#0ea5e9', icon: ShoppingBag },
  { title: 'Conversion', value: '3.24%', change: 0.8, color: '#ec4899', icon: Percent },
  { title: 'Avg. Order Value', value: '$50.04', change: -2.3, color: '#84cc16', icon: Wallet },
]

const weekly = [
  { week: 'W1', orders: 210 }, { week: 'W2', orders: 245 }, { week: 'W3', orders: 232 },
  { week: 'W4', orders: 299 },
]
const traffic = [
  { month: 'Jan', visits: 21000 }, { month: 'Feb', visits: 26000 }, { month: 'Mar', visits: 24500 },
  { month: 'Apr', visits: 33000 }, { month: 'May', visits: 38000 }, { month: 'Jun', visits: 48200 },
]

export default function Analytics() {
  return (
    <>
      <div className="page-head">
        <h1>Analytics</h1>
        <p>Traffic, orders and conversion for the last 6 months.</p>
      </div>
      <div className="stats-grid">{stats.map((s) => <Card key={s.title} {...s} />)}</div>
      <div className="charts-grid equal">
        <section className="panel">
          <h2>Orders per week</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weekly} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'transparent' }} />
              <Bar dataKey="orders" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>
        <section className="panel">
          <h2>Site visits</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={traffic} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v) => [v.toLocaleString(), 'Visits']} />
              <Line type="monotone" dataKey="visits" stroke="#ec4899" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  )
}
