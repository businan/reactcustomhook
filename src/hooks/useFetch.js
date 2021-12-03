import { useState, useEffect } from "react";
import { getData } from "../functions/functions";

export const useFetch = (url, initialValue) => {
    const [response, setResponse] = useState(initialValue);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            getData(url)
                .then((response) => {
                    setResponse(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        },
        [url],
    );
    console.log(response)

    return {response, loading, error}
};
