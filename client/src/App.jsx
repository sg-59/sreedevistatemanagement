import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom"
import Main from "./Pages/Main"
import Cart from "./Pages/Cart"
import Layout from "./Pages/Layout"
import Notfoundpage from "./Pages/Notfoundpage"
import Singleitem from "./Pages/Singleitem"
import Ref from "./Pages/Ref"
import Reducer from "./Pages/Reducer"
import { Appcontext } from "./Pages/context"
import First from "./Pages/First"
import Second from "./Pages/Second"
import Reduxfirst from "./Pages/Reduxfirst"
function App() {

  const person={
    name:"sreedevi",
    place:"kochi",
    email:"sree@gmail.com"
  }


  const router=createBrowserRouter(
createRoutesFromElements(
  <>
  <Route path="/" element={<Layout/>}>
<Route index element={<Main/>}/>
<Route path="/cartabc" element={<Cart/>}/>
<Route path="/singlepage/:id" element={<Singleitem/>}/>

  </Route>
  <Route path="ref" element={<Ref/>}/>
  <Route path="reducer" element={<Reducer/>}/>
  <Route path="*" element={<Notfoundpage/>}/>
  <Route path="first" element={<First/>}/>
  <Route path="second" element={<Second/>}/>
  <Route path="rfirst" element={<Reduxfirst/>}/>
  </>

)
  )

  return (
    <>
    <Appcontext.Provider value={person}>
      <RouterProvider router={router}></RouterProvider>
      </Appcontext.Provider>
 
  </>
  )
}

export default App
