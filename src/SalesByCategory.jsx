import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { tooltipStyle } from './SalesChart'

const data = [
  { name: 'Electronics', value: 4000 }, { name: 'Clothing', value: 3000 },
  { name: 'Furniture', value: 2000 }, { name: 'Accessories', value: 1500 },
]
const COLORS = ['#6366f1', '#22c55e', '#f59e0b', '#ec4899']

export default function SalesByCategory() {
  return (
    <section className="panel">
      <h2>Sales by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={65} outerRadius={100} paddingAngle={3} stroke="none">
            {data.map((d, i) => <Cell key={d.name} fill={COLORS[i]} />)}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => `$${v.toLocaleString()}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </section>
  )
}
