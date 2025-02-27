import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StartRating from './UsePopCorn/start/StartRating'
import App from './App'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <StartRating maxRating={5} message={["Terrible",
      "bad","good","better","best"
    ]} defaultRating={3}/>
    <StartRating maxRating={10} color="red" size="56"/>
    <StartRating maxRating={15} color="blue" size="24"/>
     */}
  </StrictMode >,
)
