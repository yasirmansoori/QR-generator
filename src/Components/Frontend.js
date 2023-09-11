import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/loader.css'
import Loader from './Loader';
import Card from './Card';

export default function Frontend() {
    const [loading, setLoading] = useState(true);
    // below code is used to hide the loader after the page is loaded
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
            {/* below is the loader component which will be shown till the page is loaded */}
            {loading ? (<Loader />) : (<Card />)}
        </div>

    )
}
