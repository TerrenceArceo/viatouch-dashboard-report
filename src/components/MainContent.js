import GenerateReport from "../subcomponents/GenerateReport"
import FinancialReport from "../subcomponents/FinancialSummary"

export default function MainContent() {

    return (
        <div className="main-content">
            <GenerateReport />
            <FinancialReport />
        </div>
    )
}