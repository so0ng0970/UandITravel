import axios from "axios";
import { getCookie } from "../cookie";
export const instance = axios.create({
    baseURL: 'http://43.201.36.176',
    
  });

  instance.interceptors.request.use(function (config) {
    const access_token = getCookie("access_token");
    const refresh_token = getCookie("refresh_token");
    
    console.log("dmd",access_token,refresh_token)
    
    if( access_token !== undefined 
    ){
        config.headers.common["Authorization"] = access_token;
    }if ( refresh_token !== undefined){
        config.headers.common["Refresh_token"]  = refresh_token;
    }
    } 
      );
    