import API from "./base";
import users from '../dumyDatabase/users.json'
//fetch records through demo BackEnd API
export const login = async (LoginInfo) => {
    //if you have implemeted api you can call it through:
    //  const response = await API.post(`/login`, LoginInfo)    
    //  return response.data
    //else you can use the mock value
    const user = users.find((item) => item.username === LoginInfo.username

    )
    if (user !== -1) {
        if (user.password === LoginInfo.password) {
            return { username: user.username, token: 'accesstoken' }
        }
    } else {
        throw new Error();
    }
};

