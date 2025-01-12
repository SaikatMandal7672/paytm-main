import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import TransferMoney from "./Pages/TransferMoney";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<TransferMoney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
