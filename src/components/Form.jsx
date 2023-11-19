import React from 'react'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import '../css/Form.css'
export const Form = () => {
    const api = {
        key: '7f6bbe9477a0d744fae41d51d0688ce1',
        base: 'https://api.openweathermap.org/data/2.5/'
    }

    const [search, setSearch] = useState("")
    const [weather, setWeather] = useState("")
    const searched = () => {
        if (search === '')
            alert('You have to type your city ')
        else
            fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    if (result.cod === '404') {
                        alert('City not found ')
                    } else
                        setWeather(result)
                })
    }
    return (
        <div>
            <center>
                <div className="styled-box">
                    <div className="content">
                        <div className='dasearch'>
                            <input type="text"
                                className="m-2 mt-3"
                                placeholder="Search.."
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="btn btn-success"
                                onClick={searched}> <FiSearch size={25} /></button>
                        </div>
                        {typeof weather.main != 'undefined' ? (
                            <div className="text-light mt-3">
                                <p className="text1"> Weather in {weather.name}</p>
                                <p className='text2'>{weather.main.temp} °F</p>
                                <p className='text3'> Humidity: {weather.main.humidity} °C</p>
                                <p className='text3'> wind speed: {weather.wind.speed} km/h</p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </center>
        </div>
    )
}
