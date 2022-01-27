
import TimeRagePicker from '../helperComponents/TimeRangePicker'
import ReportTypePicker from '../helperComponents/ReportTypePicker'


export default function GenerateReport() {

    return (
        <section className='generate-report-component'>
            <h1>Generate Report</h1>
            <div className='generate-report-content'>
                <ReportTypePicker />
                <TimeRagePicker />
            </div>
        </section>
    )
}