//interface Response usada como tipo da promise de retorno
interface Response{
    token: string;
    user: {
        name: string;
        email: string;
    };
}

//aqui podemos definir um retorno para a função , :Promisse<tipoResponse>, retorna uma promise do tipo Response
export function signIn():Promise<Response> {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                token: 'esse_e_meu_token_secreto_56524$$##2',
                user: {
                    name: 'Chromium',
                    email: 'chromium@js.com'
                }
            })
        }, 2000);
    })
}