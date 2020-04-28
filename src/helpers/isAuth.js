import { getCookie } from "./cookie";

export  function isAuth() {
    const token = getCookie('access_token')
    if (token.length > 5) {
        return true
    }else {
        return false
    }
}
