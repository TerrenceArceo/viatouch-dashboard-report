import { useContext } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useGenerateReport from '../hooks/useGenerateReport'
import { ReportContext } from '../context/reportContext'

export default function GenerateReport() {
    const {
        startDate, 
        endDate, 
        setStartDate, 
        setEndDate,
        resultData,
        getData,
    } = useGenerateReport()
    const {reportType, handleChange} = useContext(ReportContext)

    return (
        <section className='generate-report-component'>
            <h1>Generate Report</h1>
            <div className='generate-report-content'>
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
                    <button className='report-button' onClick={() => getData()}>Create Report</button>
                </div>
                <div className='date-section'>
                    <label htmlFor='date-pick'>Custom Time Range</label>
                    <div className='date-picker' id='date-picker' >
                        <DatePicker 
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            className='startDateInput'
                            dateFormat="yyyy-MM-dd"
                        />
                        <DatePicker 
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            className='endDateInput'
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}