import { useState, useEffect } from "react";
import fetchData from "./fetchData";
const useFetchData = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchData()
            .then((data) => {
            setIsLoading(false);
            setJobs(data);
        })
            .catch((err) => {
            setIsLoading(false);
            setError(err.message);
        });
    }, []);
    return { jobs, isLoading, error };
};
export default useFetchData;
