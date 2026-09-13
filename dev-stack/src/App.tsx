import { Suspense, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Explore from "./Components/Explore/Explore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

const fetchDevData = async () => {
  const res = await fetch("devData.json");
  const data = await res.json();
  return data;
};

function App() {
  const [devData] = useState(() => fetchDevData());
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Suspense fallback={<p className="text-center">Loading Date.........</p>}>
        <Explore devData={devData}></Explore>
      </Suspense>
      <Footer></Footer>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
export default App;
