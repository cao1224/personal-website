import React from 'react'

const YearButton = ({year, className, onChangeYear}) => {
    return (
        <button className={className} onClick={() => onChangeYear(year)}>{year}</button>
    )
}
export default YearButton