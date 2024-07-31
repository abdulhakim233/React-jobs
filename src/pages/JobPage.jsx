import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
    const {id} = useParams();
     const [job,setJob]= useState(null);
     const [loading ,setLoding] =useState(true);

    useEffect(() => {
        const fetchJOb = async () =>{
        
            try {
             const res = await fetch(`/api/jobs/${id}`);
             const data = await res.json();
             setJob(data);
            }catch (error) {
             
             console.log('error fetching data', error);
            }
            finally{
             setLoding(false);
            }
        }
        fetchJOb();

    },[])

  return  loading ? <Spinner/> : <h1>{job.title}</h1>;
  
};




export default JobPage;