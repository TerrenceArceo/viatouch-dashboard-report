import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

const ReportContext = React.createContext()

function ReportContextProvider(props) {
    const [reportType, setReportType] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [resultData, setResultData] = useState()
    const [confirm, setConfirm] = useState(false)

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
                .then(data => {
                    setResultData(data.report[0])
                    setConfirm(false)
                })
        }
    }, [startDate, endDate])

    function getData() {
        console.log(resultData)
        setConfirm(true)
    }

    return (
        <ReportContext.Provider value={{
            reportType: reportType,
            handleChange: handleChange,
            startDate: startDate,
            endDate: endDate,
            resultData: resultData,
            setStartDate: setStartDate,
            setEndDate: setEndDate,
            getData: getData,
            confirm: confirm
        }}>
            {props.children}
        </ReportContext.Provider>
    )
}

export {ReportContextProvider, ReportContext}