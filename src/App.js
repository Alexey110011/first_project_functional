import * as React from "react"
import Map from'./Map.js'
import {Routes,
        Route
} from "react-router-dom"
import {Tablo} from './Tablo.js'


function App() {
   return (
  <div className="App">
<Routes>
  <Route path = "/" element = {<Tablo/>}/>
  <Route path = "map" element = {<Map/>}/>
</Routes>
</div>
 );
}

export default App;
