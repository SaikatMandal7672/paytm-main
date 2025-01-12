import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
const SignIn = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="bg-slate-300 h-[90vh] w-1/2 flex justify-center rounded-xl shadow-xl ">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg">
            <Heading label={"Sign in"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox placeholder="abc@gmail.com" label={"Email"} />
            <InputBox placeholder="123456" label={"Password"} />
            <div className="pt-4">
              <Button label={"Sign in"} />
            </div>
            <BottomWarning label={"Don't have an account?"} linktext={"Sign up"} to={"/signup"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn