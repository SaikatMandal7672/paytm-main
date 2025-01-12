import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"


const Dashboard = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/v1/accounts/balance',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      },
  
    };
  
    axios.request(config).then(response => {
      setValue(response.data.balance)
      console.log(value)
    })
  },[]) 



  return <div>
    <Appbar />
    <div className="m-8">
      <Balance value={value} />
      <Users />
    </div>
  </div>
}

export default Dashboard



