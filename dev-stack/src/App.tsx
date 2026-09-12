import { Suspense, useState } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Explore from './Components/Explore/Explore';

const fetchData = async() => {
  const res = await fetch('devData.json');
  const data = await res.json()
  return data
}
function App() {
  const [devData] = useState(()=>fetchData())

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Suspense fallback={<p>Loading Date.........</p>}>
        <Explore devData={devData}></Explore>
      </Suspense>
    </div>
  )
    
}

export default App
