import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountry, setVisitedCountry] = useState([])

    const [visitedFlag, setVisitedFlag] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisitedCountry = (country) => {
        console.log('add this to your visited country')
        console.log(country)
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)


    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)

    }

    return (


        <div >

            <h2>
                Countries: {countries.length}
            </h2>


            <div>
                {/* visited country */}
                <h3>visited country:{visitedCountry.length}</h3>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedFlag.map((flag,idx) =><img key={idx} src={flag}></img>)
                }

            </div>

            {/* display visited country */}

            <div className="country-box">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;