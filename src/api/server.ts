import { responsiveFontSizes } from "@mui/material";

let token = '130577f630e3ebf41beddfc60d082b8f73a6aa5aa6928a4a'

export const serverCalls = {
    get: async () =>{
        const response = await fetch(`https://initiald-inventory.herokuapp.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://initiald-inventory.herokuapp.com/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to Create new Data on Server')
        }
        return await response.json()
    },

    update: async ( id:string, data:any = {}) => {
        const response = await fetch(`https://initiald-inventory.herokuapp.com/api/cars/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });
    },
    delete: async ( id:string) => {
        const response = await fetch(`https://initiald-inventory.herokuapp.com/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
    }
}