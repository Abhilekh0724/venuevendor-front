import axios from "axios";
//creating instance of axios
const Api=axios.create({
    baseURL:"http://localhost:5500",
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }

});
//creating test api
export const testApi= ()=> Api.get('/venueendor')
//http://localhost:5000/test

//creating register api
export const registerUserApi=(data)=> Api.post('/api/user/create',data);
//creating login api
export const loginUserApi=(data)=>Api.post('/api/user/login',data)



