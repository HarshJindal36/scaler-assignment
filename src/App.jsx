import { useEffect, useState } from 'react'
import diagram from "./assets/diagram.png";
import CabBook from './components/cabbook';
import { IconPlus, IconMinus } from '@tabler/icons-react';

function App() {
  const [pathPerCab, setPathPerCab] = useState({});
  const [numCabs, setNumCabs] = useState(5);
  const [timePath, setTimePath] = useState({});

  useEffect(() => {
    console.log(pathPerCab);
  }, [pathPerCab])

  useEffect(() => {
    console.log(timePath);
  }, [timePath])



  return <div className="mb-10">
    <div className='mx-auto w-fit'>
      <img src={diagram} className='p-3' />
    </div>
    <div className='mx-auto w-fit'>
      <div className='text-3xl font-bold'>Book a Cab</div>
      {[...Array(numCabs)].map((_, i) => {
        return <CabBook key={i} id={i} defaultRate={parseInt(Math.random() * 100)} pathPerCab={pathPerCab} setPathPerCab={setPathPerCab} timePath={timePath} setTimePath={setTimePath} />
      })}
    </div>
    <div className='flex bg-slate-200 my-4 rounded-xl w-fit mx-auto'>
      {numCabs < 5 && <IconPlus className='mx-auto w-10 h-10 text-blue-500 cursor-pointer' onClick={() => setNumCabs(numCabs + 1)} />}
      {numCabs > 1 && <IconMinus className='mx-auto w-10 h-10 text-blue-500 cursor-pointer' onClick={() => setNumCabs(numCabs - 1)} />}
    </div>
  </div>
}

export default App
