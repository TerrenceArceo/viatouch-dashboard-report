import GenerateReport from "../subcomponents/GenerateReport"
import FinancialReport from "../subcomponents/FinancialSummary"
import {useState, useEffect} from 'react'

export default function MainContent() {

    return (
        <div className="main-content">
            <GenerateReport />
            <FinancialReport />
        </div>
    )
}