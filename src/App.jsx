import './App.css'
import Navbar from './components/Navbar'
import Body from './pages/Body'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Slider from './pages/Slider'
import Contact from './pages/Contact'


function App() {
  
  return (
    <div className='w-full h-full overflow-hidden absolute flex items-center justify-center -z-10'>

      <div className='relative  w-full h-full border border-white bg-image flex items-center justify-center   '>
        <div className='w-11/12 h-[91%] m-auto border border-white  bg-white rounded-3xl overflow-y-auto no-scrollbar z-20' >
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
