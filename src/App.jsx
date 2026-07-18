import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
