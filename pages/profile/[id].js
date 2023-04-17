import { useRouter } from "next/router";
import { useState } from "react";
const Id = () => {
    const d=useRouter().query.id;
    const [data,setData]=useState()
    const [loading,setLoading]=useState(false);
    // console.log(d)
    const FecthData=async()=>{
        try {
            await fetch(`https://103.30.64.62/api/idea/${d}`, {
              method: "GET",
            })
              .then(async (res) => {
                const data = await res.json();
    
                // console.log(data);
                setLoading(false);
                if (data.success) {
                //   alert("Idea submitted successfully !");
                  window.location.href="/";
    
                } else {
                  alert("Something went wrong !");
                }
              })
              .catch((err) => {
                console.log(err);
              });
    
            // // console.log(json);
          } catch (error) {
            alert("Something went wrong!");
            // console.log(error);
          }
    
    }
    return ( <div>
        <div className="p-5 flex flex-col items-center">
        <h1 className="mb-12 text-center text-2xl font-extrabold md:text-5xl lg:text-4xl">
            Profile
          </h1> 
          <div className="flex flex-col">
          <div className="flex space-x-3">
            <label className="font-bold">Title:</label>
            <label className="">Title</label>
          </div>
          <div className="flex space-x-3">
            <label className="font-bold">Team leader:</label>
            <label className="">Team leader</label>
          </div> <div className="flex space-x-3">
            <label className="font-bold">Email</label>
            <label className="">Email</label>
          </div> <div className="flex space-x-3">
            <label className="font-bold">Innovation:</label>
            <label className="">Innovation</label>
          </div> <div className="flex space-x-3">
            <label className="font-bold">Applicability:</label>
            <label className="">Applicability</label>
          </div> <div className="flex space-x-3">
            <label className="font-bold">Relevance:</label>
            <label className="">Relevance</label>
          </div>
            
          </div>
        </div>
    </div> );
}
 
export default Id;