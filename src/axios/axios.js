import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'http://192.168.3.103:8000/api',
        })
        Vue.prototype.$http.interceptors.request.use( async (config) => {
            if ( !config.url.endsWith('login') || !config.url.endsWith('refresh')) {
                const userToken = await getCookie('access_token')
                config.headers.Authorization = `${userToken}`
            }
            return config;
        }, ( error ) => {
            return Promise.reject(error);
        })
    }
})

// axios.interceptors.request.use(async (config) => {
//     if (
//         //endsWith verifica se a url termina com os parâmetros passados
//         !config.url.endsWith('login') ||
//         !config.url.endsWith('refresh') ||
//         !config.url.endsWith('signup')
//     ) {
//         const userTokenExpiration = new Date(await AsyncStorage.getItem('userTokenExpiration'));
//         const today = new Date();
//         if (today > userTokenExpiration) {
//             // refresh the token here
//             const userRefreshToken = await AsyncStorage.getItem('userRefreshToken');
//         } else {
//             const userToken = await AsyncStorage.getItem('userToken');
//             config.headers.Authorization = `Bearer ${userToken}`;
//         }
//     }
//
//     return config;
// }, (error) => {
//     // I cand handle a request with errors here
//     return Promise.reject(error);
// });

function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
