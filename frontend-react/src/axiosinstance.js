import axios from "axios";

const baseURL=import.meta.env.VITE_BACKEND_BASE_API;
const axiosinstance=axios.create({
  baseURL:'baseURL',
  headers:{
    'Content-Type':'application/json',
  }
})

//request Interceptor
axiosinstance.interceptors.request.use(
  function(config){
    console.log('request without auth' ,config);
    const accessToken=localStorage.getItem("accessToken");
    if(accessToken){
      config.headers['Authorization']=`Bearer ${accessToken}`
    }
    return config;
  },
  function(error){
    return Promise.reject(error);
  }
)


// respone Interceptor
axiosinstance.interceptors.response.use(
  function(respone){
    return respone;
  },
  // handle fail response
   async function(error){
    const originalRequest=error.config;
    if(error.resposne.status===401&&!originalRequest.retry){
      originalRequest.retry=true;
      const refreshToken=localStorage.getItem('refreshToken')
      try{
        const respone= await axiosinstance.post('/token/refresh/',{refresh:refreshToken})
        localStorage.setItem('accessToken',respone.data.access)
        originalRequest.headers['Authorization']=`Bearer ${respone.data.access}`
        return axiosinstance(originalRequest);
      }
      catch(error){
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href='/login'
      }
    }
    return Promise.reject(error);
  }
)
export default axiosinstance;