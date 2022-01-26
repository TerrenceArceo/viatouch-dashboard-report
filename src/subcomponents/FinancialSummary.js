import { useContext } from 'react'
import useGenerateReport from "../hooks/useGenerateReport"
import { ReportContext } from "../context/reportContext"

export default function FinancialReport() {
    const { reportType } = useContext(ReportContext)
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
                    </div>
                ) : null
            }
        </section>
    )
}

//Check reportType's value. if it's equal to financialSummary, render the title, today's date.
//Once the dates were filled, and create report button is pressed, render the table
