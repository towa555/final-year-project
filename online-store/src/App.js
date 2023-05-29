import HOME from './pages/home';
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { Routes,Route ,Navigate} from "react-router-dom"
import Success from "./pages/Success";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <HOME/> }></Route>

      <Route path="productlist/:category" element={ <ProductList/> }></Route>

      <Route path="product/:id" element={ <Product/> }></Route>

      <Route path="login" element={ user ? <Navigate to="/" /> : <Login /> }></Route>

      <Route path="register" element={ user ? <Navigate to="/"/> :  <Register /> }></Route>

      <Route path="Cart" element={ <Cart/> }></Route>

      <Route path="Cart" element={ <Success/> }></Route>

    </Routes>
    </div>
  );
}

export default App;
