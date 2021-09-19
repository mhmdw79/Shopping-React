import "./App.css";
import Navbar from "./components/shared/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Store from "./components/Store";
import ShopCart from "./components/shared/ShopCart";
import ProductsDetalis from "./components/ProductsDetalis";
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
const App = () => {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar/>
          <Switch>
            
            <Route path="/products/:id" component={ProductsDetalis} />
            <Route path="/products" component={Store} />
            <Route path="/cart" component={ShopCart}/>
            <Redirect to="/products" />
          </Switch>
          </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
