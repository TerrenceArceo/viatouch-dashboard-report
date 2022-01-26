import {useState, useEffect} from 'react'
import { format } from 'date-fns'

export default function useGenerateReport() {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [resultData, setResultData] = useState([])


    function formattedDate(selectedDate) {
        const newDate = new Date(selectedDate)
        const formatted = format(newDate, 'yyyy-MM-dd')
        return formatted
    }

    function getData() {
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
            .then(data => setResultData(data))
    }


    console.log(resultData)

    return {  startDate, endDate, setStartDate, setEndDate, resultData, getData }
}