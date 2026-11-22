import { useState } from 'react'
import { Search } from 'lucide-react'

const customers = [
  { id: 1, name: 'Mona Hassan', email: 'mona@example.com', orders: 14, spent: 1280, joined: 'Jan 2026' },
  { id: 2, name: 'Omar Khaled', email: 'omar@example.com', orders: 6, spent: 540, joined: 'Mar 2026' },
  { id: 3, name: 'Sara Ali', email: 'sara@example.com', orders: 22, spent: 2310, joined: 'Nov 2025' },
  { id: 4, name: 'Youssef Adel', email: 'youssef@example.com', orders: 3, spent: 215, joined: 'May 2026' },
  { id: 5, name: 'Nour Ibrahim', email: 'nour@example.com', orders: 9, spent: 870, joined: 'Feb 2026' },
]

export default function Customers() {
  const [query, setQuery] = useState('')
  const rows = customers.filter((c) => `${c.name} ${c.email}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <div className="page-head">
        <h1>Customers</h1>
        <p>{customers.length} customers have ordered from your store.</p>
      </div>
      <section className="panel">
        <div className="toolbar">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="search" placeholder="Search customers..." aria-label="Search customers" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Customer</th><th>Orders</th><th>Total spent</th><th>Joined</th></tr></thead>
            <tbody>
              {rows.map((c) => (
                <tr key={c.id}>
                  <td>
                    <div className="person">
                      <span className="avatar sm">{c.name[0]}</span>
                      <span><strong>{c.name}</strong><span className="sub">{c.email}</span></span>
                    </div>
                  </td>
                  <td>{c.orders}</td>
                  <td>${c.spent.toLocaleString()}</td>
                  <td>{c.joined}</td>
                </tr>
              ))}
              {rows.length === 0 && <tr><td colSpan={4} className="empty">No customers match "{query}". Check the spelling or search by email.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
