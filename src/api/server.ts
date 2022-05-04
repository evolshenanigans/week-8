let token = '130577f630e3ebf41beddfc60d082b8f73a6aa5aa6928a4a'

export const serverCalls = {
    get: async () =>{
        const response = await fetch(`https://initiald-inventory.herokuapp.com/profile`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

    }
}