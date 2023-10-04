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
            const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=23.4241&longitude=53.8478&current_weather=true&hourly=temperature_2m`);
            // Set the state of temperature
            console.log(response.data.current_weather.temperature)
            setTemperature(response.data.current_weather.temperature);
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