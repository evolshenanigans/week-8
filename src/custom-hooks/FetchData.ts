import React, {useState, useEffect} from 'react';
import {serverCalls} from '../api';

export const useGetData = () => {
    const [carData, SetData] = useState<any>([]);

    const handleDataFetch = async () => {
        const result = await serverCalls.get();
        SetData(result)
    }


    //useeffect hook in action
    useEffect( () => {
        handleDataFetch();
    }, [] )

    return { carData, getData:handleDataFetch }
}