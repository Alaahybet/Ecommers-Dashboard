import { useState } from 'react'
import { Plus, Search } from 'lucide-react'

const products = [
  { id: 'P-1001', name: 'Wireless Headphones', category: 'Electronics', price: 89, stock: 124 },
  { id: 'P-1002', name: 'Smart Watch', category: 'Electronics', price: 149, stock: 12 },
  { id: 'P-1003', name: 'Cotton T-Shirt', category: 'Clothing', price: 19, stock: 340 },
  { id: 'P-1004', name: 'Office Chair', category: 'Furniture', price: 210, stock: 0 },
  { id: 'P-1005', name: 'Leather Wallet', category: 'Accessories', price: 35, stock: 58 },
  { id: 'P-1006', name: 'Desk Lamp', category: 'Furniture', price: 42, stock: 9 },
]

function stockStatus(n) {
  if (n === 0) return { label: 'Out of stock', cls: 'down' }
  if (n < 15) return { label: 'Low stock', cls: 'warn' }
  return { label: 'In stock', cls: 'up' }
}

export default function Products() {
  const [query, setQuery] = useState('')
  const rows = products.filter((p) => `${p.name} ${p.category} ${p.id}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <div className="page-head">
        <h1>Products</h1>
        <p>{products.length} products in your catalog.</p>
      </div>
      <section className="panel">
        <div className="toolbar">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="search" placeholder="Search products..." aria-label="Search products" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <button className="btn-primary"><Plus size={18} /> Add product</button>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead>
            <tbody>
              {rows.map((p) => {
                const s = stockStatus(p.stock)
                return (
                  <tr key={p.id}>
                    <td><strong>{p.name}</strong><span className="sub">{p.id}</span></td>
                    <td>{p.category}</td>
                    <td>${p.price}</td>
                    <td>{p.stock}</td>
                    <td><span className={`badge ${s.cls}`}>{s.label}</span></td>
                  </tr>
                )
              })}
              {rows.length === 0 && <tr><td colSpan={5} className="empty">No products match "{query}". Try a different name or category.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
