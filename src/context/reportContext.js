import React, { useState } from 'react'
const ReportContext = React.createContext()

function ReportContextProvider(props) {
    const [reportType, setReportType] = useState('')

    function handleChange(event) {
        const { value } = event.target
        setReportType(prevType => value)
    }

    return (
        <ReportContext.Provider value={{
            reportType: reportType,
            handleChange: handleChange
        }}>
            {props.children}
        </ReportContext.Provider>
    )
}

export {ReportContextProvider, ReportContext}