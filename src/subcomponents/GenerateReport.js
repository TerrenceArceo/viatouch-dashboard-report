import {useState, useEffect} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'

export default function GenerateReport() {
    const [reportType, setReportType] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)


    function handleChange(event) {
        const { value } = event.target
        setReportType(prevType => value)
    }

    function formattedDate(selectedDate) {
        const newDate = new Date(selectedDate)
        const formatted = format(newDate, 'yyyy-MM-dd')
        return formatted
    }

    useEffect(() => {
        if (startDate !== null && endDate !== null) {
            fetch("https://viatouchmedia-test.apigee.net/loyalty/reports/sales", {
                method: "POST",
                body: JSON.stringify({
                    "from_date": `${formattedDate(startDate)}`,
                    "to_date": `${formattedDate(endDate)}`,
                    "top_level_grouping": "client_id",
                    "sort":"items_sold,d"
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer YCXW1zkNJvg4T6aKK9W6sQx2bNrQ"
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }, [startDate, endDate])

    // call the fetch inside the use effect
    // use iff statement stating that if startDate and endDates are null


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