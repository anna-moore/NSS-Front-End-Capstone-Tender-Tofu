import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const SingleMatchesContext = createContext()

// This component establishes what data can be used.
export const SingleMatchesProvider = (props) => {
    const [singleMacthes, setSingleMatches] = useState([])

    // const getSingleMatches = () => {
    //     return fetch("http://localhost:8088/singleUserRestaurantMatches")
    //     .then(res => res.json())
    //     .then(setSingleMatches)
    // }
    const getSingleMatchesByEateryOutingId = (eateryOutingId) => {
        return fetch( `http://localhost:8088/singleUserRestaurantMatches?eateryOutingId=${eateryOutingId}`)
        .then(res => res.json())
        //run a filter of use params value being the same at eatery outing id in databse
    }
    const addSingleMatch = matchesObj => {
        return fetch("http://localhost:8088/singleUserRestaurantMatches", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(matchesObj)
        })
        // .then(getSingleMatches)
    }

    return (
        <SingleMatchesContext.Provider value={{
            singleMacthes, addSingleMatch, getSingleMatchesByEateryOutingId
        }}>
            {props.children}
        </SingleMatchesContext.Provider>
    )
}