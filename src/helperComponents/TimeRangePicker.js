import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useContext } from 'react/cjs/react.development'
import { ReportContext } from '../context/reportContext'

export default function TimeRagePicker() {
    const { setEndDate, setStartDate, handleTimeRange, timeRange, endDate, startDate } = useContext(ReportContext)

    return (
        <div className='date-section'>
            <label htmlFor='date-pick'>Custom Time Range</label>
            <div className='date-picker' id='date-picker' >
                <DatePicker 
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    className='startDateInput'
                    dateFormat="yyyy-MM-dd"
                    placeholderText='Select Start Date'
                />
                <DatePicker 
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    className='endDateInput'
                    dateFormat="yyyy-MM-dd"
                    placeholderText='Select End Date'
                />
                <select
                    value={timeRange}
                    name='timeRange'
                    onChange={handleTimeRange}
                    className='quick-select'
                >
                    <option value=""></option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="oneweek">One Week</option>
                    <option value="sixmonths">Six Months</option>
                    <option value="oneyear">One Year</option>
                </select>
            </div>
        </div>
    )
}