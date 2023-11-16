import './App.css'
import Body from './components/Body'
import Navbar from './components/Navbar'

import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Slider from './components/Slider'
import Contact from './components/Contact'


function App() {
  
  return (
    <div className='w-full h-full overflow-hidden absolute flex items-center justify-center -z-10'>

      <div className='relative  w-full h-full border border-white bg-image flex items-center justify-center   '>
        <div className='w-11/12 h-[91%] m-auto border border-white  bg-white rounded-3xl overflow-y-auto z-20' >
          <Navbar />
          <Body/>
          <Services/>
          <Slider/>
          <Portfolio/>
          <Contact/>
        </div>
      </div>
    </div>
  ) 
}

export default App
