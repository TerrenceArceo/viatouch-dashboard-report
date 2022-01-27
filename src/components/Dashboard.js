import {Link} from 'react-router-dom'

export default function Dashboard() {
    return (
        <aside>
            <Link to="/machine">Machine</Link>
            <Link to="/location">Location</Link>
            <Link to="/products">Products</Link>
            <Link to="/">Reports</Link>
            <Link to="/media">Media</Link>
            <Link to="/usermanagement">User Management</Link>
            <Link to="/logout">Logout</Link>

            <p className="version">Version 1.6.32</p>
        </aside>
    )
}