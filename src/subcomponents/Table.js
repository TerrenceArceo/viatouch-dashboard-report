import { ReportContext } from "../context/reportContext"
import { useContext } from "react"

export default function Table(props) {
    const { resultData } = useContext(ReportContext)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Transaction</th>
                    <th>Items sold</th>
                    <th>Gross revenues</th>
                    <th>Taxes</th>
                    <th>Revenues</th>
                    <th>Cost</th>
                    <th>Gross margin</th>
                    <th>Gross margin percentage</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>{resultData.transaction_count}</td>
                <td>{resultData.items_sold}</td>
                <td>{resultData.gross_revenues}</td>
                <td>{resultData.taxes}</td>
                <td>{resultData.revenues}</td>
                <td>{resultData.cost}</td>
                <td>{resultData.gross_margin}</td>
                <td>{resultData.gross_margin_percent}</td>
            </tr>
            </tbody>
        </table>
    )
}