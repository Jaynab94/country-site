import { useState } from 'react';
import './Country.css'

const Country = ({ country,handleVisitedCountry,handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    };

    // console.log( handleVisitedCountry)
    // console.log(handleVisitedFlag)

    const { name, flags, region, capital, population,  area, cca3 } = country;
    return (

      
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited?'yellow': 'black'}}>
                {name?.common}

            </h3>
            <img src={flags.png} />
            <p>region: {region}</p>
            <p>capital:{capital}</p>
            <p>population: {population} </p>
            <p>Area: {area}</p>

            <p><small>Code: {cca3}</small></p>
            
            
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'i have visited' : 'i want to go'}
            <br />
            <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark as visited</button>
            <br />
            <br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add As Flag</button>

        </div>
    );
};

export default Country;