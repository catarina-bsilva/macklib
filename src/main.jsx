import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Header from './components/layout/header.jsx'
import App from './App.jsx'
import Colors from './components/paginas/colors.jsx'
import Paletes from './components/paginas/paletes.jsx'
import Fonts  from './components/paginas/fonts.jsx'
import Library from './components/paginas/macklib.jsx'
import MackColors from './components/paginas/mack/Colors.jsx'
import Components from './components/paginas/mack/Components.jsx'
import Grid from './components/paginas/mack/Grid.jsx'
import Text from './components/paginas/mack/Text.jsx'
import Utilities from './components/paginas/mack/Utilities.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/macklib'> 
    <Header/>
      <Routes>
        <Route path='/' element= {<App />}/>
        <Route path='/colors' element= {<Colors />}/>
        <Route path='/paletes' element= {<Paletes />}/>
        <Route path='/fonts' element= {<Fonts />}/>
        <Route path='/library' element= {<Library />}/>
        <Route path='/library/colors' element= {<MackColors />}/>
        <Route path='/library/components' element= {<Components />}/>
        <Route path='/library/grid' element= {<Grid />}/>
        <Route path='/library/text' element= {<Text />}/>
        <Route path='/library/utilities' element= {<Utilities />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
