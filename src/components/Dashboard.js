import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { ReportContext } from '../context/reportContext'


export default function Dashboard() {
    const { setReportType, setStartDate, setEndDate, setConfirm, } = useContext(ReportContext)

    function reset() {
        setReportType('')
        setStartDate(null)
        setEndDate(null)
        setConfirm(false)
    }

    return (
        <aside>
            <Link to="/machine">Machine</Link>
            <Link to="/location">Location</Link>
            <Link to="/products">Products</Link>
            <Link to="/" onClick={reset}>Reports</Link>
            <Link to="/media">Media</Link>
            <Link to="/usermanagement">User Management</Link>
            <Link to="/logout">Logout</Link>

            <p className="version">Version 1.6.32</p>
        </aside>
    )
}