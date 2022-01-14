import * as React from "react"
import {useContext,createContext, useState} from 'react'
import './App.css';
import Map1 from'./Map.js'
import {Diary1} from'./Diary.js'
import {Routes,
        Route,
        Link        
    } from "react-router-dom"
import {Tablo} from './Tablo.js'
export const Context = createContext("101")


function App() {
 /* const [cloudness, setCloudness] = useState(false)
  const ctx = {
  toggleTheme:()=> {
    setCloudness(!cloudness)
  },
  theme: cloudness? "Убрать облака" : "Показать облака",
  }*/

   return (
    
    <div className="App">
<Routes>
  <Route path = "/" element = {<Tablo/>}/>
  <Route path = "map" element = {<Map1/>}/>
</Routes>
</div>
 );
}
<>
<nav>
  <Link to ="/map">Maps</Link>
</nav>
</>

export default App;
