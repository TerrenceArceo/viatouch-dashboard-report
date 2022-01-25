import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useGenerateReport from '../hooks/useGenerateReport'

export default function GenerateReport() {
    const { reportType, startDate, endDate, setStartDate, setEndDate, handleChange,  } = useGenerateReport()

    return (
        <section className='generate-report-component'>
            <h1>Generate Report</h1>
            <div className='generate-report-content'>
                <form>
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
                    <button>Create Report</button>
                </form>
                <div className='date-picker'>
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
        </section>
    )
}