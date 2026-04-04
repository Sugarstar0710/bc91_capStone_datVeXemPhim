import axios from "axios"
import { history } from "../main"

export const DOMAIN = 'https://apistore.cybersoft.edu.vn'
export const ACCESSTOKEN = 'accessToken'
export const USSERLOGIN='userLogin'

const saveLocalStorageString=(name, value)=>{
    localStorage.setItem(name, value)

}

const getLocalStorageString=(name)=>{
    if(localStorage.getItem(name)){
        return localStorage.getItem(name)
    }
    return null
}

const saveLocalStorage = (name, value)=>{
    localStorage.setItem(name, JSON.stringify(value))
}

const getLocalStorage=(name)=>{
    const data= localStorage.getItem(name)
    if(data){
        return JSON.parse(data)
    }
    return null
} 

const removeStore=(name)=>{
    localStorage.removeItem(name)
}

export{ saveLocalStorage, getLocalStorage, saveLocalStorageString, getLocalStorageString, removeStore}

//Interceptors
export const httpClient= axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})

httpClient.interceptors.request.use(config=>{
    const accessToken= getLocalStorageString(ACCESSTOKEN)
    if(accessToken){
        config.headers.Authorization= accessToken
    }
    return config
}, error =>{
    return Promise.reject(error)
}
)

httpClient.interceptors.response.use(response=>{
    return response
}, error=>{
    if(error.response.status === 404){
        alert("Tài khoản không tồn tại, vui lòng đăng ký!")
        history.push('/register')
    }else if(error.response.status === 400){
        alert("Dữ liệu gửi lên không hợp lệ!")
        history.push("/")
    }else if(error.response.status === 500){
        alert("Hệ thống đang gặp sự cố, vui lòng thử lại sau!")
        history.push("/")
    }
    return Promise.reject(error)
}
)