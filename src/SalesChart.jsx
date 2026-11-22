import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', sales: 4000 }, { month: 'Feb', sales: 6000 }, { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 8000 }, { month: 'May', sales: 7000 }, { month: 'Jun', sales: 10000 },
]

export const tooltipStyle = {
  background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text)',
}

export default function SalesChart() {
  return (
    <section className="panel">
      <h2>Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`$${v.toLocaleString()}`, 'Sales']} />
          <Area type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} fill="url(#salesFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  )
}
