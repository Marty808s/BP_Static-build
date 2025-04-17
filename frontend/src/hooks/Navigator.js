import { useNavigate, useLocation } from "react-router-dom"


{/* HOOKY PRO QUERY, CURRENT URL A NÁSLEDNÉ PŘESMĚROVÁNÍ S PARAMS*/}
export function makeQuery(dict) { 
    const searchParams = new URLSearchParams();
    Object.entries(dict).forEach(([key, val]) => {
        searchParams.append(key, val);
    });
    return `?${searchParams.toString()}`;
}

export function useCurrentUrl() {
    const location = useLocation();
    return location.pathname;
}

export function useNavigateParams() {
    const navigate = useNavigate();
    
    return (baseUrl, paramsQuery) => {
        navigate(`${baseUrl}${paramsQuery}`);
    };
}