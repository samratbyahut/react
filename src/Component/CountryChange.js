import { useState } from "react"
import "../App.css"
const Country = () => {
    const[selectCountry,setSelectCountry]=useState("")
    const countries = {
        India: ["Delhi", "Punjab", "Himachal"],
        USA: ["Californis", "New York", "Texas"],
        Australia: ["South wales", "Victoris", "Queensland"]
    }
    function handleChange(event) {
        setSelectCountry(event.target.value)

    }

    return (
        <>
            <select className="chooseCity" onChange={handleChange}>
                <option>Select a Country</option>
                {Object.keys(countries).map((country, index) => {
                    return <option key={country} value={country}>{country}</option>
                })}
            </select>
            <select>
                {countries[selectCountry]?.map(state=>{
                    return  <option value={state} key={state}>{state}</option>
                })}
            </select>
        </>
    )
}
export default Country;