import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-head">
      <h1>Page not found</h1>
      <p>This page doesn't exist. <Link to="/" className="link">Go to the dashboard</Link>.</p>
    </div>
  )
}
