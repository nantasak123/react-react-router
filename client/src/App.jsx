import "./App.css";
// package imports
import { BrowserRouter,Route,Routes } from "react-router-dom";
// conponents imports
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product/view/:productId" element={<ViewProductPage/>} />
          <Route path="/product/create" element={<CreateProductPage/>} />
          <Route path="/product/edit/:productId" element={<EditProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
