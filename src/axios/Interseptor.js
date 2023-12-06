import axios from "axios";

let d = JSON.parse(localStorage.getItem("token"));
const authfetchI = axios.create({
    baseURL : "https://real-pear-fly-kilt.cyclic.app/"
}) 

authfetchI.interceptors.request.use((request)=>{

      
        request.headers["Authorization"] = `bearer ${d?.jwtToken}`

        request.headers["Content-Type"] = `Application/json`

        return request;
},(errow)=>{

   return Promise.reject(errow);

})

authfetchI.interceptors.response.use((respose)=>{

    return respose;

},(error)=>{


    console.log(error);

    return Promise.reject(error);

})

export default authfetchI;
