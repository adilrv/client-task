import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from '../components/Menu'
import About from '../Pages/About'
import Connect from '../Pages/Connect'

import Error from '../Pages/Error'
import Works from '../Pages/Works'


const Routers =()=>{
    return(
        
        <BrowserRouter>
   
        <Routes>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Connect' element={<Connect/>}> </Route>
            <Route path='/Works' element={<Works/>}> </Route>
            <Route path='/' element={<Menu/>}> </Route>
            <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;