import axios from "axios";


const axiosSecure=axios.create({
    baseURL:'https://bookly-server.vercel.app',
    withCredentials:true
})

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;