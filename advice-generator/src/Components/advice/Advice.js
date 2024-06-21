import './adviceStyles.css';
/*import React, { useState, useEffect } from "react";
import axios from "axios";

function GetAdvice() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice?callback=Advice')
        .then((response) => {
            setPosts(response.data.slip.advice);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
*/
const TempResponse = {
    slip: {
        slip_id: '123',
        advice: 'aint no rest for the wicked'
    }
};
export default function AdviceChanger() {
    return (
            <div className="advice">
                <h2 className="advice-title">Advice</h2>
                <p className="advice-text">{TempResponse.slip.advice}</p>
            </div>
    );
};
