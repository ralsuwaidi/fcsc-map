import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetTemperature = () => {
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        getWeather();
        // setting interval to periodically (every 10 minutes) fetch weather data
        const interval = setInterval(() => getWeather(), 600000);
        return () => clearInterval(interval); // clearing interval when component unmounts
    }, []);


    const getWeather = async () => {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=4e06f24caa624e19a1d122353230310&q=Dubai`);
            // Set the state of temperature
            console.log(response.data.current.temp_c)
            setTemperature(response.data.current.temp_c);
        } catch (error) {
            console.log('Could not fetch weather data', error);
        }
    };

    // If temperature state is null, return a loader or nothing
    if (temperature === null) return null;

    // Render the temperature
    return (temperature);
};

export default GetTemperature;