import React from 'react';
import './Country.css'
const Country = (props) => {
    const{name, flags, area, population} = props.country;
    return (
        <div className='countryContainer'>
            <div className='country'>
                <img src={flags.png} alt="" width="50%" />
                <h3>Country Name: <span className='redText'>{name.common}</span></h3>
                <ul className='list'>
                    <li>
                        <b>Area:</b> {area}
                    </li>
                    <li>
                        <b>Population:</b> {population}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Country;