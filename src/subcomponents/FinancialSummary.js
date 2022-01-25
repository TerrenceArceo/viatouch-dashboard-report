import { useContext } from 'react'
import useGenerateReport from "../hooks/useGenerateReport"
import { ReportContext } from "../context/reportContext"

export default function FinancialReport() {
    const { reportType } = useContext(ReportContext)

    return (
        <h1>{reportType}</h1>
    )
}

//Check reportType's value. if it's equal to financialSummary, render the title, today's date. 