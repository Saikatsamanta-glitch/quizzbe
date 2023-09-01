import React from 'react';
import student_request_data from '../Resource/studentrequest';
import { useParams } from 'react-router-dom';
export default function StudentReq() {
        const param =useParams();
        console.log(param);

        const data = student_request_data.filter( (val)=>{ 
              if(val.id == param.requestId){
                
                return val;
              }
         } )
         console.log(data);
        // [ {} ]
  return (
    <div>
        StudentReq 🚀
    <h1> Student ID: {param.requestId} </h1>
    <h1> {data[0].Name} </h1>
    
    </div>
  )
}
