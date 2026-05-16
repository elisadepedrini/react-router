import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import WhoPage from "./pages/WhoPage"
import ProductsPage from "./pages/ProductsPage"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/who" element={<WhoPage />}/>
          <Route path="/products" element={<ProductsPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
