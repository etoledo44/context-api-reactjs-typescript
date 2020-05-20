interface Response{
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn():Promise<Response> {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                token: 'kljkljadklsj',
                user: {
                    name: 'diego',
                    email: 'diegoo@adksd.com'
                }
            })
            
        }, 2000);
    })
}