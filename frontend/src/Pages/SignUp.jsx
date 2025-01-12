
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate();
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-slate-300 h-[90vh] w-1/2 rounded-xl shadow-xl flex flex-col justify-center items-center' >

        <div className="rounded-xl bg-white w-max text-center p-2 h-max px-4 shadow-lg">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={e => {
              setFirstName(e.target.value);
            }}
            placeholder="John" label={"First Name"} />
          <InputBox
            onChange={e => {
              setLastName(e.target.value);
            }}
            placeholder="Doe" label={"Last Name"} />
          <InputBox
            onChange={e => {
              setUsername(e.target.value);
            }}
            placeholder="abc@gmail.com" label={"Email"} />
          <InputBox
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="123456" label={"Password"} />
          <div className="pt-4">
          <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard?firstName="+firstName+"&lastname="+lastName);
          }} label={"Sign up"} />
        </div>
          </div>
          <BottomWarning label={"Already have an account?"} to={"/signin"} linktext={"Signin"} />
        </div>

      </div>
    </div>
  )
}

export default SignUp