import HeaderAndFooterExample from "../Component/RequestCard";
import student_request_data from "../Resource/studentrequest";
// conditional redering
export default function Inqueries() {
  return (
    <div className="m-auto"> 
    <h1>Student Request</h1>
    <div className="mx-5 d-flex flex-column">

    {
        student_request_data.map((info, index)=>{
                return <HeaderAndFooterExample data={info} key={info.id} />
        })
    }
        
    </div> 
    </div>
  )
}
// npm i <anything> --force
// index: use for now | future 