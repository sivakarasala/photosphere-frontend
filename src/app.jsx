import React, { useEffect } from "react";
import axios from "axios";

export function App() {
    
    useEffect(() => {
        axios.get(`http://localhost:3000/assets`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(`Error retreiving assets:`);
                console.log(error);
            });
    }, []);

    return (
        <h1>Aum Namah Sivaya!</h1>
    );
}