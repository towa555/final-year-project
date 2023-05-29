import HOME from './pages/home';
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Account from './pages/Account';
import { Routes,Route } from "react-router-dom"
import Success from "./pages/Success";
import { AuthContextProvider } from './contexts/AuthContext';
import ProtectedRoute from './pages/ProtectedRoute';
function App() {

  return (
    <div className="App">
        <AuthContextProvider>
    <Routes>
      <Route path="/" element={ <HOME/> }></Route>

      <Route path="productlist/:category" element={ <ProductList/> }></Route>

      <Route path="product/:id" element={ <ProtectedRoute><Product/></ProtectedRoute>  }></Route>

      <Route path="login" element={ <Login /> }></Route>

      <Route path="register" element={  <Register /> }></Route>

      <Route path="Cart" element={  <ProtectedRoute><Cart/></ProtectedRoute>    }></Route>

      <Route path="account" element={  <ProtectedRoute><Account/></ProtectedRoute>    }></Route>

      <Route path="Cart" element={  <ProtectedRoute><Success/></ProtectedRoute>  }></Route>

    </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;
