
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import { Navbar } from './components/navbar';
import {Cart} from './pages/cart/cart';
import { Shop } from './pages/shop/shop'
import { ShopContext, ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">
       <ShopContextProvider>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Shop></Shop>}></Route>
                <Route path='/cart' element={<Cart></Cart>}></Route>

            </Routes>
          </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
