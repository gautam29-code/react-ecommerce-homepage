import { useEffect, useState } from "react";
import axios from "axios";

function Usefetch(url){
    let[data,setdata]=useState(null)
    let[error,seterror]=useState("")

    useEffect(()=>{
        axiosdata()

    },[])

    
   async function axiosdata(){
        try{
            let res=await axios.get(url)
            setdata(res.data)

        }catch(err){
            seterror(err)

        }
    }
    return data;
}export default Usefetch;