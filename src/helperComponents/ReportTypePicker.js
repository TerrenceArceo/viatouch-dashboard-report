import { useContext } from 'react'
import { ReportContext } from '../context/reportContext'

export default function ReportTypePicker() {
    const { getData, reportType, handleChange } = useContext(ReportContext)

    return (
        <div className='generate-report-form'>
            <label htmlFor='dropdown'>Report Type</label>
            <br />
            <select
                id='dropdown'
                value={reportType}
                name='reportType'
                onChange={handleChange}
            >
                <option value=""></option>
                <option value="transaction">Transaction</option>
                <option value="financialSummary">Financial Summary</option>
            </select>
            <br />
            <button className='report-button' onClick={getData}>Create Report</button>
        </div>
    )
}