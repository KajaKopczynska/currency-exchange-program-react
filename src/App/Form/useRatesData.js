import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect (() => {
        const getRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const { rates, date } = await response.data;

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });  

            } catch (error) {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(getRates, 1500);
    }, []);
    
return ratesData;
};