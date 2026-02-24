import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home, { Greeting } from './Home.jsx'
import { Third } from './Home.jsx'
import EventHandling from './eventHandling/EventHandling.jsx'
import Profile from './pages/Profile.jsx'
import DaySix from './Day-6/DaySix.jsx'
import Authenticate from './auth/Dashboard.jsx'
import Login from './auth/login.jsx'
import AuthPage from './auth/AuthPage.jsx'
import Tasks from './tasks/AllTask.jsx'
import FoodMenu from './pages/FoodMenu.jsx'
import DynamicFoodMenu from './pages/DynamicFoodMenu.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Home></Home>
      <Third /> */}
    {/* <Profile name="rajan" age={20} address={"kathmandu"} />
    <EventHandling />
    <Greeting name="Rajan" last="Pantha"></Greeting>
    <DaySix /> */}
    {/* <AuthPage isAuthenticated={false}/>
        <br></br>
    <b>After Login....</b>
    <AuthPage isAuthenticated={true}/> */}
   {/* <Tasks/> */}
<DynamicFoodMenu/>
  </StrictMode>,
)
