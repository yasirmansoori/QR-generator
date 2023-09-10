import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/loader.css'
import Loader from './Loader';
import Card from './Card';

export default function Frontend() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const hideLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        window.addEventListener('load', hideLoading);
        return () => {
            window.removeEventListener('load', hideLoading);
        };
    }, []);
    return (
        <div className="App">
            {loading ? (<Loader />) : (<Card />)}
        </div>

    )
}
