import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log("Registered")
        })
}

export const address = newAddress => {
    return axios
        .post('users/address', {
            address: newAddress.address,
            user_id: newAddress.user_id
        })
        .then(res =>{
            console.log(res)
        })
        .catch(error => {
            console.log(error.response)
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}