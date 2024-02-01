import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductsPagination from "./components/ProductsPagination";
import Product from "./components/Product";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <>
      <BrowserRouter>
      <h1 >Mktintumon WORLD🌍</h1>

      {/* BREADCRUMBS */}
      <Breadcrumbs/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductsPagination/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
