import { useContext } from 'react'
import { ReportContext } from "../context/reportContext"
import Table from './Table'

export default function FinancialReport() {
    const { reportType, resultData, confirm } = useContext(ReportContext)
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return (
        <section className='financial-report-section'>
            {reportType === "financialSummary" ? (
                    <div>
                        <h2 style={{marginBottom: 0, fontWeight: 'lighter'}}>Financial Report</h2>
                        <p style={{marginTop: 0}}>{`Date: ${month}/${day}/${year}`}</p>
                        {confirm === true && resultData !== undefined ? <Table /> : null}
                    </div>
                ) : null
            }
        </section>
    )
}

// Get resultData from context
// Map through it
// each itiration will be 
