import { useState } from 'react'

export default function Settings() {
  const [form, setForm] = useState({ store: 'E-commerce', email: 'owner@example.com', currency: 'USD', orders: true, stock: true, news: false })
  const [saved, setSaved] = useState(false)
  const set = (k, v) => { setForm({ ...form, [k]: v }); setSaved(false) }

  return (
    <>
      <div className="page-head">
        <h1>Settings</h1>
        <p>Manage your store details and notifications.</p>
      </div>
      <section className="panel settings-panel">
        <h2>Store details</h2>
        <div className="field">
          <label htmlFor="store">Store name</label>
          <input id="store" value={form.store} onChange={(e) => set('store', e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="email">Contact email</label>
          <input id="email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="currency">Currency</label>
          <select id="currency" value={form.currency} onChange={(e) => set('currency', e.target.value)}>
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="EGP">Egyptian Pound (EGP)</option>
          </select>
        </div>

        <h2 className="section-gap">Notifications</h2>
        {[
          ['orders', 'New orders'],
          ['stock', 'Low stock alerts'],
          ['news', 'Product news'],
        ].map(([k, label]) => (
          <label key={k} className="switch-row">
            <span>{label}</span>
            <input type="checkbox" className="toggle-input" checked={form[k]} onChange={(e) => set(k, e.target.checked)} />
            <span className="toggle-switch" />
          </label>
        ))}

        <div className="form-actions">
          <button className="btn-primary" onClick={() => setSaved(true)}>Save changes</button>
          {saved && <span className="saved" role="status">Changes saved</span>}
        </div>
      </section>
    </>
  )
}
